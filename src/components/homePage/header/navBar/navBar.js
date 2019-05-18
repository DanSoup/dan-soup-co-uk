import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = (props) => {

  return <nav>
    <Link to="/home">
      <button>Home</button>
    </Link>
    <Link to="/blog">
      <button>Blog</button>
    </Link>
    <Link to="/about-me">
      <button>About Me</button>
    </Link>
    <Link to="/experiments">
      <button>Experiments</button>
    </Link>
  </nav>

}

NavBar.propTypes = {

};

export default NavBar;