import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ApiDisplay from "./components/RandomApiThing";
// import RandomThingDisplay from "./components/RandomOtherThing";
// import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-lt-blue-shadow bg-dark-blue body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Footer />
      <ApiDisplay />
      {/* <RandomThingDisplay /> */}
    </main>
  );
}