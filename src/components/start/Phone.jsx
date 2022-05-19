import React from 'react';

const Phone = () => {
  return (
    <div>
      <div className='h-screen flex justify-center items-center'>
        <div className='border h-hs w-3/12 rounded-3xl p-1 bg-black'>
          <div className='border h-full w-full rounded-3xl bg-black2'>
            <div className='flex justify-center items-center h-16 bg-black2'>
              <div className='border rounded-full w-1.5 h-1.5' />
              <div className='border w-16 h-2 rounded-lg bg-gray2 ml-ml' />
            </div>
            <div className='border h-4/5 mx-1 bg-black' />
            <div className='h-24 bg-black2 flex justify-center items-center'>
              <div className='border rounded-full w-14 h-14 bg-gray2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
