import React, { useEffect, useState } from 'react';

const HoursDate = () => {
  const [times, setTimes] = useState(new Date());

  useEffect(() => {
    const hour = setInterval(() => setTimes(new Date()), 1000);
    return () => {
      clearInterval(hour);
    };
  }, []);

  return (
    <div>
      <h1> {`${times.toLocaleDateString()} ${times.toLocaleTimeString()}`} </h1>
    </div>
  );
};

export default HoursDate;
