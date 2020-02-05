import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from './Row.jsx';

const Mnth = styled.div`
  width: 200px;
  background-color: red;
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
