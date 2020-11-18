import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

const CartList = ({ cart }) => {
  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  )
}

CartList.propTypes = {
  value: PropTypes.object,
}

export default CartList
