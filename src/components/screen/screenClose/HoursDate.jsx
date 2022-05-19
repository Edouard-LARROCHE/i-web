import React, { useEffect, useState } from 'react';

const HoursDate = () => {
  const [times, setTimes] = useState(new Date());

  let optionsDate = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  let optionsTime = {
    hour: '2-digit',
    minute: '2-digit',
  };

  useEffect(() => {
    const hour = setInterval(() => setTimes(new Date()), 1000);
    return () => {
      clearInterval(hour);
    };
  }, []);

  return (
    <div className='flex flex-col items-center '>
      <div className='text-7xl font-light'>{`${times.toLocaleTimeString('fr-FR', optionsTime)}`}</div>
      <div> {`${times.toLocaleDateString('fr-FR', optionsDate)}`} </div>
    </div>
  );
};

export default HoursDate;
