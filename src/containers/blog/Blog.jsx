import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt5__blog section__padding' id='blog'>
      <div className='gpt5__blog-heading'>
        <h1 className='gradient__text'>A lot is happening,
          We are blogging about it.</h1>
      </div>
      <div className='gpt5__blog-container'>
        <div className='gpt5__blog-container_groupA'>
          <Article />
        </div>
        <div className='gpt5__blog-container_groupB'>
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  )
}

export default Blog