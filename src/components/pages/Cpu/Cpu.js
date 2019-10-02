import React from 'react';

import './Cpu.scss';

const Cpu = ({ cpu }) => {
  return (
    <div className='card bg-white cpu-item box-shadow'>
      <img src={cpu.img} alt='cpu-item' />
        <h3>
          {cpu.manufacturer} {cpu.title}
        </h3>
        <h5 className='category'>{cpu.category}</h5>
        <h4>{cpu.info}</h4>
        <h5>{cpu.coolingSolution}</h5>
        <h2 className='my'>${cpu.price}</h2>
    </div>
  );
};

export default Cpu;
