import React, { useEffect, useRef } from "react";
import "../assets/scss/components/testimonials.scss";
import Swiper from "swiper";
import "../swiper-bundle.min.css"; // Import Swiper styles
import "../assets/js/swiper-bundle.min.js";
const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".testimonial__container", {
      spaceBetween: 24,
      loop: true,
      grabCursor: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
    });
  }, []);

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section class="testimonial section">
      <span class="section__subtitle">My clients say</span>
      <h2 class="section__title">Testimonial</h2>

      <div class="testimonial__container container swiper">
        <div class="swiper-wrapper">
          <div class="testimonial__card swiper-slide">
            <img
              src="assets/img/testimonial1.png"
              alt=""
              class="testimonial__img"
            />

            <h3 class="testimonial__name">Ravindra</h3>
            <p class="testimonial__description">
              Top-notch work! Diligent, creative, and consistently delivers
              excellent results. A true professional in every sense
            </p>
          </div>

          <div class="testimonial__card swiper-slide">
            <img
              src="assets/img/testimonial2.png"
              alt=""
              class="testimonial__img"
            />

            <h3 class="testimonial__name">Achyuth Reddy</h3>
            <p class="testimonial__description">
              A really good job, all aspects of the project were followed step
              by step and with good results.
            </p>
          </div>

          <div class="testimonial__card swiper-slide">
            <img
              src="assets/img/testimonial3.png"
              alt=""
              class="testimonial__img"
            />

            <h3 class="testimonial__name">Sony</h3>
            <p class="testimonial__description">
              It's always a pleasure to work with hema and her team. They are
              personable, responsive, and results-oriented!
            </p>
          </div>
        </div>

        <div class="swiper-pagination"></div>
        <div className="swiper-button-prev" onClick={goToPrev}></div>
        <div className="swiper-button-next" onClick={goToNext}></div>
      </div>
    </section>
  );
};

export default Testimonials;
