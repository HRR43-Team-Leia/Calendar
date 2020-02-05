const express = require('express');
const ejs = require('ejs');
const bp = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bp.json());
app.engine('html', ejs.renderFile);
app.get('/:id', (req, res) => {
  res.render('../public/index.html');
});
app.set('view engine', 'html');

const port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`Listening on port ${port}`); });


<!DOCTYPE html>
<html>
<head>
  <title>Calendar-Proxy</title>
</head>
<body>
  <div id="app">NO REACT</div>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="http://localhost:3005/bundle.js"></script>
  <!-- <script>
    ReactDOM.render(
      React.createElement(App),document.getElementById('app')
    );
  </script> -->
</body>
</html>
