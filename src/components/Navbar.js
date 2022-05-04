import React from 'react'
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='nav a'>Homepage</Link>
    <nav className='navbar'>
    <a style={{marginRight:'0px'}} href='https://github.com/youssefmagdyy/exercise-archive/'>
    <span>Contribute</span>
        {/* <FiGithub /> */}
    </a>
    {/* <a href='https://github.com/youssefmagdyy/exercise-archive/'>
    <span>Contribute</span>
        <FiGithub  size={'2rem'}/>
    </a> */}
</nav>
</div>
  )
}

export default Navbar