import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NotFound = ({ location }) => {
  return (
    <div className='text-center'>
      <div className='large text-danger'>
        <h1>Error: 404!</h1>
      </div>
      <h2>The page you searched for: "{location.pathname}" does not exist.</h2>
      <h3>
        Return to{' '}
        <Link to='/' className='text-success'>
          Home
        </Link>{' '}
        <i className='fas fa-arrow-left'></i>
      </h3>
    </div>
  );
};

NotFound.propTypes = {
  location: PropTypes.object
};

export default NotFound;
