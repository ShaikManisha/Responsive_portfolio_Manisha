import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
// import "./assets/scss/components/theme.scss";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(null);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "dark-theme" ? "light-theme" : "dark-theme"
    );
  };

  useEffect(() => {
    // Check for the user's preferred theme from localStorage or any other source
    const userPrefersDark = true; // Example: Change this based on user preference
    const initialTheme = userPrefersDark ? "dark-theme" : "light-theme";

    // Set the theme on the main element
    const mainElement = document.querySelector("main");
    mainElement.classList.add(initialTheme);
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme !== null) {
      const mainElement = document.querySelector("main");
      mainElement.classList.remove("dark-theme", "light-theme");
      mainElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
