import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt5__header section__padding' id='home'>
      <div className='gpt5__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-5 OpenAI</h1>
        <p>However, when seeking help while traveling, it can be unpleasant.
          Not all activities bring blessings. This lively transformation of joy
          affects everything in an enjoyable manner. Over the years, we have been
          asked to place an order for a gathering.</p>
        <div className='gpt5__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt5__header-content__people'>
          <img src={people} alt="People" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt5__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header