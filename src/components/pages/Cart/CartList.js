import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const CartList = ({ value }) => {
  const { cart } = value;
  return (
    <div>
      {cart.map(item => (
        <CartItem key={item.id} item={item} value={value} />
      ))}
    </div>
  );
};

CartList.propTypes = {
  value: PropTypes.object
}

export default CartList;
