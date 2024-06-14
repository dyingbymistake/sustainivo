import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
     
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>sustainvo@gmail.com</Link>
            <Link to='/'>999-555-1234</Link>
            <Link to='/'>888-555-1234</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/'>Instagram</Link>
            <Link to='https://www.facebook.com/'>Facebook</Link>
            <Link to='https://www.youtube.com'>Youtube</Link>
            <Link to='https://x.com/'> X (Twitter)</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              SLH
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>SLH © 2024</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='https://www.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='https://www.youtube.com'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='https://x.com/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link linkedin'
              to='https://www.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
