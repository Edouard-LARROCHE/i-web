import React, { useState, useEffect } from 'react';

let interval = undefined;

const Battery = () => {
  const [run, setRun] = useState(false);
  const [progress, setProgress] = useState(100);
  const [num, setNum] = useState(100);

  useEffect(() => {
    if (run) {
      interval = setInterval(() => {
        setProgress((prev) => prev - 1);
        setNum((prev) => prev - 1);
      }, 20000);
    } else {
      clearInterval(interval);
    }
  }, [run]);

  useEffect(() => {
    if (progress === 100) {
      setRun(true);
      setProgress(100);
      setNum(100);
      clearInterval(interval);
    } else if (progress === 0) {
      setRun(false);
      setProgress(0);
      setRun(0);
      clearInterval(interval);
    }
  }, [progress]);

  return (
    <div className='flex justify-between mx-2'>
      <div className=''>I-web</div>
      <div className='flex fle-col items-center'>
        {`${num}%`}
        <div className='border rounded-full w-9 h-3.5 ml-1 overflow-hidden '>
          {progress && num >= 20 ? (
            <div className='h-full bg-white' style={{ width: `${progress}%` }} />
          ) : (
            <div className='h-full bg-red' style={{ width: `${progress}%` }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Battery;
