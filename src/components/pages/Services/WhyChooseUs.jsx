import React from 'react'
// import imgframe from "../../../image/Services/Frame (1).png"
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { baseURL, relativeURL } from '../APIS'; 
// import Rectangle from '../../../image/Services/Rectangle 1624.png'
// import Frame from "../../../image/Services/Frame.png"

const WhyChooseUs = ({whychoosedetailData}) => {
  // const tempArray = ["Reliability", "Cost-Effective", "Seo-Friendly", "User-Friendly"]
  // const [whychoosedetailData, setWhyChooseDetailData] = useState({});
  // const { id } = useParams();
  // const baseURL = "https://localhost/tecsense/api/v1/";
  // const axiosInstance = axios.create({
  //     baseURL,
  // });

  // const fetchData = async (endpoint, data) => {
  //     try {
  //         const response = await axiosInstance.post(endpoint, data);
  //         return response.data;
  //     } catch (error) {
  //         console.error('Error fetching data:', error);
  //         throw error;
  //     }
  // };
  // useEffect(() => {
  //   const fetchMyData = () => {
  //     const select_service_id = id;
  //     const data = { select_service: select_service_id }
  //     axios.post(baseURL+relativeURL.servicePath, data).then((res) => {
  //       if(res.data.data.whychoose_detail){
  //         setWhyChooseDetailData(res.data.data.whychoose_detail)
  //       }
  //     }).catch((err) => console.log(err))
  //     // try {
  //     //     const result = await fetchData('details/list', { select_service: select_service_id });
  //     //     console.log(result.data);
  //     //     return setWhyChooseDetailData(result.data)
  //     // } catch (error) {
  //     //     return console.log(error)
  //     // }
  //   };
  //   //calling the function to get data
  //   fetchMyData()
  // }, [id]);
  // return whychoosedetailData.whychoose_detail && (
  //   <div id='WhyChooseUs'>
  //       {whychoosedetailData.whychoose_detail.map(
  //         (el) => {
  //         return(
  //           <>
  //     <div className="left">
  //       <div className="main_title">
  //         <span className="small_title">WHY CHOOSE US</span>
  //         <h2 className="heading_h2">{el.why_choose_detail_title}</h2>
  //       </div>
  //       <div className='pera_container'>
  //         <p>
  //           {el.why_choose_detail_description}
  //         </p>
  //       </div>
  //       <div className='licontainer'>
  //         <ul>
  //           <div className='top'>
  //         {el.why_choose_detail_images.map((el, index) => {
  //           return(
  //             <div>
  //               <svg xmlns={el.image_path} width="20" height="15" viewBox="0 0 20 15" fill="none">
  //                 <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_960)" />
  //                 <defs>
  //                   <linearGradient id="paint0_linear_785_960" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
  //                     <stop stop-color="#893269" />
  //                     <stop offset="1" stop-color="#4F2A6E" />
  //                   </linearGradient>
  //                 </defs>
  //               </svg>
  //               <li>{el.title}</li>
  //             </div>
  //             )
  //           })}
  //             {/* <div>
  //               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
  //                 <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_960)" />
  //                 <defs>
  //                   <linearGradient id="paint0_linear_785_960" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
  //                     <stop stop-color="#893269" />
  //                     <stop offset="1" stop-color="#4F2A6E" />
  //                   </linearGradient>
  //                 </defs>
  //               </svg>
  //               <li>Cost-Effective</li>
  //             </div> */}
  //           </div>
  //           {/* <div className='bottom'>
  //             <div>
  //               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
  //                 <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_960)" />
  //                 <defs>
  //                   <linearGradient id="paint0_linear_785_960" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
  //                     <stop stop-color="#893269" />
  //                     <stop offset="1" stop-color="#4F2A6E" />
  //                   </linearGradient>
  //                 </defs>
  //               </svg>
  //               <li>SEO-friendly</li>
  //             </div>
  //             <div>
  //               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
  //                 <path d="M5 0H20L15 15H0L5 0Z" fill="url(#paint0_linear_785_960)" />
  //                 <defs>
  //                   <linearGradient id="paint0_linear_785_960" x1="0" y1="7.5" x2="20" y2="7.5" gradientUnits="userSpaceOnUse">
  //                     <stop stop-color="#893269" />
  //                     <stop offset="1" stop-color="#4F2A6E" />
  //                   </linearGradient>
  //                 </defs>
  //               </svg>
  //               <li>User-Friendly</li>
  //             </div>
  //           </div> */}

  //         </ul>
  //       </div>
        
  //     </div>
  //     <div className="right">
  //       <img src={el.why_choose_detail_pic} alt="" />
  //     </div>
  //     </>
  //       )
  //       }
  //       )}

  //   </div>
  // );
  return (
    <>
      { Object.keys(whychoosedetailData).length
        ? <section className='mt-110'> {/* id='WhyChooseUs' */}
            <div className="container WhyChooseUs_Container">
              <div className="flex">
                <div className='middle'>
                  <div className="main_title" data-aos="zoom-in" data-aos-duration={1500}>
                    <span className="small_title">WHY CHOOSE US</span>
                    <h2 className="heading_h2">{whychoosedetailData.why_choose_detail_title}</h2>
                  </div>
                  <div className='peregraph_div mx-0'>
                    <span className='whyChooseUsDesc' data-aos="fade-up" data-aos-duration={1500}>
                      {whychoosedetailData.why_choose_detail_description}
                    </span>
                    <div className='list_icons'>
                      <div className='list_icons_left' data-aos="fade-right" data-aos-duration={1500}>
                        <ul>
                          {whychoosedetailData.why_choose_detail_images?.slice(0,2)?.map((el, i) => {
                            return (
                              <li key={i} className='heading_h3'><img src={el.image_path} alt="img" /> {el.title}</li>
                            )
                          })}
                        </ul>
                      </div>
                      <div className='list_icons_right' data-aos="fade-left" data-aos-duration={1500}>
                        <ul>
                          {whychoosedetailData.why_choose_detail_images?.slice(2,4)?.map((el, i) => {
                            return (
                              <li key={i} className='heading_h3'><img src={el.image_path} alt="img" /> {el.title}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='left' data-aos="fade-left" data-aos-duration={1500}>
                  <img className='whyChooseUsImg' src={whychoosedetailData.why_choose_detail_pic} alt="img" />
                </div>
              </div>
            </div>
          </section>
        : <></>
      }
    </>
  )
};

export default WhyChooseUs