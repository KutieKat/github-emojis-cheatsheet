import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './components/App';
import ReactSmoothScroll from 'react-smooth-scroll';
import './style.css';

const appRoot = document.getElementById('app');

render(<Provider store={ store }><ReactSmoothScroll><App /></ReactSmoothScroll></Provider>, appRoot);