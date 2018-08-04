import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Emoji.css';

class Emoji extends Component {
  render() {
    return (
      <CopyToClipboard text={ this.props.markup }>
        <span className="results-list-item">
          <img src={ this.props.emoji.image } width="70" />
          <span className="markup">{ this.props.emoji.markup }</span>
        </span>
      </CopyToClipboard>
    );
  }
}

Emoji.PropTypes = {
  emoji: PropTypes.object
}

export default Emoji;