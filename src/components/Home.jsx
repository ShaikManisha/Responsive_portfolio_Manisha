import React, { useEffect } from "react";
import "../assets/scss/components/home.scss";
import maniAbout from "../assets/img/maniAbout.jpg";
import ScrollReveal from "scrollreveal";
const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      // reset: true (if you want to reset animations on each scroll)
    });

    sr.reveal(".home__data");
    sr.reveal(".home__handle", { delay: 700 });
    sr.reveal(".home__social, .home__scroll", { delay: 900, origin: "bottom" });

    // Clean up ScrollReveal instance on component unmount
    return () => sr.destroy();
  }, []);
  return (
    <section class="home section" id="home">
      <div class="home__container container grid">
        <div class="home__data">
          <span class="home__greeting">Hello, I'm</span>
          <h1 class="home__name">SHAIK MANISHA</h1>
          <h3 class="home__education">
            Frontend Developer || ReactJS || NextJs
          </h3>

          <div class="home__buttons">
            {/* Insert your CV  */}
            <a
              download="Manisha-Latest-Resume.pdf"
              href="../assets/pdf/Manisha-Latest-Resume.pdf"
              class="button button--ghost">
              Download CV
            </a>
            <a href="#about" class="button">
              About me
            </a>
          </div>
        </div>

        <div class="home__handle">
          {/* Insert your image, according to the example size of the portfolio  */}
          <img src={maniAbout} alt="" class="about__img" />
        </div>

        <div class="home__social">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            class="home__social-link">
            <i class="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            class="home__social-link">
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://dribbble.com/"
            target="_blank"
            class="home__social-link">
            <i class="bx bxl-dribbble"></i>
          </a>
        </div>

        <a href="#about" class="home__scroll">
          <i class="bx bx-mouse home__scroll-icon"></i>
          <span class="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Home;
