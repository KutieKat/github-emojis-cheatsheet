import React, { Component } from 'react';
import Aside from './Aside/Aside';
import Main from './Main/Main';
import axios from 'axios';
import { DATA_URL } from '../configs/configs';
import { connect } from 'react-redux';

import { loadInitialEmojisData, loadInitialCategoriesData } from '../store/ActionCreators';

class App extends Component {
  componentDidMount() {
    axios.get(DATA_URL)
      .then(response => {
        this.props.dispatch(loadInitialEmojisData(response.data));
        this.props.dispatch(loadInitialCategoriesData(response.data));
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <Aside />
        <Main />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(App);