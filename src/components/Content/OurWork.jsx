import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Group6 from "../../image/group-6.png"
import Group7 from "../../image/group-7.png"
import Group8 from "../../image/group-8.png"
import Group13 from "../../image/group-13.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { postData } from "../../utils/ApiReq"

const OurWork = () => {
    //the data come from api that saves in this state below
    const [portfolioData, setPortfolioData] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 3;
    const options = {
        center: true,
        loop: true,
        margin: 43,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
        navText:
            [
                `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none">
                <path d="M3.69217 10.685C3.58114 10.6085 3.49035 10.5062 3.42764 10.3869C3.36492 10.2676 3.33215 10.1348 3.33215 9.99999C3.33215 9.86518 3.36492 9.7324 3.42764 9.61307C3.49035 9.49374 3.58114 9.39144 3.69217 9.31499L14.5255 1.81499C14.6505 1.72818 14.7968 1.67727 14.9487 1.6678C15.1005 1.65832 15.2521 1.69065 15.3868 1.76125C15.5216 1.83186 15.6345 1.93806 15.7131 2.06829C15.7918 2.19854 15.8332 2.34784 15.833 2.49999L15.833 17.5C15.8324 17.6518 15.7904 17.8005 15.7115 17.9303C15.6327 18.06 15.52 18.1657 15.3855 18.2362C15.251 18.3066 15.0999 18.3391 14.9484 18.3301C14.7969 18.321 14.6507 18.2709 14.5255 18.185L3.69217 10.685Z" fill="#50296E"/>
              </svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none">
                <path d="M16.3078 10.685C16.4189 10.6085 16.5096 10.5062 16.5724 10.3869C16.6351 10.2676 16.6679 10.1348 16.6679 9.99999C16.6679 9.86518 16.6351 9.7324 16.5724 9.61307C16.5096 9.49374 16.4189 9.39144 16.3078 9.31499L5.47449 1.81499C5.34954 1.72818 5.20318 1.67727 5.05133 1.6678C4.89947 1.65832 4.74793 1.69065 4.61315 1.76125C4.47838 1.83186 4.36553 1.93806 4.28687 2.06829C4.20821 2.19854 4.16675 2.34784 4.16699 2.49999L4.16699 17.5C4.16762 17.6518 4.20962 17.8005 4.28846 17.9303C4.36731 18.06 4.48002 18.1657 4.61449 18.2362C4.74895 18.3066 4.90007 18.3391 5.0516 18.3301C5.20313 18.321 5.34934 18.2709 5.47449 18.185L16.3078 10.685Z" fill="#50296E"/>
                </svg>`
            ]
    };
    // Fetch data when the component mounts
    useEffect(() => {
        const fetchMyData = async () => {
            try {
                const result = await postData('portfolio/list', '');
                return setPortfolioData(result.data)
            } catch (error) {
                return console.log(error)
            }
        };
        //calling the function to get data
        fetchMyData()
    }, []);
    return portfolioData && (
        <section id="our_portfolio" className="mt-110">
            <div className="container">
                <div className="title-header" data-aos="zoom-in" data-aos-duration={1500}>
                    <div className="main_title">
                        <span className="small_title">OUR WORK</span>
                        <h2 className="heading_h2">LOOK AT OUR PORTFOLIO</h2>
                    </div>
                    <a className="btn_talk view-btn" href="#" title="View all services">
                        VIEW ALL SERVICVES
                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                        </span>
                    </a>
                </div>
                <div className="portfolio" data-aos="fade-up" data-aos-duration={1500}>
                    <ul className="dribbble">
                        <li className="pr-24">
                            <img src={Group6} alt="img" />
                        </li>
                        <li>
                            <img src={Group7} alt="img" />
                        </li>
                    </ul>
                    <ul className="review">
                        <li>
                            <img src={Group8} alt="img" />
                        </li>
                        <li className="pl-30">
                            <img src={Group13} alt="img" />
                        </li>
                        <li className="pl-30">
                            <img src={Group8} alt="img" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid g-0">
                <div className="portfolio_slider">
                    <OwlCarousel className='owl-carousel-1 owl-carousel owl-theme' {...options}  >
                        {
                            portfolioData && portfolioData?.map((el, i) => {
                                return (
                                    <div className="item" key={i}>
                                        <div className="portfolio_img" data-aos="fade-up" data-aos-duration={1500}>
                                            <img src={el.image_path} alt="img" className="img-fluid" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                    <div className="slider-counter" >{currentSlide}/{totalSlides}</div>
                </div>
            </div>
        </section>
    )
}
export default OurWork