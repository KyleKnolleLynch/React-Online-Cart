import React from 'react';
import { ProductConsumer } from '../context/products/ProductContext';
import { Link } from 'react-router-dom';

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
          <div className='list text-center'>
            <h3>Item added to cart</h3>
            <img src={img} alt='cpu-item' style={{maxWidth: '250px'}} className='my-1' />
            <h4>{manufacturer}</h4>
            <h4>{title}</h4>
            <h5 className='my'>${price}</h5>
          </div>
          )
        }
      }}
    </ProductConsumer>
  );
};

export default Modal;
