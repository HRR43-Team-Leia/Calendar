import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

if (window.location.href.split('/').slice(-1)[0]) {
  const expId = parseInt(window.location.href.split('/').slice(-1)[0], 10);
  console.log('expId in URL: ', expId);
  ReactDOM.render(<App expId={expId} />, document.getElementById('app'));
} else {
  console.log('expId was set by defaultprops in App.jsx');
  ReactDOM.render(<App />, document.getElementById('app'));
}
