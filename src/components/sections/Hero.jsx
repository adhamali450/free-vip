import React, { useEffect, useState, useRef, Fragment } from "react";
import CountdownTimer from "@components/countdown-timer/CountdownTimer";

import wegz_hero from "@assets/wegz-hero.webp";

const Hero = () => {
  const heroHeaderRef = useRef(null);
  const [renderedQuoteIndex, setRenderedQuoteIndex] = useState(0);
  const heroQuotes = [
    {
      quote: `هنغنيلك و هنرقصلك
      *
      هات جنيه`,
      song: "البار",
    },
    {
      quote: `استنونا نقب في رجولنا
      *
      بيتشعبطوا`,
      song: "اللقطة",
    },
    {
      quote: `هنوصل بالسلامة
      *
      و انتو بالسلامة`,
      song: "بالسلامة",
    },
    {
      quote: `الصحاب غرقانة
      *
      انا فالغريق`,
      song: "21",
    },
    {
      quote: `زميلي عدي اليوم
      *
      عدي...`,
      song: "ATM",
    },
    {
      quote: `مبقي زميلي عن
      *
      راسي`,
      song: "سكرتي",
    },
    {
      quote: `راجل عمري ما جليت
      *
      زميل`,
      song: "ساليني",
    },
    {
      quote: `جيلي عارف
      *
      فين الصح`,
      song: "منحوس",
    },
    {
      quote: `وشك دواسة
      *
      ادوس تكركر`,
      song: "دورك جاي",
    },
  ];

  const duration = 2400;
  useEffect(() => {
    setTimeout(() => {
      heroHeaderRef.current.style.transition = "opacity 150ms linear";
      heroHeaderRef.current.style.opacity = "0.0";
      setTimeout(() => {
        setRenderedQuoteIndex(
          renderedQuoteIndex == heroQuotes.length - 1
            ? 0
            : renderedQuoteIndex + 1
        );
        heroHeaderRef.current.style.opacity = "1.0";
      }, 150);
    }, duration);
  }, [renderedQuoteIndex]);

  return (
    <header
      className="wrapper bg-no-repeat bg-cover bg-center py-14"
      style={{
        backgroundColor: "#000",
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), url(${wegz_hero})`,
      }}
    >
      <div className="container">
        <h1 className="fl-h1 font-extrabold text-white" ref={heroHeaderRef}>
          {heroQuotes[renderedQuoteIndex]["quote"]
            .split("*")
            .map((substr, index) => {
              return (
                <Fragment key={`sub-quote-${index}`}>
                  {substr} {index == 0 && <br />}
                </Fragment>
              );
            })}
          <small className="text-lg font-normal opacity-70">
            <br className="inline-block md-hidden" />
            (ويجز - {heroQuotes[renderedQuoteIndex]["song"]})
          </small>
        </h1>
        <CountdownTimer targetDate={new Date("2022-11-04")} />
      </div>
    </header>
  );
};

export default Hero;
