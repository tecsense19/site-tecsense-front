import React, { useRef, useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from './Card';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { postData } from '../../../../utils/ApiReq';

const Slider = () => {
    //the data come frome api that stores in state below
    const [memberData, setMemberData] = useState(null);

    //function to call api
    useEffect(() => {
        const fetchMyData = async () => {
            try {
                const result = await postData('our/team', '');
                return setMemberData(result.data[0])
            } catch (error) {
                return console.log(error)
            }
        };
        fetchMyData()
    }, []);


    const carouselRef = useRef(null);

    const handlePrevClick = () => {
        carouselRef.current.prev();
    };

    const handleNextClick = () => {
        carouselRef.current.next();
    };


    const carouselOptions = {
        items: 4, // Number of items to display by default
        responsive: {
            0: {
                items: 1, // On screens less than 576px wide, display 1 item

            },
            576: {
                items: 2, // On screens 576px and wider, display 2 items
            },
            768: {
                items: 3, // On screens 768px and wider, display 3 items
            },
            992: {
                items: 4, // On screens 992px and wider, display 4 items (the default)
            },
        },
    };


    return memberData && (
        <section id='OurExperianceTeam' >

            <div className='slider_top'>
                <div className="title-header " data-aos="zoom-in" data-aos-duration={1500}>
                    <div className="main_title ">
                        <span className="small_title">{memberData?.text}</span>
                        <h2 className="heading_h2">{memberData?.title}</h2>
                    </div>
                </div>
                <div className=' btn_nxt_pre'>
                    <button onClick={handlePrevClick} className="custom-prev-button btn owl-prev">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
                    </button>
                    <button onClick={handleNextClick} className="custom-next-button btn owl-next">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                    </button>
                </div>
            </div>

            <div className='slider' data-aos="zoom-in" data-aos-duration={1500}>
                <OwlCarousel {...carouselOptions} ref={carouselRef} >
                    {
                        memberData.team_images.map((el, i) => {
                            return (
                                <Card data={el} key={i} />
                            )
                        })
                    }


                </OwlCarousel>
            </div>
        </section>
    )
}

export default Slider
