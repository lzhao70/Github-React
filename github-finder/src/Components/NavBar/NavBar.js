import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ title }) => {
  return (
    <div className='nav bg-dark text-dark'>
      <nav className='nav-bar nav-container'>
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
