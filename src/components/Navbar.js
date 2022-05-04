import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  let location = useLocation();
  return (
    <div className={`${location.pathname==='/'?'navbar-home':'navbar'}`}>
      {(location.pathname!=='/')&&<Link to='/'>Homepage</Link>}
    <nav>
    <a style={{marginRight:'0px'}} href='https://github.com/youssefmagdyy/exercise-archive/'>
    <span>Github Repo</span>
       {/* icon */}
    </a>
</nav>
</div>
  )
}

export default Navbar