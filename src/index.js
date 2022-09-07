import React from 'react';
import ReactDOM from 'react-dom/client';

import HomePage from './page/home';
import Header from './components/header/header';

import './styles/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <HomePage />
  </>,
);
