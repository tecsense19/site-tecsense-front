import React, {useState, useEffect} from 'react'
import icon1 from "../../../image/Services/Group 1.png"
import icon2 from "../../../image/Services/Group 2.png"
import icon3 from "../../../image/Services/Group 3.png"

import one from "../../../image/Services/one.png"
import two from "../../../image/Services/two (2).png"
import three from "../../../image/Services/three.png"
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Fetatures = () => {
  const [featuredetailData, setFeatureDetailData] = useState([]);
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
            // console.log(result.data);
            return setFeatureDetailData(result.data)
        } catch (error) {
            return console.log(error)
        }
    };
    //calling the function to get data
    fetchMyData()
  }, [id]);
  
  return featuredetailData.features_detail&&(
    <div id='fetatures'>
      {
        featuredetailData.features_detail.map(
          (el) => {
            return (
       <>
      <div className="main_title">
        <span className="small_title">fETATURES</span>
        <h2 className="heading_h2">{el.text}</h2>
      </div>
      <div className='fetaturesCantainer'>
        {/* {el.features_detail_images.map((el, index) => {
        return(
          <div className="fetaturesCard">
            <div className='fetaturesTitleBox'>
              <div className='fetaturesiconbox'>
                <img src={icon1} alt="img" />
              </div>
              <h2>Better SEO rankings</h2>
            </div>
            <div className='fetaturesPeraBox'>
              <p>
                To ensure that your website ranks, we use all cutting-edge SEO strategies for WordPress, including speed and performance optimization.
              </p>
            </div>
            <div className='seqbox'>
              <img src={one} alt="" />
            </div>
          </div>
        )
        })} */}
        <div className="fetaturesCard">
            <div className='fetaturesTitleBox'>
              <div className='fetaturesiconbox'>
                <img src={icon1} alt="img" />
              </div>
              <h2>Better SEO rankings</h2>
            </div>
            <div className='fetaturesPeraBox'>
              <p>
                To ensure that your website ranks, we use all cutting-edge SEO strategies for WordPress, including speed and performance optimization.
              </p>
            </div>
            <div className='seqbox'>
              <img src={one} alt="" />
            </div>
          </div>
        <div className="fetaturesCard">
          <div className='fetaturesTitleBox'>
            <div className='fetaturesiconbox'>
              <img src={icon2} alt="img" />
            </div>
            <h2>Better SEO rankings</h2>
          </div>
          <div className='fetaturesPeraBox'>
            <p>
              To ensure that your website ranks, we use all cutting-edge SEO strategies for WordPress, including speed and performance optimization.
            </p>
          </div>
          <div className='seqbox'>
            <img src={two} alt="" />
          </div>
        </div>
        <div className="fetaturesCard">
          <div className='fetaturesTitleBox'>
            <div className='fetaturesiconbox'>
              <img src={icon3} alt="img" />
            </div>
            <h2>Better SEO rankings</h2>
          </div>
          <div className='fetaturesPeraBox'>
            <p>
              To ensure that your website ranks, we use all cutting-edge SEO strategies for WordPress, including speed and performance optimization.
            </p>
          </div>
          <div className='seqbox'>
            <img src={three} alt="" />
          </div>
        </div>
      </div>
      </>
        )
        }
      )}
    </div>
  )
}

export default Fetatures