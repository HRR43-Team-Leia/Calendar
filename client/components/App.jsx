import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Calendar from './Calendar.jsx';


const CalendarArea = styled.div`
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
font-size: 14px;
line-height: 1.6;
color: #484848;
margin-left: auto;
margin-right: auto;
padding-bottom: 100px;
padding-left: 100px;

`;
const WrapperMain = styled.div`
display: flex;
flex-flow: row;
align-items: center;
`;

const W = styled.div`
width: 30px;
`;

const Wrapper = styled.div`
overflow: hidden;
margin-bottom: 40px;
width: 800px;
transition: left 1s;
`;

const Slider = styled.div`
position: relative;
width: 1200px;
left: 0px;
display: flex;
flex-flow: row;
transition: left 1s;
`;

const Header = styled.div`
display: flex !important;
flex-direction: column !important;
position: relative !important;
flex: none !important;
padding-right: 64px !important;
margin-bottom: 40px !important;
display: block;
font-size: 1.5em;
font-weight: bold;
font-size: 32px !important;
`;

const BtnPrev = styled.div`
color: rgb(50,50,50);
font-size: 1em;

}

`;
const BtnNext = styled.div`
color: rgb(50,50,50);
font-size: 1em;

}

`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [],
      expId: props.expId,
      slide: 0,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }



  componentDidMount() {
    const { expId } = this.state;
    axios.get(`http://18.223.132.12:3005/calendar/${expId}`)
      .then((res) => {
        this.setState({
          months: res.data[0].dates,
        });
      })
      .catch((err) => {
        console.log('ERROR from axios get request: ', err);
      });
  }
  // buttons are visible depending on the state
  nextSlide () {
    const { slide } = this.state;
    this.setState({
      slide: slide + 1,
    })
    console.log(this.state.slide);
    let element = document.getElementById('Slider');
    let left = getComputedStyle(element).getPropertyValue("left");
    console.log(left);
    let leftNew = Number(left.substring(0,left.length - 2)) - 200 + "px";
    element.style.left = leftNew;
  }

  prevSlide () {
    const { slide } = this.state;
    this.setState({
      slide: slide - 1,
    })
    console.log(this.state.slide);
    let element = document.getElementById('Slider');
    let left = getComputedStyle(element).getPropertyValue("left");
    console.log(left);
    let leftNew = Number(left.substring(0,left.length - 2)) + 200 + "px";
    element.style.left = leftNew;
  }

  render() {
    const { months } = this.state;
    const { slide } = this.state;
    return (
      <CalendarArea>
        <Header>Availability</Header>
        <WrapperMain>
          <W>{slide !== 0 ? <BtnPrev type="submit" onClick={this.prevSlide}>&#60;</BtnPrev> : <div></div>}</W>
        <Wrapper>

          <Slider id="Slider">
            <Calendar months={months} />
          </Slider>

        </Wrapper>
        {slide !== 2 ? <BtnNext type="submit" onClick={this.nextSlide}>&#62;</BtnNext> : <div></div>}
        </WrapperMain>
      </CalendarArea>
    );
  }
}

App.propTypes = {
  expId: PropTypes.number,
};

export default App;
