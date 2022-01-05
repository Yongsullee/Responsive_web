import React from 'react';
import './App.css';
import {
  Footer,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
  Header,
} from './container';
import { Brand, Cta, NavBar } from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
