import React, { Component } from 'react';
import Emoji from '../Emoji/Emoji';
import { connect } from 'react-redux';
import _ from 'lodash';
import { v4 } from 'uuid';
import { loadMoreEmojis } from '../../store/ActionCreators';
import './Emojis.css';

class Emojis extends Component {
  handleLoadMoreEmojis() {
    this.props.dispatch(loadMoreEmojis())
  }
  
  render() {
    // _.slice(array, [start=0], [end=array.length])
    // `end` will be set to the length of the array if it exceeds the real array's length
    let clonedEmojis = _.slice(this.props.filteredEmojis, 0, this.props.currentMaximumEmojis);

    let emojis = clonedEmojis.map(emoji => {
      return <Emoji emoji={ emoji } key={ v4() } />;
    });

    let loadMoreButton = null;

    if(this.props.filteredEmojis.length > this.props.currentMaximumEmojis) {
      loadMoreButton = (
        <button 
          className="btn btn-load-more" 
          onClick={ () => this.handleLoadMoreEmojis() }>
          <i class="far fa-arrow-alt-circle-down"></i> Load more emojis
        </button>
      );
    }

    return (
      <div>
        <div className="results-list">
          { emojis }
        </div>

        { loadMoreButton }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteredEmojis: state.filteredEmojis,
    currentMaximumEmojis: state.currentMaximumEmojis,
    maximumEmojis: state.maximumEmojis,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Emojis);