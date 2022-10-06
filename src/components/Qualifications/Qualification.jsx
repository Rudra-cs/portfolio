import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification__section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        {/* Change Tabs According to Education or Experience */}
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTab(1);
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTab(2);
            }}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        {/* Education Data */}
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">
                  Silicon Institute Of Technology - BBSR
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2019-2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Intermediate(12th)</h3>
                <span className="qualification__subtitle">
                  B.J.B. Jnr. College - BBSR
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2015-2017
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Matriculation(10th)</h3>
                <span className="qualification__subtitle">
                  Venkateswar English Medium School
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2003 - 2015
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Experience Data */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SDE Intern </h3>
                <span className="qualification__subtitle">Inofinity R&D</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>Sep 2021 - Jul 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">FrontEnd Developer</h3>
                <span className="qualification__subtitle">SOUL Foundation</span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>May 2021 - Feb 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Appstone Pvt. Ltd.</h3>
                <span className="qualification__subtitle">
                  Android Dev Trainee
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>Jul 2020 - Nov 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
