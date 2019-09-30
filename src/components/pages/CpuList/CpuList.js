import React, { useState } from 'react';
import { productsData } from '../../../data';
import Title from '../Title';


const CpuList = () => {
  const [products, setProducts] = useState({productsData});
  console.log(productsData);


  return (
    <div>
      <Title name={'New'} title={'Cpus'} />
      <div className='cpu-list'>
       
      </div>
    </div>
  );
};

export default CpuList;
