import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const rotate = keyframes`
from {
  transform:translateX(200%);
}
to {
  transform: translateX(0);
}
`;

const Yes = styled.div`
  font-size: 1em;
  text-align: center;
  color: rgb(50,50,50);
  background-color: rgb(235,235,235);
  // height: 2em;
  // width: 2em;
  border-radius: 3px;
  border: 5px;
  // animation: ${rotate} 2s linear infinite;
`;

const No = styled.div`
  margin: auto;
  font-size: 1em;
  text-align: center;
  background-color: rgb(247,247,247);
  color: rgb(180,180,180);
  // height: 2em;
  // width: 2em;
  border-radius: 3px;
`;

const Day = ({ day, morning, lunch }) => (
  <div>
    { day ?
        morning || lunch? <Yes> {day} </Yes>:<No>{day}</No>: ''
    }
  </div>
);

Day.propTypes = {
  day: PropTypes.string.isRequired,
  morning: PropTypes.bool.isRequired,
  lunch: PropTypes.bool.isRequired,

};

export default Day;
