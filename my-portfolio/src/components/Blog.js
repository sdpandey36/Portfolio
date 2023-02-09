import React from 'react'
import rolex from "./rolex.webp"
import mobile from "./mobile.jpg"
import apple from "./apple.jpg"
import {BsArrowRight} from "react-icons/bs"
import {BsPencil} from "react-icons/bs"
import {FaComments} from "react-icons/fa"
import { forwardRef } from 'react'

function Blog(props,ref) {
  return (
    <>
    <div  ref={ref} className="blog">
         <div className="upper_part">
            <h2>Our Blog</h2>
            <p>I love what I do. I take great pride in what I do.</p>
        </div>
        <div className="lower_part_blog">
            <div className="blog_content">
                <div className="img"><img src={apple}/></div>
                <div className="blog_info">
                    <span><BsPencil className='blog_icon'/>By:Shisir   |</span>
                    <span><FaComments className='blog_icon'/> 0 comment</span>
                </div>
                <div className="blog_title">Lorem ipsum dolor sit.</div>
                <div className="blog_desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione molestiae est harum soluta consectetur nemo facere dicta tempore dolorum labore.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, velit.</div>
                <div className="readmore">Read More <BsArrowRight/></div>

            </div>  
            <div className="blog_content">
                <div className="img"><img src={mobile}/></div>
                <div className="blog_info">
                <span><BsPencil className='blog_icon'/>By:Shisir   |</span>
                    <span><FaComments className='blog_icon'/> 0 comment</span>
                </div>
                <div className="blog_title">Lorem ipsum dolor sit.</div>
                <div className="blog_desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione molestiae est harum soluta consectetur nemo facere dicta tempore dolorum labore.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, velit.</div>
                <div className="readmore">Read More <BsArrowRight/></div>

            </div> 
             <div className="blog_content">
                <div className="img"><img src={rolex}/></div>
                <div className="blog_info">
                <span><BsPencil className='blog_icon'/>By:Shisir   |</span>
                    <span><FaComments className='blog_icon'/> 0 comment</span>
                </div>
                <div className="blog_title">Lorem ipsum dolor sit.</div>
                <div className="blog_desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione molestiae est harum soluta consectetur nemo facere dicta tempore dolorum labore.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, velit.</div>
                <div className="readmore">Read More <BsArrowRight/></div>

            </div>
        </div>
        </div>
    </>
  )
}

export default forwardRef(Blog)