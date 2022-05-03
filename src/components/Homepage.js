import React from 'react'
import {Link} from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';

const Homepage = () => {
  return (
    <div>
        <nav className='navbar'>
            <a className='icon' href='https://github.com/youssefmagdyy/exercise-archive/'>
                <FiGithub size={'2rem'}/>
            </a>
        </nav>
    <div className='home'>
    <img src='man.png' alt='athletic man'/>
        <Link to="/body">
            Enter Archive
        </Link>
       
    </div>
    </div>
  )
}

export default Homepage