import React, { useState } from "react";
import "../assets/scss/components/services.scss";
const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const modal = (modalClick) => {
    setActiveModal(modalClick);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const servicesData = [
    {
      title: `Web Developer`,
      buttonText: "See More",
      icon: <i className="bx bx-right-arrow-alt services__icon"></i>,
      description:
        " Service with more than 2 years of experience. Providing quality work to clients and companies",
      details: [
        {
          icon: <i className="bx bx-check services__modal-icon"></i>,
          info: "Developed UI with pixel perfect",
        },
        {
          icon: <i className="bx bx-check services__modal-icon"></i>,
          info: "Creating web pages with coding standards",
        },
        {
          icon: <i className="bx bx-check services__modal-icon"></i>,
          info: "Designed the websites by using Tailwind CSS,Material UI",
        },
        {
          icon: <i className="bx bx-check services__modal-icon"></i>,
          info: "Did the integration part using GraphQL and REST Api's",
        },
      ],
    },

    {
      title: `Frontend Developer`,
      buttonText: "See More",
      icon: <i className="bx bx-right-arrow-alt services__icon"></i>,
      description:
        " Service with more than 2.5 years of experience. Providing quality work to clients and companies",
      details: [
        {
          icon: <i className="bx bx-check services__modal-icon"></i>,
          info: "Developed UI with pixel perfect",
        },
        {
          icon: <i className="bx bx-check services__modal-icon"></i>,
          info: "Creating web pages with coding standards",
        },
        {
          icon: <i className="bx bx-check services__modal-icon"></i>,
          info: "Designed the websites by using Tailwind CSS,Material UI",
        },
        {
          icon: <i className="bx bx-check services__modal-icon"></i>,
          info: "Did the integration part using GraphQL and REST Api's",
        },
      ],
    },
    {
      title: `Node Js & Express Js`,
      buttonText: "See More",
      icon: <i className="bx bx-right-arrow-alt services__icon"></i>,
      description:
        " Service with more than 2 years of experience. Providing quality work to clients and companies",
      details: [
        {
          icon: <i className="bx bx-check services__modal-icon"></i>,
          info: "Having basic knowlege on Node",
        },
        {
          icon: <i className="bx bx-check services__modal-icon"></i>,
          info: "Created personal projects using Backend end",
        },
      ],
    },
  ];

  return (
    <section className="services section">
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>

      <div className="services__container container grid">
        {servicesData.map((service, index) => (
          <div className="services__card" key={index}>
            <h3 className="services__title">{service.title}</h3>
            <div className="services__button" onClick={() => modal(index)}>
              {service.buttonText}
              <span className="services__icon">{service.icon}</span>
            </div>
          </div>
        ))}
      </div>
      {activeModal !== null && (
        <div className="services__modal active-modal" onClick={closeModal}>
          <div className="services__modal-content">
            <span className="services__modal-close">&times;</span>
            <h3 className="services__modal-title">
              {servicesData[activeModal].title}
            </h3>
            <p className="services__modal-description">
              {servicesData[activeModal].description}
            </p>
            <ul className="services__modal-list">
              {servicesData[activeModal].details.map((detail, index) => (
                <li className="services__modal-item" key={index}>
                  <span className="services__modal-icon">{detail.icon}</span>
                  <p className="services__modal-info">{detail.info}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
