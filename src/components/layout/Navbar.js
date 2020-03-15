import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar bg-primary'>
      <ul>
        <li>
          <span>
            <i className='fas fa-microchip fa-2x' />
          </span>
          <NavLink to='/' className='hover text-white nav-title transition'>
            CPUs
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart' className='hover text-white transition'>
            My Cart{' '}
            <span>
              <i className='fas fa-shopping-cart' />
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
