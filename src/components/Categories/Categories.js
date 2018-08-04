import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { v4 } from 'uuid';
import Category from '../Category/Category';
import './Categories.css';

class Categories extends Component {
  render() {
    let categories = this.props.categories.map((category) => {
      let isSelected = _.includes(this.props.selectedCategories, category);

      return <Category category={ category } isSelected={ isSelected } key={ v4() } />
    });

    return (
      <ul className="categories">
        { categories }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    selectedCategories: state.selectedCategories
  }
}

export default connect(mapStateToProps)(Categories);