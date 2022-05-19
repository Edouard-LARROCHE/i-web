import React, { useEffect, useState } from 'react';

const HoursDate = () => {
  const [times, setTimes] = useState(new Date());

  let optionsDate = {
    weekday: 'long',
    month: 'short',
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
    <div>
      <div> {`${times.toLocaleDateString('fr-FR', optionsDate)}`} </div>
      <div>{`${times.toLocaleTimeString('fr-FR', optionsTime)}`}</div>
    </div>
  );
};

export default HoursDate;
