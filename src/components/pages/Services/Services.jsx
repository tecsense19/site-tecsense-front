import React, { useEffect, useState } from 'react';
import Banner from '../Services/Banner';
import QuickLook from "../Services/QuickLook"
import WhyChooseUs from '../Services/WhyChooseUs';
import Fetatures from "../Services/Fetatures";
import BestResults from "../Services/BestResults";
import OurServices from "../Services/OurServices";
import DevlopmentBenefits from "../Services/DevlopmentBenefits";
import Testimonial from "../../Content/ClientSec"
import { useParams } from 'react-router-dom'
import { baseURL, relativeURL } from '../APIS'; 
import axios from 'axios';

const Services = () => {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState({})

  useEffect(() => {
    const fetchMyData = () => {
      const select_service_id = id;
      const data = { select_service: select_service_id }
      axios.post(baseURL + relativeURL.servicePath, data).then((res) => {
        if(res.data.success){
          setServiceData(res.data.data)
        }
      }).catch((err) => console.log(err))
    };
    //calling the function to get data
    fetchMyData()
  }, [id]);

  return (
    <>
      <Banner />
      { Object.keys(serviceData).length
        ? <>
            <OurServices servicedetailData={serviceData.ourservice_detail} />
            <WhyChooseUs whychoosedetailData={serviceData.whychoose_detail} />
            <Fetatures featuredetailData={serviceData.features_detail} />
            <BestResults bestResultDetailData={serviceData.best_detail_detail} />
            <QuickLook quickLookDetailData={serviceData.quick_look_detail} />
            <DevlopmentBenefits developmentBenefitsDetailData={serviceData.business_detail} />
          </>
        : <></>
      }
      <Testimonial />
    </>
  )
}

export default Services