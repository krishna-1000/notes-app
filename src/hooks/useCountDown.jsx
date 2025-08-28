import { useContext } from "react";
import { TimerContext } from "../contextApi/TimerContextApi";

const useCountDown = () => {
  const context = useContext(TimerContext)
  return context;
};

export default useCountDown;
