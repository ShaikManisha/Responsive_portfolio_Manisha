import React from "react";
import "../assets/scss/components/contact.scss";
const Contact = () => {
  const phoneNumber = "9573396950";
  const message = "Hello, more information!";

  const WhatsAppLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="contact section" id="contact">
      <span className="section__subtitle">Get in touch</span>
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">smanisha1919@gmail.com</span>

              {/* <!-- Insert your original email --> */}
              <a
                href="mailto:examplemail@correo.com"
                target="_blank"
                className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">9573396950</span>

              {/* <!-- Insert a real number plus country code --> */}
              <a
                href={WhatsAppLink}
                target="_blank"
                className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin-square contact__card-icon"></i>
              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">smanisha1919</span>

              {/* <!-- Insert your brand name or profile --> */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form action="" className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Names</label>
              <input
                type="text"
                placeholder="Insert your name"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                placeholder="Insert your email"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write your project"
                className="contact__form-input"></textarea>
            </div>

            <button className="button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
