import React from 'react'
import Wave from '../../../image/Services/Vector 4.png'
// import step1 from '../../../image/Services/Group 89366.png'
// import step2 from '../../../image/Services/Group 89367.png'
// import step3 from '../../../image/Services/Group 89368.png'
// import step4 from '../../../image/Services/Group 89369.png'
// import step5 from '../../../image/Services/Group 89370.png'
import group from "../../../image/Services/Group.png"
import group1 from "../../../image/Services/Group (1).png"
// import img from "../../../image/Services/1700825568_assessment 1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BestResults = ({bestResultDetailData}) => {
  // const tempArray = [
  //   { img: img, text: "STEP 1", title: "Research" },
  //   { img: img, text: "STEP 1", title: "Research" },
  //   { img: img, text: "STEP 1", title: "Research" },
  //   { img: img, text: "STEP 1", title: "Research" },
  //   { img: img, text: "STEP 1", title: "Research" },
  // ]
  return (
    <>
      { Object.keys(bestResultDetailData).length
        ? <>
            <section className='mt-110' id='BestResult'>
              <div className="container ">
                <div className="main_title d-flex justify-content-between row" data-aos="zoom-in" data-aos-duration={1500}>
                  <div className='col-md'>
                    <span className="small_title">BEST RESULTS</span>
                    <h2 className="heading_h2">{bestResultDetailData.text}</h2>
                  </div>
                  <div className='col-md d-md-flex justify-content-md-end'>
                    <a className="btn_talk" href="href" title="Let's Talk Now">
                      Let's Talk Now
                      <span>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                      </span>
                    </a>
                  </div>
                </div>
                {/* <div className='row d-flex d-md-inline-flex mt-3 mb-4 mx-2 justify-content-around justify-content-md-center align-items-center position-relative'>
                  <img className='bestResultWaveImg d-none d-md-block' src={Wave} alt="" />
                  <div className='col-12 col-sm-6 col-md my-3 ps-0 d-flex justify-content-center justify-content-md-start'>
                    <img className='bestResultProcessImgs' src={step1} alt="" />
                  </div>
                  <div className='col-12 col-sm-6 col-md my-3 d-flex justify-content-center'>
                    <img className='bestResultProcessImgs' src={step2} alt="" />
                  </div>
                  <div className='col-12 col-sm-6 col-md my-3 d-flex justify-content-center'>
                    <img className='bestResultProcessImgs' src={step3} alt="" />
                  </div>
                  <div className='col-12 col-sm-6 col-md my-3 d-flex justify-content-center'>
                    <img className='bestResultProcessImgs' src={step4} alt="" />
                  </div>
                  <div className='col-12 col-sm-6 col-md my-3 d-flex pe-0 d-flex justify-content-center justify-content-md-end'>
                    <img className='bestResultProcessImgs' src={step5} alt="" />
                  </div>
                </div> */}
                {/* <div className='row d-flex d-md-inline-flex mt-3 mb-4 mx-2 justify-content-around justify-content-md-center align-items-center position-relative w-100'>
                  <img className='bestResultWaveImg d-none d-md-block' src={Wave} alt="" />
                  {tempArray?.map((el, index) => {
                    return(
                      <div className={'col-12 col-sm-6 col-md my-3 d-flex justify-content-center position relative'+ (index%2 ? " align-items-end" : "") + (index===0 ? " ps-0 " : "") + (index===tempArray.length-1 ? " pe-0 " : "")} key={index}>
                        <img className='bestResultProcessBgImgs' src={(index%2) ? group1 : group} alt="" />
                        {(index%2) 
                          ? <img className='bestResultProcessBottomImgs bg-light p-1' src={el.img} alt="" />
                          : <img className='bestResultProcessTopImgs bg-light p-1' src={el.img} alt="" /> 
                        }
                        <div className='position-absolute bestResultTextContainer'>Hello</div>
                      </div>
                    )
                  })}
                </div> */}
                <div className='row justify-content-lg-between justify-content-md-around justify-content-sm-center align-items-center w-100 position-relative my-4' >
                  <img className='bestResultWaveImg d-none d-lg-block' src={Wave} alt="" data-aos="fade-up" data-aos-duration={1500} />
                  {bestResultDetailData.best_result_detail_images?.map((el, index) => {
                    return(
                      <div className='col-lg-2 col-md-4 col-sm-6 my-5 align-items-center justify-content-center position-relative d-flex' key={index} data-aos="fade-up" data-aos-duration={1500}>
                        <div className='bestResultTextContainer position-absolute d-flex flex-column justify-content-center align-items-center'>
                          {(index%2)
                            ? <>
                                <div className='fw-bold text-dark-blue'>{el.title}</div>
                                <div className='fw-bold'>{el.step_title}</div>
                              </>
                            : <>
                                <div className='fw-bold'>{el.step_title}</div>
                                <div className='fw-bold text-purple'>{el.title}</div>
                              </>
                          }
                        </div>
                        <div className={'bestResultProcessContainer position-relative justify-content-center d-flex' + (index%2 ? " align-items-end" : " align-items-start")}>
                          <img className='bestResultProcessBgImgs' src={(index%2) ? group1 : group} alt="" />
                          {(index%2) 
                            ? <img className='bestResultProcessBottomImgs bg-light p-1 border-color-dark-blue' src={el.image_path} alt="" />
                            : <img className='bestResultProcessTopImgs bg-light p-1 border-color-purple' src={el.image_path} alt="" /> 
                          }
                        </div>
                        {/* <div className='position-absolute bestResultTextContainer'>Hello</div> */}
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

export default BestResults