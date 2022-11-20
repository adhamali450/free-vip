import React, { useEffect, useState, useRef, Fragment } from "react";
import CountdownTimer from "@components/countdown-timer/CountdownTimer";

import hero from "@assets/abyusif-hero.webp";

const Hero = ({ deadline }) => {
  const heroHeaderRef = useRef(null);
  const [renderedQuoteIndex, setRenderedQuoteIndex] = useState(0);
  const heroQuotes = [
    {
      quote: `بتعارك فالزمالك
      *
      ماسك مسدس ماية`,
      song: "يح",
    },
    {
      quote: `ملك الكتابة
      *
      و بختار الأتنين`,
      song: "جمل",
    },
    {
      quote: `الماسك مش مبين
      *
      أد ايه الغرض سئ`,
      song: "أسياد الشوط",
    },
    {
      quote: `أسياد الشوط 
      *
      اكتب و قيد`,
      song: "أسياد الشوط",
    },
    {
      quote: `ممكن تكون العين عليك
      *
      بس انا الرمش`,
      song: "ميجاترون",
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
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%), url(${hero})`,
      }}
    >
      <div className="container">
        <h1 className="fl-h1 font-extrabold" ref={heroHeaderRef}>
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
            <br className="inline-block md:hidden" />
            (أبيوسف - {heroQuotes[renderedQuoteIndex]["song"]})
          </small>
        </h1>
        <CountdownTimer targetDate={deadline} />
      </div>
    </header>
  );
};

export default Hero;
