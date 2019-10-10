import React, { Fragment } from 'react'

const EmptyCart = () => {
  return (
    <Fragment>
      <h1 className='text-large'>Your Cart is Currently <span className='text-primary'>Empty</span></h1>
    </Fragment>
  )
}

export default EmptyCart
