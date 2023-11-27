import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const QuickLook = ({quickLookDetailData}) => {

  return (
    <>
      { Object.keys(quickLookDetailData).length
        ? <section className='mt-110' id='QuickLook'>
            <div className="container">
              <div className="main_title row d-flex justify-content-between" data-aos="zoom-in" data-aos-duration={1500}>
                <div className='col-md-6'>
                  <span className="small_title">QUICK LOOK</span>
                  <h2 className="heading_h2">{quickLookDetailData.text}</h2>
                </div>
                <div className='col-md-6 d-md-flex justify-content-md-end'>
                  <a className="btn_talk" href="href" title="View More" id='quickLook-btn'>
                    VIEW MORE
                    <span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="d-flex">
                <div className='row my-3'>
                  {quickLookDetailData.quick_look_detail_images?.map((el, i) => {
                    return(
                      <div className='col-lg-6 my-2' key={"Quick_look"+i} data-aos="fade-up" data-aos-duration={1500}>
                        <div className="card border-0 quickLookCard">
                          <img src={el.image_path} className="card-img-top" alt="..." />
                          <div className="card-body p-4">
                            <div className='row mt-2 mb-3'>
                              <h4 className='quickLookCardHeading'>{el.title}</h4>
                            </div>
                            <span className='quickLookCardDesc'>{el.description}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        : <></>
      }
    </>
  )
}

export default QuickLook