import React from 'react';
import Battery from '../../Battery';
import HoursDate from './HoursDate';

const ScreenClose = () => {
  return (
    <div>
      <div className='text-white'>
        <Battery />
        <HoursDate />
      </div>
    </div>
  );
};

export default ScreenClose;
