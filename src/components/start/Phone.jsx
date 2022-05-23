import React, { useState } from 'react';
import ScreenClose from '../screen/screenClose/Index';
import Notification from '../screen/screenClose/Notification';
import TextToOpen from '../screen/screenClose/TextToOpen';

const Phone = () => {
  const [openScreen, setOpenScreen] = useState(false);
  const [remove, setRemove] = useState(false);

  const switchItems = () => {
    setRemove(true);
  };

  const itemsReverse = () => {
    if (remove) {
      setRemove(false);
    }
  };

  const clickToDisplayScreen = () => {
    setOpenScreen(true);

    // if (!openScreen) {
    //   let mouseOver = document.getElementById('mouse-over');
    //   mouseOver.addEventListener('mouseleave', () => {
    //     console.log('leave');
    //     setTimeout(() => {
    //       setOpenScreen(false);
    //     }, 3000);
    //   });
    // }
  };

  return (
    <div>
      <div className='h-screen flex justify-center items-center '>
        <div className='border h-hs w-3/12 rounded-3xl p-1 bg-black overflow-hidden'>
          <div className='border h-full w-full rounded-3xl bg-black2'>
            <div className='flex justify-center items-center h-16 bg-black2 '>
              <div className='border rounded-full w-1.5 h-1.5' />
              <div className='border w-16 h-2 rounded-lg bg-gray2 ml-ml' />
            </div>
            {!openScreen ? (
              <div className='border h-4/5 mx-1 bg-black cursor-grab' id='mouse-over' />
            ) : (
              <div className='border h-4/5 mx-1 bg-black cursor-grab relative' id='mouse-over' onClick={itemsReverse}>
                <ScreenClose />
                <Notification remove={remove} switchItems={switchItems} />
                <div className='absolute bottom-3 flex justify-center w-full'>
                  <TextToOpen />
                </div>
              </div>
            )}

            <div className='h-24 bg-black2 flex justify-center items-center  '>
              <div className='border rounded-full w-14 h-14 bg-gray2 cursor-pointer' onClick={clickToDisplayScreen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
