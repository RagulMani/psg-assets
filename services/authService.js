'use strict';
var request = require('request');
let adminClient = require('../kc-admin-client/kc-admin-client');
var appLogger = require('../logging/appLogger');
var config = require('../config/config.' + process.env.NODE_ENV);
var keycloakConfig = config.authServerConfig;
let settings = config.authServerConfig.settings;
var realmName = config.authServerConfig.realmName;
var USER_GROUP = config.authServerConfig.userGroup;

//reference to Keycloak REST API client
var kcApiClient;
var userGroupId;

//initialize client
adminClient(settings)
    .then((client) => {
        appLogger.info("Connected successfully to Keycloak server");

        kcApiClient = client;

        client.groups.find(realmName).then((groups) => {
            if (groups.length > 0) {
                groups.forEach(function (g) {
                    if (g.name == USER_GROUP) {
                        userGroupId = g.id;
                    }
                });
            }
        });
    }) //end adminClient
    .catch((err) => {
        appLogger.error(err, "Error while trying to connect to KeyCloak server");
    });

function createUser(userRecord, callback) {
    var authUser = createAuthUser(userRecord);

    adminClient(settings)
        .then((client) => {

            // STEP 1: createUser
            client.users.create(realmName, authUser)
                .then((createdUser) => {
                    appLogger.info(`Created user account for ${authUser.memberId} with id ${createdUser.id}`);

                    //STEP 2: set password
                    var passwdVal = { temporary: true, value: userRecord.memberId };
                    var passwdPromise = client.users.resetPassword(realmName, createdUser.id, passwdVal);

                    //STEP 3: join student group to get the required roles in the system
                    passwdPromise.then(function () {
                        appLogger.info(`Password is set for user account ${authUser.memberId}`);

                        client.users.joinGroup(realmName, createdUser.id, userGroupId).then((updatedUser) => {
                            appLogger.info(`Updated user ${authUser.memberId} with student group successfully`);
                            callback(null, createdUser);

                        }).catch((err) => {
                            appLogger.error(err, "Error while trying to associate user to the Student group");
                            callback(err, createdUser);
                        });;//end groups update promise

                    }).catch((err) => {
                        appLogger.error(err, "Error while trying to set password in KeyCloak server");
                        callback(err, createdUser);
                    });;//end passwd promise

                });//end create promise
        });
}

function createUsers(users, callback) {
    var processedUsers = [];
    var errorUsers = [];

    createItr(users, 0, processedUsers, errorUsers, callback);

    function createItr(records, index, processedRecords, errorRecords, callback) {
        if (index >= records.length) {
            callback(((errorRecords.length == 0) ? null : errorRecords), processedRecords);
            return;
        }

        var user = records[index];
        createUser(user, function (err, createdUser) {
            if (err) {
                errorRecords.push(user);
            }
            processedUsers.push(createdUser);

            createItr(records, index + 1, processedRecords, errorRecords, callback);
        });
    }
}

function createAuthUser(userRecord) {
    var authUser = {};
    authUser.firstName = userRecord.memberName;
    authUser.username = userRecord.memberId;
    authUser.enabled = true;

    //TODO get the list of attributes from the function itself
    authUser.attributes = {
        roleName: userRecord.roleName,
        path: userRecord.path,
    };

    if (userRecord.email) {
        authUser.email = userRecord.email;
    }

    return authUser;
}

function verifyCallerWithKeycloak(req, res, next) {
    if (!keycloakConfig.verifyToken || keycloakConfig.bypassId == req.headers.authorization) {
        next();
        return;
    }
    var options = {
        method: 'POST',
        url: keycloakConfig.verifyTokenUrl,
        headers:
            {
                'Cache-Control': 'no-cache',
                'Authorization': req.headers.authorization,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        form: {}
    };

    request(options, function (error, response, body) {
        if (error) {
            appLogger.error("Failed to authenticate user token", response.statusMessage);
            res.status(500).send({ name: response.statusCode, message: response.statusMessage });
            return;
        }

        if (response.statusCode == 200) {
            next();
            return;
            // nJwt.verify(tok, null, function (err, verifiedJwt) {
            //     if (err) {
            //         role_arr = err.parsedBody.realm_access.roles;
            //     } else {
            //         role_arr = verifiedJwt.parsedBody.realm_access.roles;
            //     }
            // });
        }
        else {
            appLogger.error("Failed to authenticate user token", response.statusMessage);
            res.status(500).send({ name: response.statusCode, message: response.statusMessage });            
        }
    });
}

module.exports.createUser = createUser;
module.exports.createUsers = createUsers;
module.exports.verifyCallerWithKeycloak = verifyCallerWithKeycloak;
