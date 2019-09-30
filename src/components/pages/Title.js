import React from 'react';

const Title = ({name, title}) => {
  return (
    <div className='text-center large'>
      <h1>{name} <span className='text-primary'>{title}</span></h1>
    </div>
  );
};

export default Title;
