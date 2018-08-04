import React, { Component } from 'react';
import Tags from '../Tags/Tags';
import Splitter from '../Splitter/Splitter';
import Emojis from '../Emojis/Emojis';
import { connect } from 'react-redux';
import './Result.css';

class Result extends Component {
  render() {
    let status = null;

    if(this.props.keyword.length > 0) {
      status = <h2>{ this.props.filteredEmojis.length } matching results for '{ this.props.keyword }'</h2>
    }
    else {
      status = <h2>All { this.props.filteredEmojis.length } Github emojis</h2>
    }

    return (
      <section id="result">
        { status }
        <Tags />
        <Splitter />
        <Emojis />
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    filteredEmojis: state.filteredEmojis,
    keyword: state.keyword,
    currentMaximumEmojis: state.currentMaximumEmojis
  }
}

export default connect(mapStateToProps)(Result);