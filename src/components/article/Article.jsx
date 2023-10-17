import React from 'react';
import './article.css';

const Article = ({ imageUrl}) => {
  return (
    <div className='gpt5__blog-container_article'>
      <div className='gpt5__blog-container_article-image'>
        <img src={imageUrl} alt="blog image" />
      </div>
    </div>
  )
}

export default Article