import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ title }) => {
  return (
    <div className='nav'>
      <nav className='nav-bar container'>
        <h1 className='nav-title'>{title}</h1>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: 'Example',
};

export default NavBar;
