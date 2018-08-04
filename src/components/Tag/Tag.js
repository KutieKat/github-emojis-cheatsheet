import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deselectCategory, filterEmojis } from '../../store/ActionCreators';
import './Tag.css';

class Tag extends Component {
  handleRemoveTag() {
    this.props.dispatch(deselectCategory(this.props.tag));
    this.props.dispatch(filterEmojis());
  }
  
  render() {
    return (
      <li className="tag" >
        { this.props.tag } <i className="fas fa-times-circle btn-remove" onClick={ () => this.handleRemoveTag() }></i>
      </li>
    );
  }
}

Tag.PropTypes = {
  tag: PropTypes.string
}

function mapStateToProps(state) {
  return {
    selectedCategories: state.selectedCategories,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Tag);