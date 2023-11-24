import React from 'react'
import Baner from "../../image/banner-img.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="banner_text"
              data-aos="fade-right"
              data-aos-duration={1500}
            >
              <span>Website Design &amp; Development</span>
              <h1>Create A Striking brand Image with</h1>
              <h2>An Impactful Website!</h2>
              <a className="btn_talk" href="!#" title="Let’s Talk Now ">
                Let’s Talk Now
                <span>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1500}>
            <div className="banner_img">
              <img src={Baner} alt="img" />
            </div>
          </div>
        </div>
        <div className="banner_social_link">
          <ul>
            <li>
              <a href="!#" title="Facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="!#" title="Instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="!#" title="Linkdin">
                Linkdin
              </a>
            </li>
            <li>
              <a href="!#" title="Skype">
                Skype
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

  )
}

export default Banner