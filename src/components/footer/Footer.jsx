import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FooterLogo from "../../image/footer-logo.png"
import CalendyLogo from "../../image/calendly-Logo.png"
import WhatsappLogo1 from "../../image/whatsapp1.png"
import { postData } from '../../utils/ApiReq'





const Footer = () => {

    const [footerData, setFooterData] = useState(null);


    //function to call api
    useEffect(() => {
        const fetchMyData = async () => {
            try {
                const result = await postData('footer/menu', '');
                return setFooterData(result.data)
            } catch (error) {
                return console.log(error)
            }
        };
        fetchMyData()
    }, []);



    //navigation handler to handle navihgtion

    const navigateHandler = {
        WhoWeAre: (e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return navigate("/who-we-are")
        },
        PortFolio: (e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return navigate("/portfolio")
        },
        Blog: (e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return navigate("/our-Blog")
        },
        Services: (e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return navigate("/services")
        },
        WhatWeOffer: (e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return navigate("/what-we-offer")

        },
        AboutUs: (e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return navigate("/about-us")

        }
    }

    const navigate = useNavigate()
    return footerData && (
        <footer id="footer">
            <div className="container">
                <div className="row g-0">
                    <div className="col-md-6 col-lg-4 footer_ipad">
                        <div className="footer_nav">
                            <img src={FooterLogo} alt="img" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="footer_nav">
                            {/* TECHNOLOGY LINKS SECTION ARRAY DIVIDED IN TWO CLUMN DUE TO STYLING */}

                            {/* LEFT SIDE COLUMN */}
                            <h3>{footerData[0].title}</h3>
                            <div className="footer_inter_link">
                                <ul className="pr-29">
                                    {footerData[0].footer_menus.slice(0, 5).map((el, i) => {
                                        return (
                                            <li key={i}>
                                                <a href={el.menu_link} title={el.menu_title}>
                                                    <img src={el.image_path} alt={el.menu_title} /> {el.menu_title}
                                                </a>
                                            </li>
                                        )
                                    })}

                                </ul>
                                <ul>
                                    {/* RIGHT SIDE COLUMN*/}
                                    {footerData[0].footer_menus.slice(5, 10).map((el, i) => {
                                        return (
                                            <li key={i}>
                                                <a href={el.menu_link} title={el.menu_title}>
                                                    <img src={el.image_path} alt={el.menu_title} /> {el.menu_title}
                                                </a>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* DUE TO SAME STYLING SERVISES AND HIRE DEVELOPERS LINK SECTION ITRATED FROM SINGLE MAP LOOP */}
                    {
                        footerData.slice(1, 3).map((el, i) => {
                            return (<div className="col-md-6 col-lg-4" key={i}>
                                <div className="footer_nav">
                                    <h3>{el.title}</h3>
                                    <div className="footer_inter_link">
                                        <ul>
                                            {/* LINKS ITRETED FROM BOTH SECTION  */}
                                            {
                                                el.footer_menus.map((el, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <a href={el.menu_link} title={el.menu_title}>
                                                                <img src={el.image_path} alt={el.menu_title} /> {el.menu_title}
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                    <hr className="d-none d-lg-block" />
                    <div className="col-md-6 col-lg-4 footer_desktop">
                        <div className="footer_nav">
                            <img src={FooterLogo} alt="img" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="footer_nav">

                            {/* CONTACT DETAIL SECTION */}
                            <h3>{footerData.title}</h3>
                            <div className="footer_inter_link footer_contact_details">
                                <ul>

                                    {/* ADDRESS ITRETED SEPRETELY DUE TO DIFFRENT STYLING */}
                                    <li>
                                        <span>
                                            <img src={footerData[3].footer_menus[0].image_path} alt="img" />
                                        </span>
                                        <span>
                                            {
                                                footerData[3].footer_menus[0].menu_title
                                            }
                                        </span>
                                    </li>

                                    {/* EMAIL AND CONTACT BOTH ITRETED FROM SAME MAP LOOP DUE TO SAME STYLING */}
                                    {
                                        footerData[3].footer_menus.slice(1, 3).map((el, i) => {
                                            return <li key={i}>
                                                <a href={el.menu_title} title={el.menu_title}>
                                                    <img src={el.image_path} alt={el.menu_title} />{el.menu_title}
                                                </a>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 ">
                        <div className="footer_nav">
                            <h3>{footerData[4].title}</h3>
                            <div className="social_icon">

                                {/* SOCIAL ICONS SECTION */}
                                <ul>
                                    {
                                        footerData[4].footer_menus.map((el, i) => {
                                            return (
                                                <li key={i}>
                                                    <a href={el.menu_link
                                                    } title={el.menu_title
                                                    }>
                                                        <img src={el.image_path} alt={el.menu_title
                                                        } />
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="col-lg-12">
                        <div className="copyright">
                            <ul className="inner-page-link">
                                <li>
                                    <a href="#" title="About Us" onClick={navigateHandler.AboutUs}>
                                        About Us
                                    </a>
                                </li>
                                <li >
                                    <a href="#" title="Who we are" onClick={navigateHandler.WhoWeAre}>
                                        Who we are
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="What we offer" onClick={navigateHandler.WhatWeOffer}>
                                        What we offer
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Services" onClick={navigateHandler.Services}>
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Portfolio" onClick={navigateHandler.PortFolio}>
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Blog" onClick={navigateHandler.Blog}>
                                        Blog
                                    </a>
                                </li>
                            </ul>
                            <ul className="copyright_text">
                                <li>
                                    <a href="#" title="Terms of Use">
                                        Terms of Use
                                    </a>{" "}
                                    |{" "}
                                    <a href="#" title="Privacy Policy">
                                        Privacy Policy
                                    </a>{" "}
                                    |{" "}
                                    <a href="#" title="Disclaimer">
                                        Disclaimer
                                    </a>
                                </li>
                                <li>© Copyright © 2023 Tecsense All Rights Reserved.</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="following_icon">
                <li>
                    <a href="#">
                        <img src={CalendyLogo} alt="img" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={WhatsappLogo1} alt="img" />
                    </a>
                </li>
            </div>
        </footer>

    )
}

export default Footer