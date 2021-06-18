// Mongo Database
const mongoose = require('mongoose');

const userName = "dbAdmin";
const password = "1234567890";
const dbName = "TEST_DB";

// const connectionString = `mongodb+srv://${userName}:${password}@azurecloudcluster.cry7k.mongodb.net/${dbName}?authSource=admin&replicaSet=atlas-nyttpd-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
const connectionString = "mongodb://cosmosgdct:w1WHLC1KeRNhvC8c8F8imkgl6xlcaXa0nrvJWTrQ1VG0hgvs16VY9XNRgljRnTqRGMYWesDSF1CtiUTOhXqeww==@cosmosgdct.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@cosmosgdct@";
// const connectionString = "mongodb://cosmosgdct:0DOcMEjJsbN8Za04yhN1ypBqS8wL9G9YlFsI1bN08yCqfOOGmrbGJcFFim8HEftFsIg3Vgdb96xTs4uRHXOBmA==@cosmosgdct.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@cosmosgdct@";
mongoose.Promise = global.Promise;

mongoose.connect(connectionString, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(
        console.log("Database connected"),
    )
    .catch(e => {
        console.error('Connection error', e.message);
    })

const db = mongoose.connection;

module.exports = db;
