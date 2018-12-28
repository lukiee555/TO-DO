//This file is used for connecting node to mongoose

const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const dbname = "todo_mongodb";
const url = "mongodb://localhost:27017";
const mongoOptions = {
  userNewUrlPraser: true
};
const 
