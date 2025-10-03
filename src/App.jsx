import Navbar from "./components/Navbar";
import React from "react";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <TechStack />
         <Experience />
           <Projects />
             <Contact />
     
    </div>
  );
}

export default App;
