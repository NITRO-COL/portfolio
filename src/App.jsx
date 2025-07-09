import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import About from './Components/About';
import Contect from './Components/Contect';
import Project from './Components/Project';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <>
      <main>
        <Navbar />

        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Project />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contect />
        </section>
      </main>
    </>
  );
}

export default App;
