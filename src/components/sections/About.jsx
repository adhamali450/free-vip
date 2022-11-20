import React, { useRef } from "react";
import copy from "copy-to-clipboard";

import th_zux from "@assets/th-zux.webp";
import th_sefo from "@assets/th-se'fo.webp";
import th_rengo from "@assets/th-rengo.webp";

import iconCheckmark from "@assets/icon-checkmark.svg";
import imgExen from "@assets/exen.png";

const About = () => {
  const threeHorsemen = [
    {
      name: "Zeyad",
      rendered_name: "زياد زُكس",
      details: "منشية ناصر",
      image: th_zux,
    },
    {
      name: "Sa'fan",
      rendered_name: "سعفان",
      details: "الجيزة",
      image: th_sefo,
    },
    {
      name: "Rengo",
      rendered_name: "رينجو",
      details: "المطروية",
      image: th_rengo,
    },
  ];

  const questions = {
    who: `احنا 3 شباب (منشية ناصر، الجيزة و المطرية) متابعين ابيو من (فانز واحد واحد). حاولنا نروح وراه كذا مرة في كذا حفلة لكن الفقر المضجع و شيل المواد كانوا ضدنا كل مرة. حلم حياتنا نسمع الميدلي لايف`,
    require: `حابين نحضر الحفلة الجاية و لكن ظروفنا لا تؤهلنا لدفع تمن تيكت (رينجو بيغسل كلى). عايزين نوصل لأبيو.  مش فاضل عالحفلة كتير. احنا بنناشد اي حد مسئول عن ادارة او تنظيم حفلة درب ب 3 تذاكر. `,
    help: `
        تقدر تساعدنا إننا نوصل لأبيو بإنك تبعتله الصفحة دي و إنك تعملها 
        share
        في اكتر من مكان. الموقع مش هزار ده صرخة مساعدة
    `,
  };

  const checkmarkRef = useRef(null);
  const copyHandler = () => {
    copy("https://three-horsemen-of-21.vercel.app/", {
      debug: true,
      message: "Press #{key} to copy",
    });
    checkmarkRef.current.classList.add("checkmark");
    setTimeout(() => {
      checkmarkRef.current.classList.remove("checkmark");
    }, 2000);
  };

  return (
    <main className="relative">
      {/* Images */}
      <section className="our-images container gap-5 py-9">
        <h2 className="fl-h2 grow basis-full md:basis-auto">
          ساعدنا نشوف
          <br className="hidden md:inline-block" /> أبيوسف
        </h2>
        {threeHorsemen.map((horseman) => {
          return (
            <div
              className="relative max-h-[300px] aspect-square shifted-border z-0"
              key={horseman.name}
            >
              <img
                className="relative aspect-square object-cover"
                src={horseman.image}
                alt={horseman.name}
              />
              <span className="fl-b absolute bottom-[2%] right-[2%] bg-primary text-black font-bold text-lg">
                {horseman.rendered_name}
              </span>
            </div>
          );
        })}
      </section>

      {/* Who we be */}
      <article className="container  flex flex-col gap-6">
        <article>
          <p className="question-header">إحنا مين</p>
          <p className="max-w-[65ch] fl-b">{questions["who"]}</p>
        </article>
        <article>
          <p className="question-header">طالبين إيه</p>
          <p className="max-w-[65ch] fl-b">{questions["require"]}</p>
        </article>
        <article>
          <p className="question-header">تقدر تساعدنا إزاي</p>
          <p className="max-w-[65ch] fl-b">{questions["help"]}</p>
          <ol className="mr-4 fl-b">
            <li>
              تحط لينك الموقع في story.{" "}
              <div className="inline-flex items-center gap-2">
                <button
                  className="font-semibold text-primary-dark hover:underline"
                  onClick={copyHandler}
                >
                  دوس عشان تعمله copy
                </button>
                <img
                  className="invisible w-5 h-5"
                  ref={checkmarkRef}
                  src={iconCheckmark}
                  alt="success"
                />
              </div>
            </li>
            <li>
              تعمل mention ل{" "}
              <a
                className="font-semibold text-primary-dark hover:underline"
                href="https://www.instagram.com/abyusif_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                abyusif_@
              </a>
            </li>
          </ol>
        </article>
      </article>

      <img
        className="absolute min-w-[500px] w-[50%] max-w-[750px] bottom-0 left-0 opacity-10"
        src={imgExen}
      />
    </main>
  );
};

export default About;
