import React from "react";
import "../assets/scss/components/contact.scss";
const Contact = () => {
  const phoneNumber = "9573396950";
  const message = "Hello, more information!";

  const WhatsAppLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <section class="contact section" id="contact">
      <span class="section__subtitle">Get in touch</span>
      <h2 class="section__title">Contact Me</h2>

      <div class="contact__container container grid">
        <div class="contact__content">
          <h3 class="contact__title">Talk to me</h3>

          <div class="contact__info">
            <div class="contact__card">
              <i class="bx bx-mail-send contact__card-icon"></i>
              <h3 class="contact__card-title">Email</h3>
              <span class="contact__card-data">smanisha1919@gmail.com</span>

              {/* <!-- Insert your original email --> */}
              <a
                href="mailto:examplemail@correo.com"
                target="_blank"
                class="contact__button">
                Write me
                <i class="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div class="contact__card">
              <i class="bx bxl-whatsapp contact__card-icon"></i>
              <h3 class="contact__card-title">Whatsapp</h3>
              <span class="contact__card-data">9573396950</span>

              {/* <!-- Insert a real number plus country code --> */}
              <a href={WhatsAppLink} target="_blank" class="contact__button">
                Write me
                <i class="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div class="contact__card">
              <i class="bx bxl-linkedin-square contact__card-icon"></i>
              <h3 class="contact__card-title">Linkedin</h3>
              <span class="contact__card-data">smanisha1919</span>

              {/* <!-- Insert your brand name or profile --> */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                class="contact__button">
                Write me
                <i class="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact__content">
          <h3 class="contact__title">Write me your project</h3>

          <form action="" class="contact__form">
            <div class="contact__form-div">
              <label class="contact__form-tag">Names</label>
              <input
                type="text"
                placeholder="Insert your name"
                class="contact__form-input"
              />
            </div>

            <div class="contact__form-div">
              <label class="contact__form-tag">Mail</label>
              <input
                type="email"
                placeholder="Insert your email"
                class="contact__form-input"
              />
            </div>

            <div class="contact__form-div contact__form-area">
              <label class="contact__form-tag">Project</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write your project"
                class="contact__form-input"></textarea>
            </div>

            <button class="button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
