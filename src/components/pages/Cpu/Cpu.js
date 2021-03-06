//    FUNCTIONAL COMPONENT

import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../../context/products/ProductContext'
import PropTypes from 'prop-types'

const Cpu = ({
  cpu: {
    id,
    img,
    manufacturer,
    title,
    category,
    info,
    coolingSolution,
    price,
    inCart,
  },
}) => {
  const { handleDetail, addToCart } = useGlobalContext()
  return (
    <div className='card bg-white cpu-item box-shadow'>
      <div
        className='img-div text-center'
        onClick={() => {
          handleDetail(id)
        }}
      >
        <Link to='/CpuDetails' className='transition'>
          <img src={img} alt='cpu-item' />
          <h6 className='hover'>
            <em>(click image for details)</em>
          </h6>
        </Link>
      </div>
      <h3>
        {manufacturer} {title}
      </h3>
      <h5 className='category'>{category}</h5>
      <h4>{info}</h4>
      <h5>{coolingSolution}</h5>
      <h2>${price}</h2>
      <button
        className='btn btn-grey card-btn tu'
        disabled={inCart}
        onClick={() => {
          addToCart(id)
        }}
      >
        {inCart ? (
          <span className='text-success'>In Cart</span>
        ) : (
          <i className='fas fa-cart-arrow-down btn-block' />
        )}
      </button>
    </div>
  )
}

Cpu.propTypes = {
  cpu: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    manufacturer: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    info: PropTypes.string,
    coolingSolution: PropTypes.string,
    inCart: PropTypes.bool,
  }).isRequired,
}

export default Cpu

////////////////////////////////////////////////////////////////

//    CLASS BASED COMPONENT

// import React from 'react'
// import { ProductConsumer } from '../../../context/products/ProductContext'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

// const Cpu = ({
//   cpu: {
//     id,
//     img,
//     manufacturer,
//     title,
//     category,
//     info,
//     coolingSolution,
//     price,
//     inCart,
//   },
// }) => {
//   return (
//     <ProductConsumer>
//       {(value) => (
//         <div className='card bg-white cpu-item box-shadow'>
//           <div
//             className='img-div text-center'
//             onClick={() => {
//               value.handleDetail(id)
//             }}
//           >
//             <Link to='/CpuDetails' className='transition'>
//               <img src={img} alt='cpu-item' />
//               <h6 className='hover'>
//                 <em>(click image for details)</em>
//               </h6>
//             </Link>
//           </div>
//           <h3>
//             {manufacturer} {title}
//           </h3>
//           <h5 className='category'>{category}</h5>
//           <h4>{info}</h4>
//           <h5>{coolingSolution}</h5>
//           <h2>${price}</h2>
//           <button
//             className='btn btn-grey card-btn tu'
//             disabled={inCart}
//             onClick={() => {
//               value.addToCart(id)
//               value.toggleModal(id)
//             }}
//           >
//             {inCart ? (
//               <span className='text-success'>In Cart</span>
//             ) : (
//               <i className='fas fa-cart-arrow-down btn-block' />
//             )}
//           </button>
//         </div>
//       )}
//     </ProductConsumer>
//   )
// };

// Cpu.propTypes = {
//   cpu: PropTypes.shape({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     category: PropTypes.string,
//     manufacturer: PropTypes.string,
//     img: PropTypes.string,
//     price: PropTypes.number,
//     info: PropTypes.string,
//     coolingSolution: PropTypes.string,
//     inCart: PropTypes.bool,
//   }).isRequired,
// }

// export default Cpu
