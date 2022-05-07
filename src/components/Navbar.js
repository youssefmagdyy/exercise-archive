import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  let location = useLocation();
  return (
    <div className={`${location.pathname==='/'?'navbar-home':'navbar'}`}>
      {(location.pathname!=='/')&&<Link to='/'>Homepage</Link>}
    <nav>
    <Link style={{marginRight:'0px'}} to='/login'>
    <span> Login</span>
       {/* icon */}
    </Link>
    <Link to='/saved/1'>
    <span> Saved</span>
       {/* icon */}
    </Link>
    <Link to='/'>
    <span> Logout</span>
       {/* icon */}
    </Link>
</nav>
</div>
  )
}

export default Navbar