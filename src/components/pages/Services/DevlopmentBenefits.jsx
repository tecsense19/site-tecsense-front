import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import rectangle2327 from "../../../image/Services/Rectangle 2327.png"

const DevlopmentBenefits = ({developmentBenefitsDetailData}) => {

  return (
    <>
      { Object.keys(developmentBenefitsDetailData).length
        ? <>
            <section className='mt-110' id='DevlopmentBenefits'>
              <div className="container">
                <div className="main_title row d-flex justify-content-between" data-aos="zoom-in" data-aos-duration={1500}>
                  <div className='col-md-6'>
                    <span className="small_title">For Your Business Needs</span>
                    <h2 className="heading_h2">{developmentBenefitsDetailData.text}</h2>
                  </div>
                  <div className='col-md-6 d-md-flex justify-content-md-end'>
                    <a className="btn_talk" href="href" title="Let's Talk Now">
                      Let's Talk Now
                      <span>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className='developmentBenefitsDesc my-4' data-aos="fade-up" data-aos-duration={1500}>
                  {developmentBenefitsDetailData.business_description}
                </div>
                <div className='row'>
                  <div className='col-md px-0'>
                    {developmentBenefitsDetailData.business_detail_images?.slice(0,3)?.map((item, index) => {
                      return(
                        <div className='p-3' data-aos="fade-right" key={index}>
                          <div className='developmentBenefits-items heading_h3 p-4 d-flex align-items-center'>
                            <img className='pe-2' src={item.image_path} alt="" />
                            <div className='ms-0 ms-sm-4'>{item.title}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className='col-md px-0'>
                    {developmentBenefitsDetailData.business_detail_images?.slice(3,6)?.map((item, index) => {
                      return(
                        <div className='p-3' data-aos="fade-left" key={index}>
                          <div className='developmentBenefits-items heading_h3 p-4 d-flex align-items-center'>
                            <img src={item.image_path} alt="" />
                            <div className='ms-0 ms-sm-4'>{item.title}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
            <div>
              <div className='mt-110 developmentFooterContainer row position-relative justify-content-center align-items-center text-light'>
                <img src={rectangle2327} className='developmentFooterImg p-0' alt="" />
                <div className='h-100 developmentFooterContent position-absolute d-flex flex-column justify-content-center align-items-center' data-aos="zoom-in" data-aos-duration={1500}>
                  <span className='opacity7 d-none d-lg-block'>Create your own development team now</span>
                  <div align="center" className='developmentFooterHeading heading_h2 text-transform-none text-light mt-2 mb-3 px-1'>
                    Digitized Future-Proof Solution with The Best Technologies
                  </div>
                  <a className="btn_talk text-light mt-0 d-none d-md-flex" href="href" title="Let's Talk Now">
                    <div className='opacity8'>Let's Talk Now</div>
                    <span className='border-light'>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </>
        : <></>
      }
    </>
  )
}

export default DevlopmentBenefits