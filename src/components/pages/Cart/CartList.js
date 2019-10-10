import React from 'react';
import CartItem from './CartItem';

const CartList = ({ value }) => {
  const { cart } = value;
  console.log(cart);
  return (
    <div>
      {cart.map(item => (
        <CartItem key={item.id} item={item} value={value} />
      ))}
    </div>
  );
};

export default CartList;
