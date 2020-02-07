// the whole Calendar area for 6 months
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Month from './Month.jsx';

const Wrapper = styled.div`
background-color: brown;
overflow: hidden;
width: 400px;
`;

const Slider = styled.div`
position: relative;
height: 90%;
width: 100px;
left: -50%;

display: flex;
flex-flow: row;

`;

const Calendar = ({ months }) => (
  <Wrapper>
    <Slider>
      {months.map((month) => <Month month={month} />)}
    </Slider>
  </Wrapper>
);

export default Calendar;
