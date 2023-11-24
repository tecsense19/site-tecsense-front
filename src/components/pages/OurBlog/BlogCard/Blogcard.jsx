import React from 'react'
import User from "../../../../image/OurBlog/user 1.png"
import Calender from "../../../../image/OurBlog/calendar-silhouette 1.png"
import { useNavigate } from 'react-router-dom'


const Blogcard = ({ data, index }) => {

    const navigate = useNavigate()

    //function to format date which is comming from api
    function formatDate(dateStr) {
        const inputDate = new Date(dateStr);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return inputDate.toLocaleDateString('en-US', options)
            .replace(/(\w+)\s(\d+),\s(\d+)/, function (_, month, day, year) {
                return month.toUpperCase() + ' ' + day + ', ' + year;
            });
    }

    const navigationHandler = (e) => {
        e.preventDefault()
        navigate(`${index}`)

    }

    return (
        <div className="blogcard">
            <div className="top">
                <img src={data.blog_image} alt="img" />
            </div>
            <div className="middle">
                <div className="left">
                    <img src={User} alt="" />
                    <p>BY ADMIN</p>
                </div>
                <div className="divider" />
                <div className="right">
                    <img src={Calender} alt="" />
                    <p>{formatDate(data.created_at)}</p>
                </div>
            </div>
            <div className="bottom">
                <h2 className='heading'>
                    {data.blog_title}
                </h2>
                <div className='devider' />
                <div>
                    <a href="" onClick={navigationHandler}>
                        READ MORE

                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 18 16" fill="none">
                            <path d="M17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928933C10.9526 0.538409 10.3195 0.538409 9.92893 0.928933C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM-8.74228e-08 9L17 9L17 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#232323" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Blogcard