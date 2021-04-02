const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'votesdb';
const client = new MongoClient(url);
var dbConnection = null;
// Use connect method to connect to the server
(async () => {
    client.connect(function(err) {
        console.log(err);
        console.log('Connected successfully to server');
        dbConnection = client.db(dbName);
    });
})();

module.exports = {
    getConnection: () => {
        return dbConnection;
    },
}
