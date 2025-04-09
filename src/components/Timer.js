import React, { useState, useEffect } from "react";
import "./Timer.css";

const Countdown = () => {
  const targetDate = new Date("April 10, 2025 15:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval); // Stop the countdown when the target date is reached
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [targetDate]);

  return (
    <div className="countdown">
      <h2>Countdown</h2>
      <p>Time Remaining:</p>
      <div className="time-container">
        <div className="time-item">
          {timeLeft.days}
          <span>Days</span>
        </div>
        <div className="time-item">
          {timeLeft.hours}
          <span>Hours</span>
        </div>
        <div className="time-item">
          {timeLeft.minutes}
          <span>Minutes</span>
        </div>
        <div className="time-item">
          {timeLeft.seconds}
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
