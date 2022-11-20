import React, { Fragment } from "react";
import Marquee, { randomIntFromInterval } from "react-marquee-slider";

import collection from "@assets/cover-collection.webp";

const Contact = () => {
  const links = [
    {
      name: "زياد حسن ",
      ig: "https://www.instagram.com/zeyadzux/",
      username: "@zeyadzux",
    },
    {
      name: "كريم سعفان",
      ig: "https://www.instagram.com/kareems3fan__/",
      username: "@kareems3fan__",
    },
    {
      name: "رينجو",
      ig: "https://www.instagram.com/abdelrahman_132/",
      username: "@abdelrahman_132",
    },
  ];

  return (
    <div className="w-fit bg-translucent-black border p-4 rounded-lg">
      <article>
        <p className="question-header">توصلنا إزاي</p>
      </article>
      <div className="flex flex-wrap gap-x-8 gap-y-3">
        {links.map((link, index) => {
          return (
            <a
              className="group hover:underline hover:bg-primary-dark text-white"
              key={`contact-${index}`}
              href={link.ig}
              title={link.username}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-8 group-hover:brightness-0 group-hover:invert"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_6_89)">
                    <path
                      className="fill-primary"
                      d="M11.25 5C7.81292 5 5 7.81292 5 11.25V28.75C5 32.1871 7.81292 35 11.25 35H28.75C32.1871 35 35 32.1871 35 28.75V11.25C35 7.81292 32.1871 5 28.75 5H11.25ZM11.25 7.5H28.75C30.8362 7.5 32.5 9.16375 32.5 11.25V15H25.4997C24.1255 13.4888 22.1927 12.5 20 12.5C17.8073 12.5 15.8745 13.4888 14.5003 15H7.5V11.25C7.5 9.16375 9.16375 7.5 11.25 7.5ZM26.25 10C25.7992 9.99363 25.3799 10.2305 25.1526 10.6198C24.9254 11.0092 24.9254 11.4908 25.1526 11.8802C25.3799 12.2695 25.7992 12.5064 26.25 12.5H28.75C29.2008 12.5064 29.6201 12.2695 29.8474 11.8802C30.0746 11.4908 30.0746 11.0092 29.8474 10.6198C29.6201 10.2305 29.2008 9.99363 28.75 10H26.25ZM20 15C22.7762 15 25 17.2238 25 20C25 22.7762 22.7762 25 20 25C17.2238 25 15 22.7762 15 20C15 17.2238 17.2238 15 20 15ZM7.5 17.5H13.0062C12.7216 18.2901 12.5 19.1146 12.5 20C12.5 24.1273 15.8727 27.5 20 27.5C24.1273 27.5 27.5 24.1273 27.5 20C27.5 19.1146 27.2784 18.2901 26.9938 17.5H32.5V28.75C32.5 30.8362 30.8362 32.5 28.75 32.5H11.25C9.16375 32.5 7.5 30.8362 7.5 28.75V17.5Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_89">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="fl-b font-medium">{link.name}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const LyricsMarquee = ({ className }) => {
  const quotes = [
    "رعد",
    "عمر حرب",
    "هيثم",
    "عزرائيل",
    "هاني",
    "سانتياجو",
    "شعري مبيتلمش",
    "هاع هاع",
    "الأورج متصبن",
    "رجعت على الميكسر",
    "بينوكيو",
    "تخنت جامد",
    "امير الظلام",
    "عملتها اجمد",
    "أضربه بالكيتل",
    "طب و مالو؟",
    "بتسمع في التوكتوك",
    "بتسمع في ال BMW",
    "مازن محمد المؤذي",
    "مساء الخير الصبح",
    "ابيوسف المبجل",
    "ده مش راب",
  ];

  const relativeVelocity = (-15 / 1129) * (390 - window.innerWidth) + 5;

  return (
    <div className={`${className} flex flex-col gap-6`}>
      <Marquee velocity={relativeVelocity} direction="rtl">
        {quotes.slice(0, quotes.length / 2).map((quote, index) => {
          return (
            <p className="mx-6" key={`quote-${index}`}>
              {quote}
            </p>
          );
        })}
      </Marquee>
      <Marquee velocity={relativeVelocity} direction="ltr">
        {quotes.slice(quotes.length / 2).map((quote, index) => {
          return (
            <p className="mx-6" key={`quote-${index}`}>
              {quote}
            </p>
          );
        })}
      </Marquee>
    </div>
  );
};

const Footer = () => {
  return (
    <footer
      className="wrapper bg-no-repeat bg-cover mt-9 pt-16 pb-11"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%), url(${collection})`,
      }}
    >
      <div className="container">
        <Contact />
      </div>
      <div className="fl-h2 text-primary-light font-extrabold">
        <LyricsMarquee className="mt-12" />
      </div>
    </footer>
  );
};

export default Footer;
