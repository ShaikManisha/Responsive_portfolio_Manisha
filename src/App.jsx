import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./assets/scss/components/theme.scss";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark-theme");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "dark-theme" ? "light-theme" : "dark-theme"
    );
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main class="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
