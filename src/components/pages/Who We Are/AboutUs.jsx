import React, { useEffect, useState } from 'react'
import Vector1 from "../../../image/Who_We_Are/Vector1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { postData } from "../../../utils/ApiReq"
const AboutUs = () => {

  const [aboutUsData, setAboutUsData] = useState(null);


  //function to call api
  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const result = await postData('about/us', '');
        return setAboutUsData(result.data[0])
      } catch (error) {
        return console.log(error)
      }
    };
    fetchMyData()
  }, []);

  return aboutUsData && (
    <section id='AboutUS'>
      <div className="container AboutUS_Container">
        <div className="main_title"  >
          <span className="small_title">{aboutUsData?.text}</span>
          <h2 className="heading_h2">{aboutUsData?.title}</h2>
        </div>
        <div className="flex">
          <div className='left'>
            <img src={aboutUsData?.section_image} alt="img" />
          </div>
          <div className='middle'>
            <div className='peregraph_div'>
              <p data-aos="zoom-in"
                data-aos-duration={1500}>{aboutUsData?.description}</p>
              <div className='list_icons'>
                <div className='list_icons_left' data-aos="fade-right"
                  data-aos-duration={1500}>
                  <ul>
                    {aboutUsData.about_images.slice(0, 3).map((el, i) => {
                      return (
                        <li key={i}><img src={el.image_path} alt="img" /> {el.title}</li>
                      )
                    })}
                  </ul>
                </div>
                <div className='list_icons_right' data-aos="fade-left"
                  data-aos-duration={1500}>
                  <ul>
                    {aboutUsData?.about_images.slice(3, 6).map((el, i) => {
                      return (
                        <li key={i}><img src={el.image_path} alt="img" /> {el.title}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <a className="btn_talk view-btn" href="href" title="View all services">
                VIEW ALL SERVICES
                <span>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                </span>
              </a>
            </div>
          </div>
          <div className='right'>
            <img src={Vector1} alt="img" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUs