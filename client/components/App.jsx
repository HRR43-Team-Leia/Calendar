import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Calendar from './Calendar.jsx';

const CalendarArea = styled.div`
  position: relative;
  height: 450px;
  width: 800px;
  overflow: hidden;
  background-color: wheat;
`;

const Header = styled.div`
  color: blue;
`;

// how to have one element on the top and another at the bottom?
const Btn = styled.button`
  align-items: flex-end;
  color: blue;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [],
      expId: props.expId,
    };
  }

  componentDidMount() {
    const { expId } = this.state;
    axios.get(`http://localhost:3005/calendar/${expId}`)
      .then((res) => {
        this.setState({
          months: res.data[0].dates,
        });
      })
      .catch((err) => {
        console.log('ERROR from axios get request: ', err);
      });
  }

  render() {
    const { months } = this.state;
    console.log(months);
    return (
      <CalendarArea>
        <Header>Availability</Header>
        <Calendar months={months} />
        <Btn type="submit">select a date</Btn>
      </CalendarArea>
    );
  }
}

App.propTypes = {
  expId: PropTypes.number,
};
App.defaultProps = {
  expId: 1,
};



export default App;
