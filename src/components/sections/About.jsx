import React, { useRef } from "react";
import copy from "copy-to-clipboard";

import th_adham from "@assets/th-adham.webp";
import th_saied from "@assets/th-saied.webp";
import th_rengo from "@assets/th-rengo.webp";

import iconCheckmark from "@assets/icon-checkmark.svg";

const About = () => {
  const threeHorsemen = [
    {
      name: "Rengo",
      rendered_name: "رينجو",
      image: th_rengo,
    },
    {
      name: "Adham",
      rendered_name: "ادهوم",
      image: th_adham,
    },
    {
      name: "Saied",
      rendered_name: "سِعدة",
      image: th_saied,
    },
  ];

  const questions = {
    who: `احنا 3 شباب مالقاهرة (المطرية، الزيتون و عين شمس) متابعين ويجز من 2018 (TNT فانز). حاولنا نروح وراه كذا مرة في كذا حفلة لكن الحظ كان ضدنا في كل مرة. حلم حياتنا نسمع أغنية (21) لايف`,
    require: `حابين نحضر الحفلة الجاية و لكن ظروفنا لا تؤهلنا لدفع تمن الحفلة. عايزين نوصل لويجز.  مش فاضل عالحفلة كتير. احنا بنناشد اي حد مسئول عن ادارة او تنظيم إيفنت The Wegz Experience ب 3 تذاكر من أقل فئة. `,
    help: `
        تقدر تساعدنا إننا نوصل لويجز بإنك تبعتله الصفحة دي و إنك تعملها 
        share
        في اكتر من مكان
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
    <main>
      {/* Images */}
      <section className="our-images container gap-5 py-9">
        <h2 className="fl-h2 grow basis-full md:basis-auto">
          ساعدنا نشوف
          <br className="hidden md:inline-block" /> ويجز
        </h2>
        {threeHorsemen.map((horseman) => {
          return (
            <div
              className="max-h-[300px] aspect-square shifted-border relative"
              key={horseman.name}
            >
              <img
                className="w-full h-full object-cover"
                src={horseman.image}
                alt={horseman.name}
              />
              <span className="fl-b absolute -translate-x-1/2 -translate-y-1/2 top-full left-[95%] bg-main-yellow text-black font-bold text-lg">
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
                  className="font-semibold text-dark-yellow hover:underline"
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
                className="font-semibold text-dark-yellow hover:underline"
                href="https://www.instagram.com/wegzofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                wegzofficial@
              </a>
            </li>
          </ol>
        </article>
      </article>
    </main>
  );
};

export default About;
