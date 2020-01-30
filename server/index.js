const express = require('express');
const bp = require('body-parser');
const db = require('../database')

const port = process.env.PORT || 3005

const app = express();
app.use(express.static(__dirname + '/../public'));
app.use(bp.json());

app.get('/calendar', (req,res) => {

  db.get(2,  //hard code
    () => { res.sendStatus(500); },
    (data) => { res.send(data); }
  );
})

app.listen(port, ()=>{ console.log(`Listening on port ${port}`) })