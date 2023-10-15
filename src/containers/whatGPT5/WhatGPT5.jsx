import React from 'react';
import './whatGPT5.css';
import { Feature } from '../../components';

const WhatGPT5 = () => {
  return (
    <div className='gpt5__whatgpt5 section__margin' id='wgpt5'>
      <div className='gpt5__whatgpt3-feature'>
        <Feature />
      </div>
      <div className='gpt5__whatgpt5-heading'>
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p>Exlpore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatGPT5