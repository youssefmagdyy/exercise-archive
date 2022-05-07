import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <main className='login'>
        <div className='box'>
        <span>Name</span>
            <input type='text'></input>
            <span>Email</span>
            <input type='email'></input>
            <span>Password</span>
            <input type='password'></input>
            <span>Confirm Password</span>
            <input type='password'></input>
            <button type='submit'> Register</button>
        </div>
    </main>
  )
}

export default Register