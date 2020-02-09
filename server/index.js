const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const ejs = require('ejs');
const db = require('../database');

const port = process.env.PORT || 3005;

const app = express();

//add same address:3005
//add Dan:4000

const whitelist = [
  'http://18.222.165.232:4000', //Dan proxy
  'http://18.223.132.12:4000', //my proxy
  'http://18.217.113.225:4000', //Yer proxy
  'http://18.223.132.12:3005'
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(express.static('public'));
app.use(bp.json());
// app.engine('html', ejs.renderFile);

app.get('/:id', (req, res) => {
  res.render('../public/index.html');
});

app.get('/calendar/:id/', cors(corsOptions), (req, res) => {
  db.get(req.params.id,
    () => { res.sendStatus(400); },
    (data) => { res.send(data); });
});

app.listen(port, () => { console.log(`Listening on port ${port}`); });
