//    FUNCTIONAL COMPONENT

import React from 'react'
import { useGlobalContext } from '../../context/products/ProductContext'
import { Link } from 'react-router-dom'

const Modal = () => {
  const {
    modalOpen,
    toggleModal,
    modalProduct: { img, manufacturer, title, price },
  } = useGlobalContext()

  return (
    <>
      {!modalOpen ? null : (
        <div className='modal-container all-center'>
          <div className='modal-card card bg-white list text-center'>
            <h3 className='text-success'>Item Added to Cart</h3>
            <img src={img} alt='cpu-item' className='my-1' />
            <h4>{manufacturer}</h4>
            <h4>{title}</h4>
            <h5 className='my-2'>
              Item Price: <span>${price}</span>
            </h5>
            <div>
              <Link
                to='./cart'
                onClick={() => toggleModal()}
                className='btn-block text-warning my'
              >
                Go to Cart
              </Link>
              <Link
                to='./'
                onClick={() => toggleModal()}
                className='btn-block text-primary my'
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal

/////////////////////////////////////////////////////////////

//    CLASS BASED COMPONENT

// import React from 'react';
// import { ProductConsumer } from '../../context/products/ProductContext';
// import { Link } from 'react-router-dom';

// const Modal = () => {
//   return (
//     <ProductConsumer>
//       {value => {
//         const { modalOpen, toggleModal } = value;
//         const { id, img, manufacturer, title, price } = value.modalProduct;

//         if (modalOpen === false) {
//           return null;
//         } else {
//           return (
//             <div className='modal-container all-center'>
//               <div className='modal-card card bg-white list text-center'>
//                 <h3 className='text-success'>Item Added to Cart</h3>
//                 <img src={img} alt='cpu-item' className='my-1' />
//                 <h4>{manufacturer}</h4>
//                 <h4>{title}</h4>
//                 <h5 className='my-2'>
//                   Item Price: <span>${price}</span>
//                 </h5>
//                 <div>
//                   <Link
//                     to='./cart'
//                     onClick={() => toggleModal(id)}
//                     className='btn-block text-warning my'
//                   >
//                     Go to Cart
//                   </Link>
//                   <Link
//                     to='./'
//                     onClick={() => toggleModal(id)}
//                     className='btn-block text-primary my'
//                   >
//                     Continue Shopping
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           );
//         }
//       }}
//     </ProductConsumer>
//   );
// };

// export default Modal;
