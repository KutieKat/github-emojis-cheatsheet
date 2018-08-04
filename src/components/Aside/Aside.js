import React, { Component } from 'react';
import AsideHeader from '../AsideHeader/AsideHeader';
import Splitter from '../Splitter/Splitter';
import Categories from '../Categories/Categories';
import AsideFooter from '../AsideFooter/AsideFooter';
import './Aside.css';

class Aside extends Component {
  render() {
    return (
      <aside>
        <AsideHeader />
        <Splitter />
        <Categories />
        <AsideFooter />
      </aside>
    );
  }
}

export default Aside;