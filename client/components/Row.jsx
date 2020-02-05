import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day.jsx';

// each td hs fixed width and length
const Row = ({ days }) => (
  <tr>
    {days.map((day) => (
      <td>
        <Day day={day.day} morning={day.morning} lunch={day.lunch} />
      </td>
    ))}
  </tr>
);

Day.propTypes = {
  days: PropTypes.array.isRequired,
};

export default Row;
