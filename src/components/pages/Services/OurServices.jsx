import React, { useState, useEffect } from 'react'


import leftVector from "../../../image/Services/Ellipse 42.png"
import rightVector from "../../../image/Services/Mask group.png"
import Wordpress from "../../../image/Services/6b34d0bb3f18082d45b82b7d2dc6d87a.gif"
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OurServices = () => {
    const [servicedetailData, setServiceDetailData] = useState([]);

    const { id } = useParams();
    const baseURL = "https://localhost/tecsense/api/v1/";
    const axiosInstance = axios.create({
        baseURL,
    });

    const fetchData = async (endpoint, data) => {
        try {
            const response = await axiosInstance.post(endpoint, data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };
    useEffect(() => {
        const fetchMyData = async () => {
            const select_service_id = id;
            try {
                const result = await fetchData('details/list', { select_service: select_service_id });
                return setServiceDetailData(result.data)
            } catch (error) {
                return console.log(error)
            }
        };
        //calling the function to get data
        fetchMyData()
    }, [id]);

    return servicedetailData.ourservice_detail && (
        <div id="OurServices">
            <div className='left'>
                <img src={leftVector} alt="img" />
            </div>
            <div className='middle'>
                {
                    servicedetailData.ourservice_detail.map(
                        (el) => {
                            return (
                                <>
                                    <div className='middleLeft'>
                                        <img src={el.servicedetail_pic} alt="img" />
                                    </div>

                                    <div className='MiddleRight'>
                                        <p>Our Services</p>
                                        <h2>{el.service_detail_title}</h2>
                                        <ul>
                                            {el.service_detail_images.map((el, index) => {
                                                return(
                                                <div key={index}>
                                                    <svg xmlns={el.image_path} width="20" height="15" viewBox="0 0 20 15" fill="none">
                                                        <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_1542)" />
                                                        <defs>
                                                            <linearGradient id="paint0_linear_785_1542" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#893269" />
                                                                <stop offset="1" stop-color="#4F2A6E" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg><li>{el.title}</li>
                                                </div>
                                                )
                                            })}
                    {/* <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                        <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_1542)" />
                        <defs>
                          <linearGradient id="paint0_linear_785_1542" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#893269" />
                            <stop offset="1" stop-color="#4F2A6E" />
                          </linearGradient>
                        </defs>
                      </svg><li>WordPress Ecommerce/ WooCommerce</li>
                    </div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                        <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_1542)" />
                        <defs>
                          <linearGradient id="paint0_linear_785_1542" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#893269" />
                            <stop offset="1" stop-color="#4F2A6E" />
                          </linearGradient>
                        </defs>
                      </svg><li>PSD to WordPress integration</li>
                    </div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                        <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_1542)" />
                        <defs>
                          <linearGradient id="paint0_linear_785_1542" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#893269" />
                            <stop offset="1" stop-color="#4F2A6E" />
                          </linearGradient>
                        </defs>
                      </svg><li>WordPress Theme Development</li>
                    </div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                        <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_1542)" />
                        <defs>
                          <linearGradient id="paint0_linear_785_1542" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#893269" />
                            <stop offset="1" stop-color="#4F2A6E" />
                          </linearGradient>
                        </defs>
                      </svg><li>Plugin Development</li>
                    </div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                        <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_1542)" />
                        <defs>
                          <linearGradient id="paint0_linear_785_1542" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#893269" />
                            <stop offset="1" stop-color="#4F2A6E" />
                          </linearGradient>
                        </defs>
                      </svg><li>Blogging Solutions</li>
                    </div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                        <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_1542)" />
                        <defs>
                          <linearGradient id="paint0_linear_785_1542" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#893269" />
                            <stop offset="1" stop-color="#4F2A6E" />
                          </linearGradient>
                        </defs>
                      </svg><li>Maintenance and Support</li>
                    </div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                        <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_1542)" />
                        <defs>
                          <linearGradient id="paint0_linear_785_1542" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#893269" />
                            <stop offset="1" stop-color="#4F2A6E" />
                          </linearGradient>
                        </defs>
                      </svg><li>WordPress Customization</li>
                    </div> */}

                                        </ul>
                                    </div>
                                </>
                            )
                        }
                    )
                }
            </div>
            <div className='right'>
                <img src={rightVector} alt="" />
            </div>
        </div>
    )
}

export default OurServices