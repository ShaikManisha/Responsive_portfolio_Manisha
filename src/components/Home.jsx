import React, { useEffect } from "react";
import "../assets/scss/components/home.scss";
import manisha3 from "../assets/img/Manisha3.jpg";
import ScrollReveal from "scrollreveal";
import resumePDF from "../assets/pdf/Manisha-Latest-Resume.pdf";
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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Manisha-Latest-Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hello, I'm</span>
          <h1 className="home__name">SHAIK MANISHA</h1>
          <h3 className="home__education">
            Frontend Developer || ReactJS || NextJs
          </h3>

          <div className="home__buttons">
            {/* Insert your CV  */}
            <button onClick={handleDownload} className="button button--ghost">
              {/* <a
              download="Manisha-Latest-Resume.pdf"
              href={resumePDF}
              className="button button--ghost"> */}
              Download CV
              {/* </a> */}
            </button>
            <a href="#about" className="button">
              About me
            </a>
          </div>
        </div>

        <div className="home__handle">
          {/* Insert your image, according to the example size of the portfolio  */}
          <img src={manisha3} alt="" className="about__img" />
        </div>

        <div className="home__social">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="home__social-link">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="home__social-link">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://dribbble.com/"
            target="_blank"
            className="home__social-link">
            <i className="bx bxl-dribbble"></i>
          </a>
        </div>

        <a href="#about" className="home__scroll">
          <i className="bx bx-mouse home__scroll-icon"></i>
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Home;
