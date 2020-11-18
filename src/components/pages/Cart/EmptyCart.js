import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='all-center'>
      <h1 className='text-large'>Cart is Currently Empty</h1>
      <Link
        to='/'
        className='badge text-primary my-2 hover transition'
        style={{ border: '2px solid' }}
      >
        <strong>Shop CPUs</strong>
      </Link>
    </div>
  )
}

export default EmptyCart
