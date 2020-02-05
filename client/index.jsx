import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Calendar from './components/Calendar.jsx';
const cdrGen = require('./cdr.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: this.props.months
    }
  }

  render () {
    return (
    <div>
      <h2>Availability</h2>
      <div>
        <Calendar months = {this.state.months}/>
      </div>
      <iframe>FRAME</iframe>
      <button> select a date
      </button>
    </div>
    )
  }
}

$.ajax({
  url: `/calendar`,
  type: 'GET',
  success: (res) => {
    //console.log(res)
    ReactDOM.render(<App months = {res[0].dates} />, document.getElementById('app'));
  }
})

export default App;