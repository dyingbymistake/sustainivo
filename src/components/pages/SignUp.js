import React from 'react';
import '../../App.css';
import './SignUp.css';

export default function SignUp() {
  return (
    <div className='sign-up-container'>
      <h1 className='sign-up-title'>Join Us Today!</h1>
      <p className='sign-up-description'>
        Sign up to receive the latest updates and exclusive content.
      </p>
      <form className='sign-up-form'>
        <input
          type='text'
          placeholder='Your Name'
          className='sign-up-input'
          required
        />
        <input
          type='email'
          placeholder='Your Email'
          className='sign-up-input'
          required
        />
        <button type='submit' className='sign-up-button'>Sign Up</button>
      </form>
    </div>
  );
}
