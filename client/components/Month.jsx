import React from 'react';
import Row from '../components/Row.jsx';

var Month = (props) => (
  <div>{Array.isArray(props.table)}
    <table>
      <caption>{props.month.month}</caption>
      <tbody>
        {props.month.days.map((row) =>
          <Row days = {row} />
        )}
      </tbody>
    </table>
  </div>
);

export default Month;
