import React, { useEffect, useRef, useState } from 'react'

const DrawingPad = () => {
  const [isDrawing,setIsDrawing] = useState(false);
  const canvasRef = useRef(null);

const startDrawing = (e)=>{
  const ctx = canvasRef.current.getContext("2d")
  ctx.beginPath();
  // ctx.moveTo(e.nativeEvent.clientX, e.nativeEvent.clientY);
  setIsDrawing(true);
}
const draw = (e) =>{
  if(!isDrawing) return;
  const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.nativeEvent.clientX, e.nativeEvent.clientY);
    ctx.strokeStyle = "white"; // ✏️ color
    ctx.lineWidth = 2;       // ✏️ thickness
    ctx.lineCap = "round";
    ctx.stroke();
}
const stopDrawing = (e)=>{
  setIsDrawing(false)
}
const clearDrawing = (e)=>{
  const ctx = canvasRef.current.getContext("2d");
  ctx.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
}
  return (
    <div className='bg-white h-[90vh] w-[100vw] cursor-crosshair'>
      <canvas
      onMouseDown={(e)=>startDrawing(e)}
      onMouseMove={(e)=>draw(e)}
      onMouseUp={(e)=>stopDrawing(e)}
       ref={canvasRef} width={500} height={400} className='bg-black'>  </canvas>
       <button onClick={()=>clearDrawing()} className='bg-green-500 w-14 h-7'>clear</button>
    </div>
  )
}

export default DrawingPad

