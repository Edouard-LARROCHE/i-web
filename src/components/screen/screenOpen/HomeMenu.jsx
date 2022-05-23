import React from 'react';

const HomeMenu = () => {
  return (
    <div className='transition'>
      <div className='flex flex-col items-center flex-wrap'>
        <img className='w-20 m-3 cursor-pointer' src='/assets/reglage.png' alt='reglage' />
        <div className='text-white text-xs mt-[-8px]'>Réglages</div>
      </div>
    </div>
  );
};

export default HomeMenu;
