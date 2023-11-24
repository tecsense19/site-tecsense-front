import React, { useState, useEffect } from 'react'
import imgframe from "../../../image/Services/Frame (1).png"
import { useParams } from 'react-router-dom';
import axios from 'axios';

const WhyChooseUs = () => {
  const [whychoosedetailData, setWhyChooseDetailData] = useState([]);
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
                console.log(result.data);
                return setWhyChooseDetailData(result.data)
            } catch (error) {
                return console.log(error)
            }
        };
        //calling the function to get data
        fetchMyData()
    }, [id]);
  return whychoosedetailData.whychoose_detail &&(
    <div id='WhyChooseUs'>
        {whychoosedetailData.whychoose_detail.map(
          (el) => {
          return(
            <>
      <div className="left">
        <div className="main_title">
          <span className="small_title">WHY CHOOSE US</span>
          <h2 className="heading_h2">{el.why_choose_detail_title}</h2>
        </div>
        <div className='pera_container'>
          <p>
            {el.why_choose_detail_description}
          </p>
        </div>
        <div className='licontainer'>
          <ul>
            <div className='top'>
          {el.why_choose_detail_images.map((el, index) => {
            return(
              <div>
                <svg xmlns={el.image_path} width="20" height="15" viewBox="0 0 20 15" fill="none">
                  <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_960)" />
                  <defs>
                    <linearGradient id="paint0_linear_785_960" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#893269" />
                      <stop offset="1" stop-color="#4F2A6E" />
                    </linearGradient>
                  </defs>
                </svg>
                <li>{el.title}</li>
              </div>
              )
            })}
              {/* <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                  <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_960)" />
                  <defs>
                    <linearGradient id="paint0_linear_785_960" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#893269" />
                      <stop offset="1" stop-color="#4F2A6E" />
                    </linearGradient>
                  </defs>
                </svg>
                <li>Cost-Effective</li>
              </div> */}
            </div>
            {/* <div className='bottom'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                  <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_960)" />
                  <defs>
                    <linearGradient id="paint0_linear_785_960" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#893269" />
                      <stop offset="1" stop-color="#4F2A6E" />
                    </linearGradient>
                  </defs>
                </svg>
                <li>SEO-friendly</li>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                  <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_960)" />
                  <defs>
                    <linearGradient id="paint0_linear_785_960" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#893269" />
                      <stop offset="1" stop-color="#4F2A6E" />
                    </linearGradient>
                  </defs>
                </svg>
                <li>User-Friendly</li>
              </div>
            </div> */}

          </ul>
        </div>
        
      </div>
      <div className="right">
        <img src={el.why_choose_detail_pic} alt="" />
      </div>
      </>
        )
        }
        )}

    </div>
  );
};




export default WhyChooseUs



