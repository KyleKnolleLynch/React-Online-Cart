import React from 'react';
import { ProductConsumer } from '../../../context/products/ProductContext';
import Title from '../../layout/Title';
import Cpu from '../Cpu/Cpu';

import './CpuList.scss';

const CpuList = () => {
  return (
    <div>
      <Title name={'New'} title={'Cpus'} />
      <div className='cpu-list'>
        <ProductConsumer>
           {value => {
           return value.products.map(cpu => <Cpu key={cpu.id} cpu={cpu} />);
          }}
        </ProductConsumer>
      </div>
    </div>
  );
};

export default CpuList;
