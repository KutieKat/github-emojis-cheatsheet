import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Scroll from 'react-scroll';
import { selectCategory, filterEmojisByCategory, filterEmojis } from '../../store/ActionCreators';
import './Category.css';

class Category extends Component {
  handleSelectCategory() {
    this.props.dispatch(selectCategory(this.props.category));
    this.props.dispatch(filterEmojis());
    Scroll.animateScroll.scrollToTop();
  }

  render() {
    return (
      <li 
        className={ this.props.isSelected ? 'category selected' : 'category' } 
        onClick={ () => this.handleSelectCategory() }>
        { this.props.category }
      </li>
    );
  }
}

Category.propTypes = {
  category: PropTypes.string,
  isSelected: PropTypes.bool
}

function mapStateToProps(state) {
  return {
    selectedCategories: state.selectedCategories,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Category);