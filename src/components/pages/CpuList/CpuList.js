//    FUNCTIONAL COMPONENT

import React from 'react'
import { useGlobalContext } from '../../../context/products/ProductContext'
import Title from '../../layout/Title'
import Cpu from '../Cpu/Cpu'
import Loader from '../../loader/Loader'

const CpuList = () => {
  const { loading, products } = useGlobalContext()
  return (
    <div>
      <Title name={'New'} title={'Cpus'} />
      <div className='cpu-list' style={styleList}>
        {loading ? (
          <Loader />
        ) : (
          products.map((cpu) => <Cpu key={cpu.id} cpu={cpu} />)
        )}
      </div>
    </div>
  )
}

const styleList = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 18rem))',
  gridGap: '1rem',
  justifyContent: 'center',
}

export default CpuList

///////////////////////////////////////////////////////////

//    CLASS BASED COMPONENT

// import React from 'react'
// import { ProductConsumer } from '../../../context/products/ProductContext'
// import Title from '../../layout/Title'
// import Cpu from '../Cpu/Cpu'

// const CpuList = () => {
//   return (
//     <div>
//       <Title name={'New'} title={'Cpus'} />
//       <div className='cpu-list' style={styleList}>
//         <ProductConsumer>
//           {(value) => {
//             return value.products.map((cpu) => <Cpu key={cpu.id} cpu={cpu} />)
//           }}
//         </ProductConsumer>
//       </div>
//     </div>
//   )
// }

// const styleList = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 18rem))',
//   gridGap: '1rem',
//   justifyContent: 'center',
// }

// export default CpuList
