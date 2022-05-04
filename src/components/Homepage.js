import React from 'react'
import {Link} from 'react-router-dom';

const Homepage = () => {
  return (
    <main className='home'>
    <img src='athletic-man.png' alt='athletic man'/>
        <Link to="/all">
            Enter Archive
        </Link>
    </main>
   
  )
}

export default Homepage