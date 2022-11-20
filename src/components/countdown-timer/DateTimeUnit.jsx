import React from "react";
import arNum from "../../common";

const DateTimeUnit = ({ value, type, seperate }) => {
  const placeValues = [];
  if (!Object.is(value, NaN)) {
    const len = value.toString().length;
    if (len === 1) placeValues.push(0);
    for (let i = 0; i < len; i++) placeValues.push(value.toString()[i]);
  } else {
    placeValues.push(-1);
    placeValues.push(-1);
  }

  return (
    <div className="flex flex-col items-center" dir="ltr">
      <div className="flex items-center relative">
        {placeValues.map((val, i) => {
          return (
            <p
              key={i}
              className="font-extrabold text-3xl sm:text-4xl xl:text-5xl mr-1 py-1 sm:py-2 px-2 sm:px-3 border-[2px] rounded-md text-primary"
            >
              {arNum(val)}
            </p>
          );
        })}
      </div>
      <span className="opacity-60 mt-2 text-sm sm:text-base text-white">
        {type}
      </span>
    </div>
  );
};

export default DateTimeUnit;
