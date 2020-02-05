//the whole Calendar area
import React from 'react';
import Month from '../components/Month.jsx';

var Calendar = (props) => (
  <div> {}
    {props.months.map(month =>
      <Month month = {month}/>
    )}
    <div></div>
  </div>
);


export default Calendar;