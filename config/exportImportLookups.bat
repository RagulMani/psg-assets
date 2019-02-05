mongoexport --db psg-guest-house --collection lookups --out guestHouseMasterData.json
mongoimport --db psg-guest-house --collection lookups --file guestHouseMasterData.json