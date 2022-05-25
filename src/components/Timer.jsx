import React, { useEffect, useState } from "react";

const Timer = ({ starttime, endtime }) => {
  const [timer, setTimer] = useState(starttime);

  useEffect(() => {
    const id = setInterval(() => {
      if (timer >= endtime) {
        clearInterval(id);
      } else {
        setTimer((prev) => prev + 1);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [endtime, timer]);

  return (
    <div>
      <h1>{timer}</h1>
    </div>
  );
};

export default Timer;
