import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1 className='text-danger'>Error: 401!</h1>
      <h2>This page does not exist.</h2>
      <h3>Return to <Link to='/' className='text-success'>Home</Link>{' '}<i className='fas fa-arrow-left'></i></h3>
    </div>
  )
}

export default NotFound;
