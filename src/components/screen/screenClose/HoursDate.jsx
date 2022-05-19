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
      <h1> {`${times.toLocaleDateString('fr-FR', optionsDate)} ${times.toLocaleTimeString('fr-FR', optionsTime)}`} </h1>
    </div>
  );
};

export default HoursDate;
