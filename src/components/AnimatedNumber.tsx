import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

const AnimatedNumber = ({ countTo, decimal }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    if (numberRef.current) {
      const options = decimal ? { decimalPlaces: 1 } : {};
      const countUp = new CountUp(numberRef.current, countTo, options);

      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
        numberRef.current.innerHTML = countTo;
      }
    }
  }, [countTo, decimal]);

  return <span ref={numberRef}></span>;
};
export { AnimatedNumber };
