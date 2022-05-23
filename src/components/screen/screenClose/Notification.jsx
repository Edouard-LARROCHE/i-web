import React, { useState } from 'react';

const Notification = ({ remove, switchItems }) => {
  const [notifNone, setNotifNone] = useState(false);

  return (
    <>
      {notifNone ? (
        <div className='flex justify-center'>
          <div className='text-white text-xs relative top-16'>Aucune ancienne notification</div>
        </div>
      ) : (
        <div className='relative top-16'>
          <div className='flex justify-between '>
            <div className='text-white text-xl mr-2 relative left-5'>Centre de notifications</div>
            {!remove ? (
              <div className=' rounded-full bg-gray2 p-1 w-6 h-6 cursor-pointer relative right-5 ease-in-out duration-200' onClick={switchItems}>
                <div className='text-white text-xs font-thin  flex justify-center'>X</div>
              </div>
            ) : (
              <div className=' rounded-full bg-gray2 p-1 w-14 h-6 cursor-pointer relative right-5 ease-in-out duration-200'>
                <div
                  className='text-white text-xs font-thin  flex justify-center'
                  onClick={() => {
                    setNotifNone(true);
                  }}>
                  Effacer
                </div>
              </div>
            )}
          </div>
          <div className='flex relative left-5 mt-3'>
            <div className='rounded-2xl bg-gray2 w-full h-14 mr-8 cursor-pointer '>
              <div className='flex justify-between'>
                <div className='ml-3 text-white'>I-web</div>
                <div className='p-2 text-xs font-thin text-white'>À l'instant</div>
              </div>
              <div className='text-white text-xs ml-3'>BIENVENUE</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
