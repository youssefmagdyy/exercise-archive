import React from 'react'
import {Link} from 'react-router-dom';

const Homepage = () => {
  return (
    <main className='home'>
    <img src='man.png' alt='athletic man'/>
        <Link className='un' to="/all">
            Enter Archive
        </Link>
    </main>
   
  )
}

export default Homepage