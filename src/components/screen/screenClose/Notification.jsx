import React from 'react';

const Notification = () => {
  return (
    <>
      <div className='flex justify-between '>
        <div className='text-white text-xl mr-2 relative left-5'>Centre de notifications</div>
        <div className=' rounded-full bg-gray2 p-1 w-6 h-6 cursor-pointer relative right-5'>
          <div className='text-white text-xs font-thin  flex justify-center '>X</div>
        </div>
      </div>
      <div className='flex relative left-5 mt-3'>
        <div className='rounded-2xl bg-gray2 w-full h-14 mr-8 cursor-pointer flex flex-wrap justify-between'>
          <div className='ml-3 text-white'>I-web</div>
          <div className='p-2 text-xs font-thin text-white'>À l'instant</div>
          <div className='text-white'>BIENVENUE</div>
        </div>
      </div>
    </>
  );
};

export default Notification;
