import React from "react";
import "../assets/scss/components/footer.scss";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__container container">
        <h1 class="footer__title">Manisha</h1>

        <ul class="footer__list">
          <li>
            <a href="#about" class="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#work" class="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonial" class="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <ul class="footer__social">
          <a
            href="https://www.gmail.com/"
            target="_blank"
            class="footer__social-link">
            <i class="bx bxl-gmail"></i>
          </a>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            class="footer__social-link">
            <i class="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            class="footer__social-link">
            <i class="bx bxl-linkedin"></i>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
