import React, { Component } from 'react';
import { LOGO_URL, GITHUB_RIBBON_URL, RESPOSITORY_URL, GITHUB_PAGE } from '../../configs/configs';
import './AsideHeader.css';

class AsideHeader extends Component {
  render() {
    return (
      <header className="aside-header">
        <img src={ LOGO_URL } alt="Logo" width="200" />
        <a href={ RESPOSITORY_URL } target="_blank">
          <img className="github-ribbon" src={ GITHUB_RIBBON_URL } alt="Fork me on GitHub" />
        </a>

        <h1>Github Emojis Cheatsheet</h1>
		    <p>Hey! I'm <a href={ GITHUB_PAGE } target="_blank">@KutieKat</a> and this is the most awesome cheatsheet I've written <img src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f61c.png" width="15" /></p>
      </header>
    );
  }
}

export default AsideHeader;