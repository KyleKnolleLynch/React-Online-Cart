import React from 'react';
import { Link } from 'react-router-dom';
import PaypalButton from '../../PaypalButton';

const CartTotals = ({ value, history }) => {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;

  return (

      <div className='text-right cart-totals'>
        <Link to='/'>
          <button
            className='btn text-danger btn-alt-danger tu'
            style={styles.clearBtn}
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        </Link>
        <p className='lead'>
          Subtotal: <strong>${cartSubtotal}</strong>
        </p>
        <p className='lead'>
          Tax: <strong>${cartTax}</strong>
        </p>
        <h1 className='x-large my-1'>
          Total: <strong>${cartTotal}</strong>
        </h1>
        <PaypalButton total={cartTotal} clearCart={clearCart} history={history} />
      </div>
      
    
  );
};

const styles = {
  clearBtn: {
    border: '2px solid #bb0114',
    borderRadius: '5px',
    marginBottom: '4rem'
  }
};

export default CartTotals;
