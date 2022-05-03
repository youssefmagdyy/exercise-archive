import React from 'react'
import {Link} from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
        <nav className='navbar'>
            <a  href='https://github.com/youssefmagdyy/exercise-archive/'>
                Git Repository
            </a>
        </nav>
    <div className='home'>
        <Link to="/body">
            Enter Archive
        </Link>
    </div>
    </div>
  )
}

export default Homepage