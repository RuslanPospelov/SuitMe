import React from 'react';
import {  useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function Navbar() {
  const { user } = useSelector(store => store.user)

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">MIB</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {user.hasOwnProperty('id') ? <li><Link to='/logout'>Logout</Link></li> :
            <>
              <li><Link to="/registration">Registration</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
