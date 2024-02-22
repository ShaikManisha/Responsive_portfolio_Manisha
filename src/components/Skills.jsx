import "../assets/scss/components/skills.scss";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">My abilities</span>
      <h2 className="section__title">My Experience</h2>

      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Frontend developer</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">NextJs</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Material UI</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Tailwind Css</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Git</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">React</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Redux</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">SCSS</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__title">Backend Developer</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Node Js</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Express Js</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>

              {/* <!-- <div className="skills__data">
                                    <i className='bx bxs-badge-check' ></i>

                                    <div>
                                        <h3 className="skills__name">Python</h3>
                                        <span className="skills__level">Intermediate</span>
                                    </div>
                                </div> --> */}
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">MongoDB</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>

              {/* <!-- <div className="skills__data">
                                    <i className='bx bxs-badge-check' ></i>

                                    <div>
                                        <h3 className="skills__name">Firebase</h3>
                                        <span className="skills__level">Intermediate</span>
                                    </div>
                                </div> --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
