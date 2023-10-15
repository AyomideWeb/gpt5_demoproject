import React from 'react';

import { Footer, Blog, Possibility, WhatGPT5, Header, Features } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT5 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App