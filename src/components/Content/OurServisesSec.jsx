import React, { useState, useEffect } from 'react'

import ServicesCard from './ServicesCard'
import shape2 from "../../image/shape-2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { postData } from "../../utils/ApiReq"
import vector1 from "../../image/vector-1.png"

const OurServisesSec = () => {
    //the data come from api that saves in this state below
    const [serviceData, setServiceData] = useState([]);
    //the state blow saves index number of component from dataarry come from api
    const [elementIndex, setelementIndex] = useState(0);





    // Fetch data when the component mounts
    useEffect(() => {
        const fetchMyData = async () => {
            try {
                const result = await postData('services/list', JSON.stringify({
                    search_service: ""
                }));
                return setServiceData(result.data)
            } catch (error) {
                return console.log(error)
            }
        };
        //calling the function to get data
        fetchMyData()
    }, []);




    return serviceData && (
        <section id="services" className="mt-110">
            <div className="container">
                <div className="title-header" data-aos="zoom-in" data-aos-duration={1500}>
                    <div className="main_title">
                        <span className="small_title">WHAT WE DO</span>
                        <h2 className="heading_h2">Our Services</h2>
                    </div>
                    <a className="btn_talk view-btn" href="ht" title="View all services">
                        VIEW ALL SERVICES
                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                        </span>
                    </a>
                </div>
                <div className="services_tabs">
                    <div
                        className="nav flex-column nav-pills me-3"
                        data-aos="fade-up"
                        data-aos-duration={1500}
                    >
                        {/*  loop to render component acording to data from api */}
                        {
                            serviceData.map(
                                (el, i) => {
                                    return (
                                        <button
                                            className={`nav-link aos-init aos-animate ${i === elementIndex ? 'active' : ''}`}

                                            key={el.id}
                                            onClick={
                                                () => {
                                                    setelementIndex(i);
                                                    
                                                }

                                            }

                                        >
                                            <span className="service-icon-1">
                                                <img src={el.service_black_logo} alt="img" />
                                            </span>
                                            <span className="service-icon-2">
                                                <img src={el.service_white_logo} alt="img" />
                                            </span>
                                            <span className="pl-30">{el.service_title}</span>
                                            <div className="vector-img">
                                                <img src={vector1} alt="img" />
                                            </div>
                                        </button>
                                    )
                                }
                            )
                        }

                    </div>
                    {

                    }
                    <div className="tab-content" >
                        {
                            <ServicesCard {...serviceData[elementIndex]} />
                        }
                    </div>
                </div>
            </div>
            <div className="shape-2">
                <img src={shape2} alt="img" />
            </div>
        </section>

    )
}

export default OurServisesSec