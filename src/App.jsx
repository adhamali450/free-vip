import React from "react";
import "./App.sass";

import Hero from "@sections/Hero";
import About from "@sections/About";
import Footer from "@sections/Footer";
import Header from "@sections/Header";

function App() {
  const deadline = new Date("2022-11-24T14:00:00.00Z");
  const countdown = deadline - Date.now();
  return (
    <div className="App dark:bg-[#0f0f0f] dark:text-[#CEEAF7]">
      {countdown <= 0 && <Header />}

      <Hero deadline={deadline} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
