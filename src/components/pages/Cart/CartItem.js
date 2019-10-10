import React from 'react';

const CartItem = ({ item, value }) => {
  const { id, img, title, price, count, total } = item;
  const { increment, decrement } = value;
  return (
    <div className='grid-6 my-2 cart-item'>
      <div className='hide-sm'>
        <img src={img} alt='cpu-item' />
      </div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>${price}</p>
      </div>
      <div style={styles.buttonDiv}>
        <button className='btn' style={styles.buttonStyle} onClick={decrement}>
          <i className='fas fa-minus' />
        </button>
        <button className='btn' style={styles.countStyle}>
          <p>{count}</p>
        </button>
        <button className='btn' style={styles.buttonStyle} onClick={increment}>
          <i className='fas fa-plus' />
        </button>
      </div>
      <div>
        <i className='fas fa-trash-alt btn' />
      </div>
      <div>
        <p>{total}</p>
      </div>
    </div>
  );
};

const styles = {
  buttonDiv: {
    display: 'inline-flex',
    justifyItems: 'space-evenly'
  },
  buttonStyle: {
    border: '2px solid #333',
    padding: '0.2rem 0.5rem'
  },
  countStyle: {
    border: '2px solid #333',
    padding: '0.2rem 0.5rem',
    cursor: 'initial'
  }
};

export default CartItem;
