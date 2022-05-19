import React from 'react';

const Phone = () => {
  return (
    <div>
      <div className='h-screen flex justify-center items-center'>
        <div className='border h-4/5 w-3/12 rounded-3xl p-1'>
          <div className='border h-full w-full rounded-3xl '>
            <div className='flex justify-center items-center h-16'>
              <div className='border rounded-full w-1.5 h-1.5 bg-black ' />
              <div className='border w-16 h-2 rounded-lg bg-gray2 ml-ml' />
            </div>
            <div className='border h-4/5 mx-1'>screen</div>
            <div className='h-16'>button</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
