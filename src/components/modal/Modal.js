import React from 'react';
import { ProductConsumer } from '../../context/products/ProductContext';
import { Link } from 'react-router-dom';

import './Modal.scss';

const Modal = () => {
  return (
    <ProductConsumer>
      {value => {
        const { modalOpen, closeModal } = value;
        const { img, manufacturer, title, price } = value.modalProduct;

        if (modalOpen === false) {
          return null;
        } else {
          return (
            <div className='modal-container all-center'>
              <div className='modal-card card bg-white list text-center'>
                <h3 className='text-success'>Item Added to Cart</h3>
                <img src={img} alt='cpu-item' className='my-1' />
                <h4>{manufacturer}</h4>
                <h4>{title}</h4>
                <h5 className='my-2'>
                  Item Price: <span>${price}</span>
                </h5>
                <div>
                  <Link
                    to='./cart'
                    onClick={closeModal}
                    className='btn-block text-warning my'
                  >
                    Go to Cart
                  </Link>
                  <Link
                    to='./'
                    onClick={closeModal}
                    className='btn-block text-primary my'
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default Modal;
