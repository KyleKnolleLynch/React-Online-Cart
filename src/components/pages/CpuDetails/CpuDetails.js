import React, { Fragment } from 'react';
import { ProductConsumer } from '../../../context/products/ProductContext';
import { Link } from 'react-router-dom';
import Title from '../../layout/Title';

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
          total,
          additionalInfo
        } = value.productDetails;
        const { addToCart, toggleModal } = value;

        return (
          <Fragment>
            <Title name={manufacturer} title={title} />
            <div className='grid-2 details-card'>
              <div>
                <img src={img} alt='cpu-item' />
              </div>
              <div>
                <p className='lead'>{info}</p>
                <h4>{category}</h4>
                <p className='m'>{additionalInfo}</p>
                <h3 className='my-2'>
                  Price: <span>${price}</span>
                </h3>
                <h4>Items in cart: {count}</h4>
                <h3>
                  Cart Total:{' '}
                  {inCart ? (
                    <span className='text-success'>${total}</span>
                  ) : (
                    <span className='text-warning'>${total}</span>
                  )}
                </h3>
                <button
                  className={
                    inCart
                      ? 'btn btn-success m-1 box-shadow tu'
                      : 'btn btn-warning m-1 box-shadow tu'
                  }
                  disabled={inCart ? true : false}
                  onClick={() => {
                    addToCart(id);
                    toggleModal(id);
                  }}
                >
                  {inCart ? 'In Cart' : 'Add Item'}
                </button>
                <button className='btn btn-primary m-1 box-shadow tu'>
                  <Link to='./' className='text-white'>
                    To Cpus
                  </Link>
                </button>
              </div>
            </div>
          </Fragment>
        );
      }}
    </ProductConsumer>
  );
};

export default CpuDetails;
