import React, { useState, useEffect } from 'react'
import ExpertIconCard from './ExpertIconCard'

import { postData } from '../../utils/ApiReq'
import shape3 from "../../image/shape-3.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DedicatedExpert = () => {

    const [experienceData, setExperienceData] = useState(null);


    //function to call api
    useEffect(() => {
        const fetchMyData = async () => {
            try {
                const result = await postData('expert/list', '');
                return setExperienceData(result.data)
            } catch (error) {
                return console.log(error)
            }
        };
        fetchMyData()
    }, []);




    return experienceData && (
        <section id="dedicated" className="mt-110">
            <div className="container">
                <div className="title-header" data-aos="zoom-in" data-aos-duration={1500}>
                    <div className="main_title">
                        <span className="small_title">HIRE DEVELOPERS</span>
                        <h2 className="heading_h2">{experienceData?.[0]?.title}</h2>
                    </div>
                    <a className="btn_talk" title="Let’s Talk Now" href="!#">
                        Let’s Talk Now
                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                        </span>
                    </a>
                </div>
                <p className="p_text" data-aos="fade-up" data-aos-duration={1500}>
                    {experienceData?.[0]?.description}
                </p>
                <div className="row justify-content-center g-4">
                    {experienceData && experienceData?.[0]?.expert_images?.map((el, i) => { return <ExpertIconCard title={el.title} imgUrl={el.image_path} key={i} /> })}

                </div>
            </div>
            <div className="shape-3">
                <img src={shape3} alt="img" />
            </div>
        </section>

    )
}

export default DedicatedExpert