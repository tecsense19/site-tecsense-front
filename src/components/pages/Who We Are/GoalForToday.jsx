import React, { useEffect, useState } from 'react'
import vector from "../../../image/Who_We_Are/Vector2.png"
import { postData } from "../../../utils/ApiReq"

const GoalForToday = () => {

  const [goalForTodayData, setGoalForTodayDataData] = useState(null);


  //function to call api
  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const result = await postData('our/vision/mission', '');
        return setGoalForTodayDataData(result.data[0])
      } catch (error) {
        return console.log(error)
      }
    };
    fetchMyData()
  }, []);


  return goalForTodayData && (
    <section id='GoalForToday'>
      <div className="title-header" data-aos="zoom-in" data-aos-duration={1500}>
        <div className="main_title">
          <span className="small_title">{goalForTodayData?.text}</span>
          <h2 className="heading_h2">{goalForTodayData?.title}</h2>
        </div>
      </div>
      <div className='main_container'>
        <div className='left'>
          <img src={vector} alt="img" />
        </div>
        <div className='middle'>
          <div className='icon_Container'>
            {goalForTodayData?.vision_images.map((el, i) => {
              return (
                <div className={`${i === 0 && 'one'} ${i === 1 && 'two'} ${i === 2 && 'three'}`} data-aos={`${i === 1 ? "fade-right" : "fade-left"}`} data-aos-duration={1500}>
                  <img src={el?.image_path} alt="img" />
                  <div className='peregraph_box'>
                    <h2>{el?.title}</h2>
                    <p>
                      {el?.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='right' data-aos="zoom-in" data-aos-duration={1500}>
          <img src={goalForTodayData?.section_image} alt="img" />
        </div>

      </div>

    </section>
  )
}

export default GoalForToday