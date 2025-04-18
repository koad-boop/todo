import { useState, useEffect } from "react";

export const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="date-time">
      {dateTime.toLocaleString()}
    </div>
  );
};
