// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://geeksladder:geeksladder@cluster0-2cfce.mongodb.net/demo?retryWrites=true&w=majority";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.createCollection("comments", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const csp = require('helmet-csp')

const app = express();

const setCSP = (req, res, next) => {
  res.setHeader('Content-Security-Policy', 'default-src \'self\'; style-src https://fonts.googleapis.com \'self\'; script-src https://code.jquery.com \'self\'; font-src https://fonts.gstatic.com');
  res.setHeader('X-Content-Security-Policy', 'default-src \'self\'; style-src https://fonts.googleapis.com \'self\'; script-src https://code.jquery.com \'self\'; font-src https://fonts.gstatic.com');
  res.setHeader('X-WebKit-CSP', 'default-src \'self\'; style-src https://fonts.googleapis.com \'self\'; script-src https://code.jquery.com \'self\'; font-src https://fonts.gstatic.com');
  next();
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/withCSP', setCSP, express.static('./starter-template'));
app.use('/withoutCSP', express.static('./starter-template'));
app.listen(8000, () => console.log(`server started on port ${8000}`));