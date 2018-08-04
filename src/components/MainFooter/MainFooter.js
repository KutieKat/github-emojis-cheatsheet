import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { NOTIFY_ME_URL } from '../../configs/configs';
import './MainFooter.css';

class MainFooter extends Component {
  scrollToTop() {
    Scroll.animateScroll.scrollToTop();
  }

  render() {
    return (
		  <footer className="main-footer">
		  	<span><i className="fas fa-arrow-right"></i> See something missing? <a className="btn" href={ NOTIFY_ME_URL } target="_blank">Notify me</a></span>
        <span className="back-to-top" onClick={ this.scrollToTop }>Back to top <i className="fas fa-chevron-circle-up"></i></span>
		  </footer>
    );
  }
}

export default MainFooter;