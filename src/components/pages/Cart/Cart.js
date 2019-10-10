import React, { Fragment } from 'react';
import Title from '../../layout/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import { ProductConsumer } from '../../../context/products/ProductContext';

const Cart = () => {
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

export default Cart;
