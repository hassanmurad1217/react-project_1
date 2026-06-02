import { useEffect, useState } from "react";

export const TodoDate = () => {
  const [DateTime, setDateTime] = useState("");

  // Methods used:
  // - useEffect(): runs timer setup once when component mounts.
  // - setInterval(): repeats date/time update every 1000ms.
  // - toLocaleDateString() and toLocaleTimeString(): format date/time in readable form.
  // - clearInterval(): cleans timer when component unmounts (prevents memory leak).
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2 className="date-time">{DateTime}</h2>;
};
