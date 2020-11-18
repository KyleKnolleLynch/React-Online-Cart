//    FUNCTIONAL COMPONENT

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Title from '../../layout/Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'
import { useGlobalContext } from '../../../context/products/ProductContext'

const Cart = ({ history }) => {
  const { cart } = useGlobalContext()
  return (
    <Fragment>
      {cart.length ? (
        <Fragment>
          <Title name='Your' title='Cart' />
          <CartColumns />
          <CartList cart={cart} />
          <CartTotals history={history} />
        </Fragment>
      ) : (
        <Fragment>
          <Title name='Your' title='Cart' />
          <EmptyCart />
        </Fragment>
      )}
    </Fragment>
  )
}

Cart.propTypes = {
  history: PropTypes.object,
}

export default Cart

///////////////////////////////////////////////////////////

//    CLASS BASED COMPONENT

// import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'
// import Title from '../../layout/Title'
// import CartColumns from './CartColumns'
// import EmptyCart from './EmptyCart'
// import CartList from './CartList'
// import CartTotals from './CartTotals'
// import { ProductConsumer } from '../../../context/products/ProductContext'

// const Cart = ({ history }) => {
//   return (
//     <Fragment>
//       <ProductConsumer>
//         {(value) => {
//           const { cart } = value
//           if (cart.length > 0) {
//             return (
//               <Fragment>
//                 <Title name='Your' title='Cart' />
//                 <CartColumns />
//                 <CartList value={value} />
//                 <CartTotals value={value} history={history} />
//               </Fragment>
//             )
//           } else {
//             return (
//               <Fragment>
//                 <Title name='Your' title='Cart' />
//                 <EmptyCart />
//               </Fragment>
//             )
//           }
//         }}
//       </ProductConsumer>
//     </Fragment>
//   )
// }

// Cart.propTypes = {
//   history: PropTypes.object,
// }

// export default Cart
