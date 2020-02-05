// the whole Calendar area for 6 months
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Month from './Month.jsx';

const Wrapper = styled.div`
  background-color: brown;
  // display: flex;
  // flex-flow: row nowrap;
  // align-items: flex-start;
  // justify-content: left;
`;

const Slider = styled.div`
  position: relative
  top: 0;
  left: 300px;


  //transition: left 0.3s;

  display: flex;
  flex-flow: row nowrap;
`;

const Calendar = ({ months }) => (
  <Wrapper>
    <Slider>
      {months.map((month) => <Month month={month} />)}
    </Slider>
  </Wrapper>
);

export default Calendar;
