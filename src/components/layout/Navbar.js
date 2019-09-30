import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar bg-primary'>
      <ul>
        <li>
          <span>
            <i className='fas fa-microchip fa-2x'></i>
          </span>
          <NavLink to='/' className='hover text-white nav-title transition'>
            CPUs
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart' className='hover text-white transition'>
            My Cart{' '}
            <span>
              <i className='fas fa-cart-arrow-down'></i>
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
