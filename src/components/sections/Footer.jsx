import React, { Fragment } from "react";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";

// import Marquee from "react-fast-marquee";

import collection from "@assets/cover-collection.webp";
import iconIg from "@assets/icon-ig.svg";

const Contact = () => {
  const links = [
    {
      name: "أدهم علي ",
      ig: "https://www.instagram.com/madeby.adhamali/",
      username: "@madeby.adhamali",
    },
    {
      name: "سعيد عبدالناصر",
      ig: "https://www.instagram.com/said_nasser77/",
      username: "@said_nasser77",
    },
    {
      name: "عبدالرحمن رينجو",
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
              className="group hover:underline hover:bg-dark-yellow text-white"
              key={`contact-${index}`}
              href={link.ig}
              title={link.username}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2">
                <img
                  className="w-8 group-hover:brightness-0 group-hover:invert"
                  src={iconIg}
                />
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
    "نجم و مقطع",
    "ورديان متكبر",
    "ورديان عالساقطة",
    "الفنان عاللقطة",
    "هنشك و هنبك",
    "ناس كتير عليا باصة",
    "العبها صح انا اخو ميسي",
    "ما تظبطله العداد",
    "الحلال بالقطرة",
    "وجوزة الحكيم",
    "جيلي اتغرب",
    "ورديان العاصمة",
    "المادة سامة",
    "عيني عطشانة",
    "زي النني",
    "راسي سم",
    "اسمي ذايع",
    "مسلكتش فالتعليم",
    "إيدي حرك",
    "راسي مدينة",
    "الحرام فإكياس",
    "امتي يا فرنسا",
    "صحابي رجالة",
    "انا فالغريق",
  ];

  return (
    <div className={`${className} flex flex-col gap-6 opacity-75`}>
      <Marquee velocity={20} direction="rtl">
        {quotes.slice(0, quotes.length / 2).map((quote, index) => {
          return (
            <p className="mx-6" key={`quote-${index}`}>
              {quote}
            </p>
          );
        })}
      </Marquee>
      <Marquee velocity={20} direction="ltr">
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
      className="wrapper bg-no-repeat bg-cover mt-9 py-16"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%), url(${collection})`,
      }}
    >
      <div className="container">
        <Contact />
      </div>
      <div className="fl-h2 text-main-yellow font-extrabold">
        <LyricsMarquee className="mt-10" />
      </div>
    </footer>
  );
};

export default Footer;
