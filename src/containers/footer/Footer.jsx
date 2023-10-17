import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='gpt5__footer section__padding'>
      <div className='gpt5__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt5__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt5__footer-links'>
        <div className='gpt5__footer-links_logo'>
          <h1>GPT-5</h1>
          <p>Lagos, Nigeria, All Rights Reserved</p>
        </div>
        <div className='gpt5__footer-links_div'>
          <h4>Links</h4>
          <p>Overview</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt5__footer-links_div'>
          <h4>Company</h4>
          <p>Terms $ Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt5__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>Akinfenwa Gabriel Ayomide</p>
          <p>Lagos, Nigeria</p>
          <p>+2349019215780</p>
          <p>gabrielakinfnewa2019@gmail.com</p>
        </div>
      </div>
      <div className='gpt5__footer-copyright'>
        <p>© 2023 GPT-5. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer