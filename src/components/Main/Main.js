import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import { connect } from 'react-redux';
import MainHeader from '../MainHeader/MainHeader';
import Result from '../Result/Result';
import MainFooter from '../MainFooter/MainFooter';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <main>
        <MainHeader />
        <Animated 
            animationIn="bounceInUp" 
            animationOut="fadeOut" 
            isVisible={ 'true' }
          >
          <Result />
        </Animated>
        <MainFooter />
      </main>
    );
  }
}

export default Main;