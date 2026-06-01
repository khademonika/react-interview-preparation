import React, { useRef, useState } from "react";

const App = () => {
  // const [seconds,setSeconds]= useState(0)
  const timeRef = useRef()
  const handleStart = ()=>{
  timeRef.current = 0

setInterval(() => {
  timeRef.current+=1
console.log(timeRef.current);

}, 1000);

  }
 const handleStop=()=>{
clearInterval(timeRef.current )
 }
 const  handleResume=()=>{

 }
  return (
    <div className="timer-container">
      <h1 className="timer-heading">Stop Timer</h1>

      <div className="timer-display">
        <div className="time-box">
          <span>00</span>
          <p>Hours</p>
        </div>

        <div className="separator">:</div>

        <div className="time-box">
          <span>00</span>
          <p>Minutes</p>
        </div>

        <div className="separator">:</div>

        <div className="time-box">
          <span ref={timeRef}>{timeRef.current}</span>
          <p>Seconds</p>
        </div>
      </div>

      <div className="button-group">
        <button className="btn" onClick={handleStart}>Start</button>
        <button className="btn" onClick={handleStop}>Stop</button>
        <button className="btn" onClick={handleResume}>Resume</button>
      </div>
    </div>
  );
};

export default App;

// need to learn the useref and how to create a stop timer from it 
