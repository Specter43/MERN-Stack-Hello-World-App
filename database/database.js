// Mongo Database
const mongoose = require("mongoose");

const connectionString = `mongodb+srv://dbAdmin:1234567890@azurecloudcluster.cry7k.mongodb.net/TEST_DB?authSource=admin&replicaSet=atlas-nyttpd-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
mongoose.Promise = global.Promise;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Database connected"))
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
