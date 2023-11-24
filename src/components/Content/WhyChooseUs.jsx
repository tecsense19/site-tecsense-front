import React, { useEffect, useState, useRef } from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import { postData } from "../../utils/ApiReq"

import { faLongArrowLeft, faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WhyChooseUs = () => {

  //the data come from api that saves in this state below
  const [whyChooseUsData, setWhyChooseUsData] = useState(null);

  

  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    carouselRef.current.prev();
  };

  const handleNextClick = () => {
    carouselRef.current.next();
  };



  //function to call api
  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const result = await postData('why/choose/list', '');

        //stting timeout function to wait untill data get fateched from api
        return setWhyChooseUsData(result.data)
      } catch (error) {
        return console.log(error)
      }
    };
    fetchMyData()
  }, []);
  const options = {
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    navText: [
      <FontAwesomeIcon icon={faLongArrowLeft} />,
      <FontAwesomeIcon icon={faLongArrowRight} />,
    ],
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 1.5,
      },
      991: {
        items: 2.5,
      },
      1200: {
        items: 3.53,
      }
    }
  }
    ;


  

  return whyChooseUsData && (
    <section id="choose_us" className="mt-110">
      <div className="container"><div>
        <div className="title-header">
          <div className="main_title" data-aos="zoom-in" data-aos-duration={1500}>
            <span className="small_title">WHAT WE DO</span>
            <h2 className="heading_h2">{whyChooseUsData[0].title}</h2>
          </div>
        </div>
        <p className="p_text" data-aos="fade-up">
          {whyChooseUsData[0].description}
        </p>
      </div>

        <div className=' btn_nxt_pre'>
          <button onClick={handlePrevClick} className="custom-prev-button btn owl-prev">
            <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
          </button>
          <button onClick={handleNextClick} className="custom-next-button btn owl-next">
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
          </button>
        </div>
      </div>
      <div className="container-fluid g-0">
        <div className="choose_us_slider">
          <OwlCarousel options={options} className='owl-carousel-2 owl-carousel owl-theme' ref={carouselRef}>

            {whyChooseUsData[0].why_choose_images.map((el, i) => {
              return (
                <div className="item">
                  <div
                    className="choose_us_box"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                  >
                    <div className="t-icon">
                      <img src={el.image_path} alt={el.title} />
                    </div>
                    <div className="choose_text">
                      <h3>{el.title}</h3>
                      <p>
                        {el.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </OwlCarousel>
          
        </div>
      </div>
    </section>

  )
}

export default WhyChooseUs