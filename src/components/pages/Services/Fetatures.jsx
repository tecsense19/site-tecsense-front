import React from 'react'
// import icon1 from "../../../image/Services/Group 1.png"
// import icon2 from "../../../image/Services/Group 2.png"
// import icon3 from "../../../image/Services/Group 3.png"

// import count1 from "../../../image/Services/one.png"
// import count2 from "../../../image/Services/two (2).png"
// import count3 from "../../../image/Services/three.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Fetatures = ({ featuredetailData }) => {
  // const counterImages = [count1, count2, count3]
  return (
    <>
      { Object.keys(featuredetailData).length
        ? <>
            {/* <div id='fetatures'>
              <div className="main_title">
                <span className="small_title">fETATURES</span>
                <h2 className="heading_h2">{featuredetailData.text}</h2>
              </div>
              <div className='fetaturesCantainer'>
                <div className="fetaturesCard">
                  <div className='fetaturesTitleBox'>
                    <div className='fetaturesiconbox'>
                      <img src={icon1} alt="img" />
                    </div>
                    <h2>Better SEO rankings</h2>
                  </div>
                  <div className='fetaturesPeraBox'>
                    <p>
                      To ensure that your website ranks, we use all cutting-edge SEO strategies for WordPress, including speed and performance optimization.
                    </p>
                  </div>
                  <div className='seqbox'>
                    <img src={one} alt="" />
                  </div>
                </div>
                <div className="fetaturesCard">
                  <div className='fetaturesTitleBox'>
                    <div className='fetaturesiconbox'>
                      <img src={icon2} alt="img" />
                    </div>
                    <h2>Better SEO rankings</h2>
                  </div>
                  <div className='fetaturesPeraBox'>
                    <p>
                      To ensure that your website ranks, we use all cutting-edge SEO strategies for WordPress, including speed and performance optimization.
                    </p>
                  </div>
                  <div className='seqbox'>
                    <img src={two} alt="" />
                  </div>
                </div>
                <div className="fetaturesCard">
                  <div className='fetaturesTitleBox'>
                    <div className='fetaturesiconbox'>
                      <img src={icon3} alt="img" />
                    </div>
                    <h2>Better SEO rankings</h2>
                  </div>
                  <div className='fetaturesPeraBox'>
                    <p>
                      To ensure that your website ranks, we use all cutting-edge SEO strategies for WordPress, including speed and performance optimization.
                    </p>
                  </div>
                  <div className='seqbox'>
                    <img src={three} alt="" />
                  </div>
                </div>
              </div>
            </div> */}
            <section className='mt-110' id='Features'>
              <div className="container ">
                <div className="main_title d-flex justify-content-between row" data-aos="zoom-in" data-aos-duration={1500}>
                  <div className='col-md'>
                    <span className="small_title">FEATURES</span>
                    <h2 className="heading_h2">{featuredetailData.text}</h2>
                  </div>
                </div>
                <div className='row d-flex mt-3 mb-4 mx-2'>
                  {featuredetailData.features_detail_images?.map((el, i) => {
                    return(
                      <div className='col-md-4 my-3' key={i} data-aos="fade-up" data-aos-duration={1500}>
                        <div className='featureCard d-flex flex-column justify-content-center p-3'>
                          <div className='featureCardImgContainer w-100 bg-light px-3 pb-3 pt-2 d-flex flex-column align-items-center'>
                            <img className='featureCardImg' src={el.image_path} alt="" />
                            <h3 align="center" className='heading_h3'>{el.title}</h3>
                          </div>
                          <div className='p-2 d-flex flex-column align-items-center'>
                            <div className='opacity7'>
                              {el.description}
                            </div>
                            {/* <img className='featureCardCounterImg' src={""} alt="" /> */}
                            <div className='featureCardCounterText d-flex align-items-center justify-content-center heading_h3 px-2'>{i+1}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          </>
        : <></>
      }
    </>
  )
}

export default Fetatures