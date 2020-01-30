import React from 'react';
import Day from '../components/Day.jsx';
//each td hs fixed width and length
var Row = (props) => (
  <tr>
    {props.days.map((day) =>
        <td><Day data = {day} /></td>
    )}
  </tr>
);

export default Row;