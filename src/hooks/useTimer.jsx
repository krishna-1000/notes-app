import { useState } from "react";

const useTimer = () =>{
    const [duration , setDuration] = useState(0);
    return {duration , setDuration};
}


export default useTimer;