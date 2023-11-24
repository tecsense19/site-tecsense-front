import React, { useEffect, useState } from 'react'
import { postData } from "../../../utils/ApiReq"
const OurWorkingProcess = () => {

  const [ourWorkingProcessData, setourWorkingProcessData] = useState(null);


  //function to call api
  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const result = await postData('our/working/process', '');
        return setourWorkingProcessData(result.data[0])
      } catch (error) {
        return console.log(error)
      }
    };
    fetchMyData()
  }, []);




  return ourWorkingProcessData && (
    <section className="mt-110 our_working_process">
      <div className='card_images'>
        <div className="title-header " data-aos="zoom-in" data-aos-duration={1500}>
          <div className="main_title ">
            <span className="small_title">{ourWorkingProcessData?.text}</span>
            <h2 className="heading_h2">{ourWorkingProcessData?.title}</h2>
          </div>
        </div>
        <div className='row' >
          {ourWorkingProcessData?.process_images.slice(0, 2).map((el, i) => {
            return (
              <img src={el.image_path} alt="img" data-aos="fade-left" data-aos-duration={1500} key={i} />

            )
          })}
        </div>
        <div className='row' >
          {ourWorkingProcessData?.process_images.slice(2, 4).map((el, i) => {
            return (
              <img src={el.image_path} alt="img" data-aos="fade-right" data-aos-duration={1500} key={i} />

            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurWorkingProcess