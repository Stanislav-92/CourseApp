const express = require('express');
const MongoClient = require('mongodb').MongoClient;

let collection;
let col1;
let col2;
let line1;
let line2;

MongoClient.connect("mongodb://localhost:27017",  {useNewUrlParser: true, poolSize: 10})
  .then(client => {
    const db = client.db('chartDatabase');
    collection = db.collection('charts');
    collection.findOne({"chartID.value": "col1"}).then(response => col1 = response).catch(error => console.error(error));
    collection.findOne({"chartID.value": "col2"}).then(response => col2 = response).catch(error => console.error(error));
    collection.findOne({"chartID.value": "line1"}).then(response => line1 = response).catch(error => console.error(error));
    collection.findOne({"chartID.value": "line2"}).then(response => line2 = response).catch(error => console.error(error));
});

const app = express();

app.get("/col1", (req, res, next) => {
  res.json(col1);
});

app.get("/col2", (req, res, next) => {
  res.json(col2);
});

app.get("/line1", (req, res, next) => {
  res.json(line1);
});

app.get("/line2", (req, res, next) => {
  res.json(line2);
});

module.exports = app;
