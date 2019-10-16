import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Title from '../../layout/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../../../context/products/ProductContext';

const Cart = ({ history }) => {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <Fragment>
                <Title name='Your' title='Cart' />
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} history={history} />
              </Fragment>
            );
          } else {
            return (
              <Fragment>
                <Title name='Your' title='Cart' />
                <EmptyCart />
              </Fragment>
            );
          }
        }}
      </ProductConsumer>
    </Fragment>
  );
};

Cart.propTypes = {
  history: PropTypes.object
};

export default Cart;
