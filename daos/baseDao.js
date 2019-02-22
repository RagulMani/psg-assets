var mongodb = require('./MongodDbUtil');

function create(record, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.insert(record, function (err, result) {
        if (!err) {
            callback(null, result.ops[0]);
        } else {
            callback(err, null);
        }
    });
}

function createMany(records, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.insertMany(records, function (err, result) {
        if (!err) {
            callback(null, result.ops[0]);
        } else {
            callback(err, null);
        }
    });
}

function getAll(callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.find({}).toArray(function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getById(id, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.findOne({ _id: mongodb.ObjectID(id) }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getByQuery(query, projection, callback) {
    var limitValue = null;
    var skipValue = null;
    if (query.limitValue) {
        limitValue = query.limitValue;
        delete query.limitValue;
    }
    if (query.skipValue || query.skipValue === 0) {
        skipValue = query.skipValue;
        delete query.skipValue;
    }
    if (typeof projection == "function") {
        callback = projection;
        projection = null;
    }
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());

    var cursor;
    if (projection) {
        var projectionObj = {};
        projection.forEach(function (p) {
            projectionObj[p] = 1;
        });
        cursor = coll.find(query, projectionObj).limit(parseInt(limitValue)).skip(parseInt(skipValue));
    } else {
        cursor = coll.find(query).limit(parseInt(limitValue)).skip(parseInt(skipValue));

    }
    cursor.toArray(function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });

}

function distinctByQuery(field, query, callback) {
    if (typeof query == "function") {
        callback = query;
        query = null;
    }
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    if (!query)
        query = {};
    coll.distinct(field, query, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    })
}
function update(query, detailsToUpdate, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.update(query, { $set: detailsToUpdate }, { multi: false }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null); 
        }
    });
}

function updateRemoveArrayObject(query, detailsToUpdate, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.update(query, { $pull: detailsToUpdate }, { multi: true }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}


function updateToUnset(query, detailsToUpdate, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.update(query, detailsToUpdate, { multi: false }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });

}

function updateArrayById(id, elementsToPush, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());

    coll.update({ _id: mongodb.ObjectID(id) }, { $push: elementsToPush }, { multi: false }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}


function updateArrayByQuery(query, elementsToPush, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());

    coll.update(query, { $push: elementsToPush }, { multi: false }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function removeItemInArrayByQuery(query, elementToDelete, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());

    coll.update(query, { $pull: elementToDelete }, { multi: false }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function updateById(id, detailsToUpdate, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());

    var deletedId;
    if (detailsToUpdate._id) {
        deletedId = detailsToUpdate._id;
        delete detailsToUpdate._id;
    }

    coll.update({ _id: mongodb.ObjectID(id) }, { $set: detailsToUpdate }, { multi: true }, function (err, result) {
        if (deletedId) {
            detailsToUpdate._id = deletedId;
        }

        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });

}
function updateByIdandQuery(cond, detailsToUpdate, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());

    var deletedId;
    if (detailsToUpdate._id) {
        deletedId = detailsToUpdate._id;
        delete detailsToUpdate._id;
    }
    var monId = mongodb.ObjectID(cond._id);
    delete cond._id;
    var cond1 = { _id: monId, $where: cond.$where }
    coll.update(cond1, detailsToUpdate, { multi: false }, function (err, result) {
        if (deletedId) {
            detailsToUpdate._id = deletedId;
        }

        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });

}

function updateMany(query, detailsToUpdate, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.updateMany(query, { $set: detailsToUpdate }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });

}
function getAggregateData(aggregateParams, callback) {
    var db = mongodb.getDb();
    var coll = db.collection("nodes");
    coll.aggregate([
        { "$match": aggregateParams.match },
        { "$project": aggregateParams.project }
    ], function (err, res) {
        if (!err) {
            callback(null, res);
        }
        else {
            callback(err, null);
        }
    })
}

function remove(id, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.remove({ _id: mongodb.ObjectID(id) }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function removeByQuery(query, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.remove(query, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getMongoDb() {
    return mongodb;
}

function bulkWrite(bulk, callback) {
    var db = mongodb.getDb();

    var coll = db.collection(this.getCollectionName());

    coll.bulkWrite(bulk, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
};

function getDb() {
    return monogdb.getDb();
}

module.exports = function BaseDao(collectionName) {
    return {
        create: create,
        createMany: createMany,
        getAll: getAll,
        getById: getById,
        getByQuery: getByQuery,
        distinctByQuery: distinctByQuery,
        update: update,
        updateById: updateById,
        updateRemoveArrayObject, updateRemoveArrayObject,
        updateByIdandQuery: updateByIdandQuery,
        updateMany: updateMany,
        updateToUnset: updateToUnset,
        updateArrayById: updateArrayById,
        updateArrayByQuery: updateArrayByQuery,
        removeItemInArrayByQuery: removeItemInArrayByQuery,
        remove: remove,
        removeByQuery: removeByQuery,
        bulkWrite: bulkWrite,
        getAggregateData: getAggregateData,
        getDb: getDb,
        getMongoDb:getMongoDb,
        getCollectionName: function () {
            return collectionName;
        },
    };
};
