import React, { useEffect, useState } from 'react'
import upworkLogo from "../../image/upwork-logo.png";
import googleLogo from "../../image/google.png";
import Hubspot from "../../image/hubspot-review.png";
import clutch from "../../image/hubspot-review.png";
import Client1 from "../../image/client-1.png";
import vector2 from "../../image/vector-2.png";
import OwlCarousel from 'react-owl-carousel';

import Shape4 from "../../image/shape-4.png";
import Shape5 from "../../image/shape-5.png";


import { postData } from '../../utils/ApiReq';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ClientSec = () => {

  const [testimonialData, setTestimonialData] = useState(null);


  //function to call api
  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const result = await postData('testimonial/list', JSON.stringify({
          search_technology: ""
        }));
        return setTestimonialData(result.data)
      } catch (error) {
        return console.log(error)
      }
    };
    fetchMyData()
  }, []);



  return testimonialData && (
    <section id="clients" className="mt-110">
      <div className="container">
        <div className="title-header" data-aos="zoom-in" data-aos-duration={1500}>
          <div className="main_title">
            <span className="small_title">TESTIMONIAL</span>
            <h2 className="heading_h2">WHAT OUR CLIENTS SAY</h2>
          </div>
          <a className="btn_talk" title="View all" id="testimonial-btn" href="!#">
            VIEW ALL
            <span>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />

            </span>
          </a>
        </div>
        <div className="clients_logo" data-aos="fade-up" data-aos-duration={1500}>
          <ul className="brouser">
            <li>
              <img src={upworkLogo} alt="img" />
            </li>
            <li>
              <img src={googleLogo} alt="img" />
            </li>
            <li>
              <img src={Hubspot} alt="img" />
            </li>
            <li>
              <img src={clutch} alt="img" />
            </li>
          </ul>
        </div>
        <div className="testimonial_slider">
          <OwlCarousel items={1} class="owl-carousel-3 owl-carousel" responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            }
          }} loop={true} margin={40} nav={true}>

            {

              testimonialData && testimonialData?.map((el, i) => {
                return (
                  <div className="item" key={i}>
                    <div className="row">
                      <div className="col-sm-12 col-md-4">
                        <div
                          className="client_box"
                          data-aos="fade-up"
                          data-aos-duration={1500}
                        >
                          <div className="client_img">
                            <img src={el.profile_pic} alt={el.full_name} />
                            <p>
                              <span>{el.full_name}</span> {el.country}
                            </p>
                          </div>
                          <div className="quote">
                            <img src={vector2} alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-8">
                        <div
                          className="testimonial_text"
                          data-aos="fade-up"
                          data-aos-duration={1500}
                        >
                          <div className="testimonial_text_box">
                            <p>
                              {el.client_description}
                            </p>
                            <div className="quote-2">
                              <img src={vector2} alt="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </OwlCarousel>
        </div>
      </div>
      <div className="shape-4">
        <img src={Shape4} alt="img" />
      </div>
      <div className="shape-5">
        <img src={Shape5} alt="img" />
      </div>
    </section>

  )
}

export default ClientSec