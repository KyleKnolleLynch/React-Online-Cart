import React from 'react';
import { ProductConsumer } from '../../context/products/ProductContext';
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
            <div
              className='modal-container all-center'
              style={styles.modalStyle}
            >
              <div className='modal-card card bg-white list text-center'>
                <h3 className='text-success'>Item added to cart</h3>
                <img
                  src={img}
                  alt='cpu-item'
                  style={styles.imgStyle}
                  className='my-1'
                />
                <h4>{manufacturer}</h4>
                <h4>{title}</h4>
                <h5 className='my-2'>
                  Item Price: <span style={styles.spanStyle}>${price}</span>
                </h5>
                <Link
                  to='./cart'
                  onClick={closeModal}
                  className='btn-block text-warning my'
                  style={styles.linkStyleSuccess}
                >
                  Go to cart
                </Link>
                <Link
                  to='./'
                  onClick={closeModal}
                  className='btn-block text-primary my'
                  style={styles.linkStylePrimary}
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
};

const styles = {
  modalStyle: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  imgStyle: {
    maxWidth: '200px'
  },
  spanStyle: {
    color: '#16616b'
  },
  linkStyleSuccess: {
    border: '2px solid #ff9900',
    borderRadius: '5px'
  },
  linkStylePrimary: {
    border: '2px solid #22909e',
    borderRadius: '5px'
  }
};

export default Modal;
