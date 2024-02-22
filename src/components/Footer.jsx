import React from "react";
import "../assets/scss/components/footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Manisha</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="footer__link">
              Projects
            </a>
          </li>
          {/* <li>
            <a href="#testimonial" className="footer__link">
              Testimonials
            </a>
          </li> */}
        </ul>

        <ul className="footer__social">
          <a
            href="https://www.gmail.com/"
            target="_blank"
            className="footer__social-link">
            <i className="bx bxl-gmail"></i>
          </a>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            className="footer__social-link">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="footer__social-link">
            <i className="bx bxl-linkedin"></i>
          </a>
        </ul>
        <span className="footer__social footer__link footer_text">
          ©Manisha. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
