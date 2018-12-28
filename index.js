// import modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//create instant of express
const app = express();
//use body parser for json data
app.use(bodyParser.json());

const db = require("./db");
const collection = "todo";
