import React from 'react';

const Phone = () => {
  return (
    <div>
      <div className='h-screen flex justify-center items-center'>
        <div className='border h-4/5 w-3/12 rounded-3xl p-1 bg-black'>
          <div className='border h-full w-full rounded-3xl bg-black2'>
            <div className='flex justify-center items-center h-16 bg-black2'>
              <div className='border rounded-full w-1.5 h-1.5' />
              <div className='border w-16 h-2 rounded-lg bg-gray2 ml-ml' />
            </div>
            <div className='border h-4/5 mx-1 bg-black1'>screen</div>
            <div className='h-16 bg-black2'>button</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
