import React, { createContext, useEffect, useState } from 'react'
export const TimerContext = createContext();
const TimerProvider = ({children}) => {
    const [duration,setDuration] = useState(0);

    const timerCountDown = (initialMinutes = 1) => {
      const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
    
      useEffect(() => {
        // reset when initialMinutes changes
        setTimeLeft(initialMinutes * 60);
      }, [initialMinutes]);
    
      useEffect(() => {
        if (timeLeft <= 0) return;
    
        const timer = setInterval(() => {
          setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
    
        return () => clearInterval(timer);
      }, [timeLeft]);
    
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
    
      return { minutes, seconds };
    };


  return (
    <TimerContext.Provider value={{duration,setDuration,timerCountDown}}>
      {children}
    </TimerContext.Provider>
  )
}

export default TimerProvider
