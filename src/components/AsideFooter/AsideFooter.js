import React, { Component } from 'react';
import { COPYRIGHT_YEAR, GITHUB_PAGE } from '../../configs/configs';
import './AsideFooter.css';

class AsideFooter extends Component {
  render() {
    return (
      <footer className="aside-footer">
        <span>Copyright &copy; { COPYRIGHT_YEAR }, <a href={ GITHUB_PAGE } target="_blank">KutieKat</a></span>
      </footer>
    );
  }
}

export default AsideFooter;
