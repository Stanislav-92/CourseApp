const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

let chartsCollection;
let col1;
let col2;
let line1;
let line2;
let db;

MongoClient.connect("mongodb://heroku_8z95sck1:702f73gt572chdjmo09ttrh4bs@ds237955.mlab.com:37955/heroku_8z95sck1",  {useNewUrlParser: true, poolSize: 10})
  .then(client => {
    db = client.db('heroku_8z95sck1');
    chartsCollection = db.collection('charts');
    chartsCollection.findOne({"chartID.value": "col1"}).then(response => col1 = response).catch(error => console.error(error));
    chartsCollection.findOne({"chartID.value": "col2"}).then(response => col2 = response).catch(error => console.error(error));
    chartsCollection.findOne({"chartID.value": "line1"}).then(response => line1 = response).catch(error => console.error(error));
    chartsCollection.findOne({"chartID.value": "line2"}).then(response => line2 = response).catch(error => console.error(error));
    db.collection('users').createIndex({email:1}, {unique: true});
});

app.use(bodyParser.json());


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

app.post("/userInfo", (req, res) => {
  db.collection('users').insertOne(req.body, (err, data) => {
    if (err) {
      res.json({'status': 'DUPLICATE_ENTRY'});
    } else {
      res.json({'status': 'SUCCESS'});
    }
  });
});

module.exports = app;
