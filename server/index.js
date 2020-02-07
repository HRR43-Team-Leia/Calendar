const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const ejs = require('ejs');
const db = require('../database');

const port = process.env.PORT || 3005;

const app = express();
app.use(cors({
  origin: 'http://18.223.132.12:4000',

}));
app.use(express.static('public'));
app.use(bp.json());
// app.engine('html', ejs.renderFile);

app.get('/:id', (req, res) => {
  res.render('../public/index.html');
});

app.get('/calendar/:id/', (req, res) => {
  db.get(req.params.id,
    () => { res.sendStatus(500); },
    (data) => { res.send(data); });
});

app.listen(port, () => { console.log(`Listening on port ${port}`); });
