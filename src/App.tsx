import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
