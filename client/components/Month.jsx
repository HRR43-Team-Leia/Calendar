import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from './Row.jsx';

const Mnth = styled.div`
  display; flex;
  flex: 1;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: red;
  padding-right: 20px;
`;

const Month = ({ month }) => (
  <Mnth>
    <table>
      <caption>{month.month}</caption>
      <tbody>
        {month.days.map((row) =>
          <Row days = {row} />
        )}
      </tbody>
    </table>
  </Mnth>
);

export default Month;

