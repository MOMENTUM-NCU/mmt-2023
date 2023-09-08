import { useState, useEffect } from "react";

export default function Countdown({ till }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const launchDate = till; // MM/DD/YY

  const updateTime = () => {
    const time = Date.parse(launchDate) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const intervalId = setInterval(() => updateTime(), 1000);
    return () => clearInterval(intervalId);
  });

  const timeNames = ["days", "hours", "minutes", "seconds"];
  return (
    <div className="min-w-full grid grid-cols-4 place-items-center px-2">
      {[days, hours, minutes, seconds].map((time, idx) => (
        <div className="time-card" key={idx}>
          <div className="time-card-text-wrapper">
            <p className="text-4xl sm:text-8xl 2xl:text-9xl sm:mb-5 mb-1">
              {time <= 0 ? "00" : time.toString().padStart(2, "0")}
            </p>
            <span className="uppercase text-[11px] sm:text-sm xl:text-xl">
              {timeNames[idx]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
