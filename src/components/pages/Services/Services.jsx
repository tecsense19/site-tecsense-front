import React from 'react';
import Banner from '../Services/Banner';
import QuickLook from "../Services/QuickLook"
import WhyChooseUs from '../Services/WhyChooseUs';
import Fetatures from "../Services/Fetatures";
import BestResults from "../Services/BestResults";
import OurServices from "../Services/OurServices";
import DevlopmentBenefits from "../Services/DevlopmentBenefits";
import Testimonial from "../../Content/ClientSec"



const Services = () => {
  return (
    <>
      <Banner />
      <OurServices />
      <WhyChooseUs />
      <Fetatures />
      <BestResults />
      <QuickLook />
      <DevlopmentBenefits />
      <Testimonial />
    </>
  )
}

export default Services