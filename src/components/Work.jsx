import { useState } from "react";
import "../assets/scss/components/works.scss";
import Work1 from "../assets/img/work1.jpg";
import Work2 from "../assets/img/work2.jpg";
import Work3 from "../assets/img/work3.jpg";
import Work4 from "../assets/img/work4.jpg";
import Work5 from "../assets/img/work5.jpg";
import Work6 from "../assets/img/work6.jpg";
const workItems = [
  {
    id: 1,
    image: Work1,
    category: "web",
    title: "BrontoPlus",
  },
  {
    id: 2,
    image: Work2,
    category: "movil",
    title: "Solix",
  },
  {
    id: 3,
    image: Work3,
    category: "design",
    title: "Nextjs Project",
  },
  {
    id: 4,
    image: Work4,
    category: "web",
    title: "Ecommerence Project",
  },
  {
    id: 5,
    image: Work5,
    category: "movil",
    title: "Metaverse",
  },
  {
    id: 6,
    image: Work6,
    category: "movil",
    title: "Admin Panels",
  },
];
const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="work section" id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span
          className={`work__item ${
            activeFilter === "all" ? "active-work" : ""
          }`}
          onClick={() => handleFilterClick("all")}>
          All
        </span>
        {["web", "movil", "design"].map((filter) => (
          <span
            key={filter}
            className={`work__item ${
              activeFilter === filter ? "active-work" : ""
            }`}
            onClick={() => handleFilterClick(filter)}>
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {workItems
          .filter(
            (work) => activeFilter === "all" || work.category === activeFilter
          )
          .map((work) => (
            <div key={work.id} className={`work__card mix ${work.category}`}>
              <img src={work.image} alt="" className="work__img" />
              <h3 className="work__title">{work.title}</h3>
              {/* <a href="" className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__icon"></i>
              </a> */}
            </div>
          ))}
      </div>
    </section>
  );
};
export default Work;
