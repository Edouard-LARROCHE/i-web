import React, { useState } from 'react';

const TextToOpen = () => {
  const [delay, setDelay] = useState(false);

  setTimeout(() => {
    setDelay(true);
  }, 1500);

  return (
    <>
      {delay && (
        <div className='tracking'>
          <div className='text-white text-sm flex justify-center relative top-96 text-center '>Cliquer deux fois sur le boutton principal</div>
          <div className='text-white text-sm flex justify-center relative top-96 text-center'>pour ouvrir</div>
        </div>
      )}
    </>
  );
};

export default TextToOpen;
