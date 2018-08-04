import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateKeyword, resetKeyword, filterEmojis } from '../../store/ActionCreators';
import './SearchBox.css';

class SearchBox extends Component {
  handleResetKeyword() {
    this.props.dispatch(resetKeyword());
    this.props.dispatch(filterEmojis());
  }

  handleChangeKeyword(e) {
    this.props.dispatch(updateKeyword(e.target.value));
    this.props.dispatch(filterEmojis());
  }

  render() {
    let removeButton = null;

    if(this.props.keyword != '') {
      removeButton = <button className="btn" onClick={ () => this.handleResetKeyword() }><i className="fas fa-times-circle btn-remove"></i></button>;
    }

    return (
      <header className="search-box">
		    <input 
          type="text" 
          placeholder={ 'Search ' + this.props.filteredEmojis.length + ' emojis for...' } 
          value={ this.props.keyword } 
          onChange={ (e) => this.handleChangeKeyword(e) } /> 
		    { removeButton }
		  </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    keyword: state.keyword,
    filteredEmojis: state.filteredEmojis
  }
}

export default connect(mapStateToProps)(SearchBox);