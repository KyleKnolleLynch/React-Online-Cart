import React from 'react';
import { ProductConsumer } from '../../../context/products/ProductContext';
import { Link } from 'react-router-dom';

import './CpuDetails.scss';

const CpuDetails = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          id,
          title,
          category,
          manufacturer,
          img,
          price,
          info,
          inCart,
          count,
          total
        } = value.productDetails;

        return (
          <div
            className='card bg-white details-card text-center box-shadow'
            style={{ width: '60vw' }}
          >
            <img src={img} alt='cpu-item' />
            <h1>
              {manufacturer} {title}
            </h1>
            <h2>{category}</h2>
            <p className='lead m'>{info}</p>
            <p>
              Additional Info: Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Nobis cum dolorum ab velit, deleniti reiciendis
              distinctio qui praesentium mollitia fuga voluptatum aspernatur
              quisquam atque quibusdam?
            </p>
            <h3 className='my-2'>Price: ${price}</h3>
            <h4>Items in cart: {count}</h4>
            <h3>
              Cart Total:{' '}
              {inCart ? (
                <span className='text-danger'>${total}</span>
              ) : (
                <span className='text-success'>${total}</span>
              )}{' '}
            </h3>
            <button
              className='btn btn-primary m-1 box-shadow'
              style={{ width: '7rem' }}
            >
              <Link to='./' className='text-white'>
              To Cpus
              </Link>
            </button>
            <button
              className='btn btn-success m-1 box-shadow'
              style={{ width: '7rem' }}
            >
              <Link to='./cart' className='text-white'>
              Add Item
              </Link>
            </button>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default CpuDetails;
