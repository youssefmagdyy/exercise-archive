import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className='login'>
        <div className='box'>
            <span>Email</span>
            <input type='text'></input>
            <span>Password</span>
            <input type='text'></input>
            <button type='submit'> Login</button>
         
        </div>
        <div className='signup-text'>
            <span>Don't have an account ? </span>
            <Link to='/register'>
                Register
            </Link>
        </div>
    </main>
  )
}

export default Login