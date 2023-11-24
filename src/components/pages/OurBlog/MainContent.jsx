import React, { useState, useEffect } from 'react'
import Blogcard from "./BlogCard/Blogcard"
import { postData } from "../../../utils/ApiReq"



const MainContent = () => {

  const [blogData, setBlogData] = useState(null);
  


  //function to call api
  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const result = await postData('blog', JSON.stringify({ search_blog: "" }));
        return setBlogData(result.data)
      } catch (error) {
        return console.log(error)
      }
    };
    fetchMyData()
  }, []);


  return blogData && (
    <div id='BlogMainContent'>
      <div className='cantainer'>

        {
          blogData.map((el, i) => {
            return <Blogcard key={i} data={el} index ={i} />
          })
        }

      </div>
      <div className='loadmore'>
        <button className='loadmore_btn'>
          Load More
        </button>

      </div>
    </div>
  )
}

export default MainContent