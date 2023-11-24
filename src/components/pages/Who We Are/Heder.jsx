import React from 'react'
import HederImg from "../../../image/Header.png"

const Heder = () => {
  return (
    <section  className='banner_container'>
      <div className="container ">
      <div className="row align-items-center">
      <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={1500}>
            <div className="banner_img">
              <img src={HederImg} alt="img" />
            </div>
          </div>
      </div>
      </div>
    </section>
  )
}

export default Heder 