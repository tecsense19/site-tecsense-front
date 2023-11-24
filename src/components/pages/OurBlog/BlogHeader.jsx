import React from 'react'
import blogHeaderImg from "../../../image/OurBlog/Frame.png"

const BlogHeader = () => {
    return (
        <div id='Blog_header'>
            <div className='blogheaderTitle'>
                <h2>
                    Blog Details
                </h2>
                <p>
                    Home / Blog
                </p>
            </div>
            <div className='blogheaderImg'>
                <img src={blogHeaderImg} alt="img" />
            </div>
        </div>
    )
}

export default BlogHeader