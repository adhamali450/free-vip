import "./App.sass";
import CountdownTimer from "./components/countdown-timer/CountdownTimer";

import wegz_hero from "./assets/wegz-hero.webp";

import th_adham from "./assets/th-adham.png";
import th_saied from "./assets/th-saied.png";
import th_rengo from "./assets/th-rengo.png";

import iconQuestionMark from "./assets/icon-question-mark.svg";

import iconIg from "./assets/icon-ig.svg";

function Contact() {
  const links = [
    {
      name: "أدهم علي ",
      ig: "",
    },
    {
      name: "سعيد عبدالناصر",
      ig: "",
    },
    {
      name: "عبدالرحمن رينجو",
      ig: "",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8">
      {links.map((link, index) => {
        return (
          <a
            className="underline"
            key={`contact-${index}`}
            href={link.ig}
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              <img className="w-8" src={iconIg} />
              <p className="font-medium">{link.name}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

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
      rendered_name: "سٍعدة",
      image: th_saied,
    },
  ];

  const about = [
    {
      question: "إحنا مين",
      answer:
        "احنا 3 شباب مالقاهرة (المطرية, الزيتون و عين شمس) متابعين ويجز من 2017 (TNT فانز). حاولنا نروح وراه كذا مرة في كذا حفلة لكن الحظ كان ضدنا في كل مرة. حلم حياتنا نسمع أغنية (21) لايف",
    },
    {
      question: "طالبين إيه",
      answer:
        "حابين نحضر الحفلة الجاية و لكن ظروفنا لا تؤهلنا لدفع تمن الحفلة. عايزين نوصل لويجز.  مش فاضل عالحفلة كتير. احنا بنناشد اي حد مسئول عن ادارة او تنظيم إيفنت The Wegz Experience ب 3 تذاكر من أقل فئة. ",
    },
    {
      question: "تقدر تساعدنا إزاي",
      answer:
        "تقدر تساعدنا إننا نوصل لويجز بإنك تبعتله الصفحة دي و إنك تعملها شير في اكتر من مكان",
    },

    {
      question: "توصلنا إزاي",
      answer: <Contact />,
    },
  ];

  return (
    <div className="App">
      {/* hero */}
      <header
        className="wrapper bg-no-repeat bg-cover bg-center py-14"
        style={{
          backgroundColor: "#000",
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), url(${wegz_hero})`,
        }}
      >
        <div className="container">
          <h1 className="fl-h1 font-extrabold text-white">
            هنغنيلك و هنرقصلك
            <br />
            هات جنية
            <small className="text-lg font-normal mr-4 opacity-70">
              (ويجز - البار)
            </small>
          </h1>
          <CountdownTimer targetDate={new Date("2022-11-04")} />
        </div>
      </header>

      <main>
        {/* Images */}
        <section className="container flex justify-between items-center gap-5 py-9">
          <h2 className="fl-h2">
            ساعدنا نشوف
            <br />
            ويجز
          </h2>
          <div className="flex items-center gap-5">
            {threeHorsemen.map((horseman) => {
              return (
                <div className="relative" key={horseman.name}>
                  <img
                    className="max-h-[300px]"
                    src={horseman.image}
                    alt={horseman.name}
                  />
                  <span className="fl-b absolute -translate-x-1/2 -translate-y-1/2 top-full left-[95%] bg-main-yellow text-black font-bold text-lg">
                    {horseman.rendered_name}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Who we be */}
        <article className="container flex flex-col gap-6">
          {about.map((item, index) => {
            return (
              <article key={`question-${index}`}>
                <div className="flex items-center gap-2">
                  <p className="fl-b mb-2 font-bold text-dark-yellow">
                    {item.question}
                  </p>
                  <img
                    className="w-6 h-6"
                    src={iconQuestionMark}
                    alt="question mark"
                  />
                </div>
                <p className="max-w-[65ch] fl-b">{item.answer}</p>
              </article>
            );
          })}
        </article>
      </main>
    </div>
  );
}

export default App;
