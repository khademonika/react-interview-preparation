import React, { useRef, useState } from "react";

const StopTimer = () => {
  const [second, setSecond] = useState(0)


  const timeRef = useRef(0)


  function startTimer() {
    if (timeRef.current) return
    timeRef.current = setInterval(() => {
      setSecond(second => second + 1)
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timeRef.current)
      timeRef.current = null
  setSecond(0)

  }
  function pauseTimer() {
    clearInterval(timeRef.current)
    timeRef.current = null

  }
    const minute = Math.floor((second % 3600) / 60)
  const hour = Math.floor(second / 3600)
  const seconds = second % 60


  return (
    <div className="timer-container">
      <h1 className="timer-heading">Stop Timer</h1>

      <div className="timer-display">
        <div className="time-box">
          <span>{hour.toString().padStart(2, "0")}</span>
          <p>Hours</p>
        </div>

        <div className="separator">:</div>

        <div className="time-box">
          <span>{minute.toString().padStart(2, "0")}</span>

          <p>Minutes</p>
        </div>

        <div className="separator">:</div>

        <div className="time-box">
          <span>{seconds.toString().padStart(2, "0")}</span>

          <p>Seconds</p>
        </div>
      </div>

      <div className="button-group">
        <button className="btn" onClick={startTimer}>Start</button>
        <button className="btn" onClick={stopTimer}>Stop</button>
        <button className="btn" onClick={pauseTimer}>pause</button>
      </div>
    </div>
  );
};

export default StopTimer;