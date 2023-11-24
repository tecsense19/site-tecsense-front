import React from 'react'
import BannerImg from "../../../image/Services/Open source-rafiki 1.png"
import BlowBannerImg from "../../../image/Services/Image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Banner = () => {
  return (
    <>
      <div id='Banner'>
        <div className='left'>
          <h2>
            WordPress Website Development Company
          </h2>
          <p>Create your website on WordPress, manage your content yourself, and keep it up to date.</p>
          <div>
            <button>
              Contact us
            </button>
            <a className="btn_talk" href="!#" title="Let’s Talk Now ">
              Our Portfolio
              <span>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
              </span>
            </a>
          </div>
        </div>
        <div className='right'>
          <img src={BannerImg} alt="" />
        </div>
      </div>
      <div className="imgContainer">
        <img src={BlowBannerImg} alt="img" />
      </div>
    </>
  )
}

export default Banner