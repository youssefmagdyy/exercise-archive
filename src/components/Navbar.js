import React from 'react'
import { FiGithub } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className='navbar'>
    <a style={{marginRight:'0px'}} href='https://github.com/youssefmagdyy/exercise-archive/'>
    <span>Contribute</span>
        <FiGithub  size={'2rem'}/>
    </a>
    {/* <a href='https://github.com/youssefmagdyy/exercise-archive/'>
    <span>Contribute</span>
        <FiGithub  size={'2rem'}/>
    </a> */}
    
</nav>
  )
}

export default Navbar