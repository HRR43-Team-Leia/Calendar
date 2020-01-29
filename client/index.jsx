import React from 'react';
import moment from 'moment'

import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt:moment(),
      calendarFocused:true
    }
  }

  onDateChange (createdAt) {
    console.log('date selected' + createdAt)
    this.setState({createdAt: createdAt});
  }
  onFocusChange ({focused}) {
      console.log(focused);
      this.setState({calendarFocused:focused})
  }

  render () {
    // const pr = {

    //   numberOfMonths: 2,
    //   isDayHighlighted: (day) => {
    //     if (day._pf.parsedDateParts[2] === 10) {
    //       return true
    //     } else {
    //       return false
    //     }
    //   }

    // };

    return (
    <div>
      <h1>React Works!</h1>
      {/* <SingleDatePicker
        {...pr}

        date={this.state.createdAt}
        onDateChange={this.onDateChange.bind(this)}
        focused={this.state.calendarFocused}
        onFocusChange={this.onFocusChange.bind(this)}
      /> */}
    <table>
      <tr>
        <td></td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>3</td>
        <td></td>
        <td>6</td>
        <td>7</td>
      </tr>
    </table>
    <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31"></input>


    </div>
    )
  }
}

$.ajax({
  url: `/calendar`,
  type: 'GET',
  success: (res) => {
    console.log(res[0].dates);
    console.log(moment());
    ReactDOM.render(<App availableDates = {res[0].dates}/>, document.getElementById('app'));
  }
})

export default App;

