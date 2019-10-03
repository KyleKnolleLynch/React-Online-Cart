import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../../context/products/ProductContext';

import './Cpu.scss';

const Cpu = ({
  cpu: {
    id,
    img,
    manufacturer,
    title,
    category,
    info,
    coolingSolution,
    price,
    inCart
  }
}) => {
  return (
    <div className='card bg-white cpu-item box-shadow'>
      <div className='img-div'>
        <Link to='/CpuDetails'>
          <img src={img} alt='cpu-item' />
        </Link>
      </div>
      <h3>
        {manufacturer} {title}
      </h3>
      <h5 className='category'>{category}</h5>
      <h4>{info}</h4>
      <h5>{coolingSolution}</h5>
      <h2 className='my'>${price}</h2>
      <button
        className='btn btn-grey'
        disabled={inCart ? true : false}
        onClick={() => {
          console.log('added to cart');
        }}
      >
        {inCart ? (
          <p className='text-success' disabled>
            In Cart
          </p>
        ) : (
          <i className='fas fa-cart-arrow-down btn-block' />
        )}
      </button>
    </div>
  );
};

export default Cpu;
