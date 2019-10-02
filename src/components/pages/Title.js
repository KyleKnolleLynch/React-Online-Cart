import React from 'react';

const Title = ({ name, title }) => {
  return (
    <div className='text-center large' style={{ marginBottom: '3rem' }}>
      <h1 style={{ fontWeight: 'normal' }}>
        {name} <strong className='text-primary'>{title}</strong>
      </h1>
    </div>
  );
};

export default Title;
