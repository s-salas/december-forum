import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(30);
  const [milliseconds, setMilliseconds] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setMilliseconds((prevMilliseconds) => {
        if (prevMilliseconds > 0) {
          return prevMilliseconds - 1;
        } else {
          setSeconds((prevSeconds) => {
            if (prevSeconds > 0) {
              setMilliseconds(99);
              return prevSeconds - 1;
            } else {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
              return 0;
            }
          });
          return 0;
        }
      });
    }, 10); // 10ms interval for 1/100th of a second decrement
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setMilliseconds(0);
    setSeconds(30);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <span style={{ color: "#ffffff", fontSize: "24px" }}>
        {seconds}.{milliseconds < 10 ? `0${milliseconds}` : milliseconds}
      </span>
      <br />
      <div className="d-flex justify-content-between gap-2">
      <button className="btn fw-semibold" style={{ backgroundColor: "#27496d", color: "#ffffff", fontFamily: "Libre Baskerville" }} onClick={handleStart}>Start</button>
      <button className="btn fw-semibold" style={{ backgroundColor: "#27496d", color: "#ffffff", fontFamily: "Libre Baskerville" }} onClick={handleStop}>Stop</button>
      <button className="btn fw-semibold" style={{ backgroundColor: "#27496d", color: "#ffffff", fontFamily: "Libre Baskerville" }} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
