import React from 'react'
import ArrowRightCircle from "./../../../image/arrow-right-circle.png"
import { useNavigate } from 'react-router-dom'

const SubMenuItems = ({ title, imgurl1, imgurl2 , onMouseEnter, serviceId}) => {
    const navigate = useNavigate()
    return (
        <li onMouseEnter={onMouseEnter} >
            <a href="*" onClick={(e) => {
                e.preventDefault(); 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
                serviceId ? navigate(`/services/${serviceId}`) : <></>
            }}>
                <span>
                    <img src={imgurl1} className="mega-icon1" />
                    <img src={imgurl2} className="mega-icon" /> {title}
                </span>
                <span className="arrow-right-circle">
                    <img src={ArrowRightCircle} alt="img" />
                </span>

            </a>
        </li>

    )
}

export default SubMenuItems