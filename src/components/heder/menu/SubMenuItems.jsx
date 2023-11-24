import React from 'react'
import ArrowRightCircle from "./../../../image/arrow-right-circle.png"

const SubMenuItems = ({ title, imgurl1, imgurl2 , onMouseEnter}) => {
    return (
        <li onMouseEnter={onMouseEnter} >
            <a href="javascript:void(0)">
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