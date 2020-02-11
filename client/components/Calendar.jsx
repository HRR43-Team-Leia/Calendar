// the whole Calendar area for 6 months
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Month from './Month.jsx';

const Slider = styled.div`
position: relative;
height: 90%;
width: 100%;
left: 0%;
display: flex;
flex-flow: row;
`;

const Calendar = ({ months }) => (
  <Slider>
    {months.map((month) => <Month month={month} />)}
  </Slider>
);

export default Calendar;
