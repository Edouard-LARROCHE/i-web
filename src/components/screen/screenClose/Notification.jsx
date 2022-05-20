import React from 'react';

const Notification = () => {
  return (
    <>
      <div className='flex relative left-5'>
        <div className='text-white text-xl mr-2'>Centre de notifications</div>
        <div className=' rounded-full bg-gray2 p-1 w-5 h-5 translate-y-[-10px] cursor-pointer'>
          <div className='text-white text-xs font-thin translate-y-[-2px] flex justify-center '>X</div>
        </div>
      </div>
      <div className='flex relative left-5 mt-3'>
        <div className='rounded-2xl bg-gray2 w-full h-14 mr-8 opacity-50 cursor-pointer'></div>
      </div>
    </>
  );
};

export default Notification;
