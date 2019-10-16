import React from 'react';

const CartColumns = () => {
  return (
    <div className='cart-column-grid grid-6 hide-md'>
      <p className='tu'>product</p>
      <p className='tu'>name of product</p>
      <p className='tu'>price</p>
      <p className='tu'>quantity</p>
      <p className='tu'>remove item</p>
      <p className='tu'>total</p>
    </div>
  );
};

export default CartColumns;
