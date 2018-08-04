import React, { Component } from 'react';
import Tag from '../Tag/Tag';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import './Tags.css';

class Tags extends Component {
  render() {
    let list = this.props.selectedCategories.map((category) => {
      return <Tag tag={ category } key={ v4() }/>;
    });

    return (
      <div className="tags-list">
		    <ul>
          { list }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCategories: state.selectedCategories,
    dispatch: state.dispach
  }
}

export default connect(mapStateToProps)(Tags);