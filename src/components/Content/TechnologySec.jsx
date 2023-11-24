import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { postData } from "../../utils/ApiReq"

const TechnologySec = () => {

  //the data come from api that saves in this state below
  const [technologyData, setTechnologyData] = useState(null);


  //function to call api
  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const result = await postData('technology/list', JSON.stringify({
          search_technology: ""
        }));

        //stting timeout function to wait untill data get fateched from api
        return setTechnologyData(result.data)
      } catch (error) {
        return console.log(error)
      }
    };
    fetchMyData()
  }, []);


  return technologyData && (
    <section id="Technology" className="mt-110">
      <div className="container">
        <div className="title-header" data-aos="zoom-in" data-aos-duration={1500}>
          <div className="main_title">
            <span className="small_title">TOOLS</span>
            <h2 className="heading_h2">TECHNOLOGY</h2>
          </div>
          <a
            className="btn_talk"
            id="testimonial-btn"
            title="Let’s Talk Now"
            href="#"
          >
            VIEW ALL
            <span>
              < FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
            </span>
          </a>
        </div>
        <p className="p_text" data-aos="fade-up" data-aos-duration={1500}>
          Our Expertise Lies In Multiple And Some Of The Most Trending Tech Stacks.
        </p>
        <div className="row" data-aos="zoom-in" data-aos-duration={1500}>
          {/*  loop to render component acording to data from api */}
          {technologyData?.map((el, i) => {
            return (
              <div className="col-lg-12" key={i} data-aos="zoom-in" data-aos-duration={1500}>
                <div
                  className="technology_box technology_box aos-init aos-animate"
                >
                  <div className="tool_btn">
                    <a href="#" title="Database">
                      <span>{el.technology_name}</span>
                    </a>
                  </div>
                  <div className="tools_list">
                    <ul>
                      {/* loop to render icons */}
                      {
                        el.technology_images?.map((el, i) => {
                          return (
                            <li key={i}>
                              <img src={el.image_path} alt={el.title} />
                              <p>{el.title}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechnologySec