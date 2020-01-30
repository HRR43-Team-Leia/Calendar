import React from 'react';

var Day = (props) => (
  <button>
    {props.data.morning || props.data.lunch ? props.data.day: ""}
  </button>
);

export default Day;