import React, { createContext, useEffect, useRef, useState } from 'react'
export const TimerContext = createContext();
const TimerProvider = ({children}) => {
    const [duration,setDuration] = useState(0);
    const [soundCheckbox,setSoundCheckbox] = useState(false);
    const audioRef = useRef(new Audio("/chimeMusic.mp3"));

    const timerCountDown = (initialMinutes = 1) => {
      const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
      
      useEffect(() => {
        setTimeLeft(initialMinutes * 60);
      }, [initialMinutes]);
    
      useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
          setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        if(timeLeft == 1){
           setDuration(0);
        }
        return () => clearInterval(timer);
      }, [timeLeft]);
    
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      return { minutes, seconds };
    };

    useEffect(()=>{
      if(soundCheckbox){
        playMusic();
      }
      else{
        stopMusic();
      }
    },[soundCheckbox])
    const playMusic = () =>{
      audioRef.current.volume = 0.05;
      audioRef.current.play();
    }
    const stopMusic = () =>{
      audioRef.current.pause()
    }
  return (
    <TimerContext.Provider value={{duration,setDuration,timerCountDown,setSoundCheckbox}}>
      {children}
    </TimerContext.Provider>
  )
}

export default TimerProvider
