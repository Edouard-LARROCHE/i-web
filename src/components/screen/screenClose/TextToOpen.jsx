import React, { useState } from 'react';

const TextToOpen = () => {
  const [delay, setDelay] = useState(false);

  setTimeout(() => {
    setDelay(true);
  }, 500);

  return (
    <>
      {delay && (
        <div className='tracking flex flex-col items-center '>
          <div className='text-white text-sm '>Cliquer deux fois sur le boutton principal</div>
          <div className='text-white text-sm '>pour ouvrir</div>
        </div>
      )}
    </>
  );
};

export default TextToOpen;
