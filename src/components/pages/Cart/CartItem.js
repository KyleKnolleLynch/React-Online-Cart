import React from 'react';

const CartItem = ({ item, value }) => {
  const { id, img, title, price, count, total } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className='grid-6 my-2 cart-item'>
      <div>
        <img src={img} alt='cpu-item' />
      </div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>${price}</p>
      </div>
      <div style={styles.buttonDiv}>
        <button
          className='btn hover-dark'
          style={styles.buttonStyle}
          onClick={() => decrement(id)}
        >
          <i className='fas fa-minus' />
        </button>
        <button className='btn' style={styles.countStyle}>
          <p>{count}</p>
        </button>
        <button
          className='btn hover-dark'
          style={styles.buttonStyle}
          onClick={() => increment(id)}
        >
          <i className='fas fa-plus' />
        </button>
      </div>
      <div onClick={() => removeItem(id)}>
        <i className='fas fa-trash-alt btn text-danger' />
      </div>
      <div>
        <strong>${total}</strong>
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
