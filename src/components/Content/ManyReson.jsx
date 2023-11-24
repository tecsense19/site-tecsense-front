import React from 'react'
import Group1 from '../../image/group-1.png'
import Group2 from '../../image/group-2.png'
import Group3 from '../../image/group-3.png'
import Group4 from '../../image/group-4.png'
import Group5 from '../../image/group-5.png'
import Shape1 from "./../../image/shape-1.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ManyReson = () => {
  return (
    <section id="many_reason" className="mt-110">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="main_title"
              data-aos="fade-right"
              data-aos-duration={1500}
            >
              <h2 className="heading_h2">
                THREE ARE MANY REASON TO CHOOSE <span>TECSENSE</span>
              </h2>
            </div>
            <div className="app_accoedion">
              <div className="accordion" id="accordionExample">
                <div
                  className="accordion-item"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                >
                  <div className="app_icon">
                    <img src={Group1} alt="img" />
                  </div>
                  <div className="accoedion_box">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        WEB DEVELOPMENT
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          All hypothesis and tests are saved and shared <br /> with
                          you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                >
                  <div className="app_icon">
                    <img src={Group2} alt="img" />
                  </div>
                  <div className="accoedion_box">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        DIGITAL MARKETING
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          All hypothesis and tests are saved and shared <br /> with
                          you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                >
                  <div className="app_icon">
                    <img src={Group3} alt="img" />
                  </div>
                  <div className="accoedion_box">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        BRANDING
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          All hypothesis and tests are saved and shared <br /> with
                          you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="btn_talk" href="!#" title="Let’s Talk Now ">
              Let’s Talk Now
              <span>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
              </span>
            </a>
          </div>
          <div className="col-lg-6">
            <div className="reason_img">
              <div
                className="reason_main"
                data-aos="fade-up"
                data-aos-duration={1500}
              >
                <img src={Group4} alt="img" />
              </div>
              <div
                className="curser-img"
                data-aos="fade-down"
                data-aos-duration={1500}
              >
                <img src={Group5} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <img src={Shape1} alt="img" />
      </div>
    </section>

  )
}

export default ManyReson