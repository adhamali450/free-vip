import React from "react";
import { useCountdown } from "./hooks/useCountdown";
import DateTimeUnit from "./DateTimeUnit";

const CountdownTimer = ({ className, targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div
      className={`${className} flex content-center items-center mt-10 gap-5`}
    >
      <DateTimeUnit value={days} type={"أيام"} seperate />
      <DateTimeUnit value={hours} type={"ساعات"} seperate />
      <DateTimeUnit value={minutes} type={"دقايق"} />{" "}
    </div>
  );
};

export default CountdownTimer;
