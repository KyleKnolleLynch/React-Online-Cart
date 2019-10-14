import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <div className='large text-danger'>
        <h1>Error: 401!</h1>
      </div>
      <h2>This page does not exist.</h2>
      <h3>
        Return to{' '}
        <Link to='/' className='text-success'>
          Home
        </Link>{' '}
        <i className='fas fa-arrow-left'></i>
      </h3>
    </Fragment>
  );
};

export default NotFound;
