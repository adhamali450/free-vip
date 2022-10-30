import React, { useRef } from "react";

import Hero from "@sections/Hero";
import Footer from "@sections/Footer";

import "./App.sass";

import iconCheckmark from "@assets/icon-checkmark.svg";

import th_adham from "@assets/th-adham.webp";
import th_saied from "@assets/th-saied.webp";
import th_rengo from "@assets/th-rengo.webp";

function App() {
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
    navigator.clipboard.writeText("https://three-horsemen-of-21.vercel.app/");
    checkmarkRef.current.classList.add("checkmark");
    console.log(checkmarkRef.current.classList);
  };
  return (
    <div className="App">
      {/* hero */}
      <Hero />

      <main>
        {/* Images */}
        <section className="our-images container gap-5 py-9">
          <h2 className="fl-h2 grow basis-full md:basis-auto">
            ساعدنا نشوف
            <br className="hidden md:inline-block" /> ويجز
          </h2>
          {/* <div className="flex flex-wrap justify-between items-center gap-5"> */}
          {threeHorsemen.map((horseman) => {
            return (
              <div className="shifted-border relative" key={horseman.name}>
                <img
                  className="max-h-[300px] aspect-square object-cover	"
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
                    دوس هنا عشان تعمله copy
                  </button>
                  <img
                    className="hidden"
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

      <Footer />
    </div>
  );
}

export default App;
