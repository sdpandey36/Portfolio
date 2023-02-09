import React from 'react'
import himal from "./himal.jpg"
import mountain from "./mountain.jpg"
import sushan from "./sushan.jpg"
import dipesh from "./dipesh.jpg"
import { forwardRef } from 'react'

const Testimonial = (props,ref) => {
  return (
    <>

   <div ref={ref} className="testmonial_upper_part">
    
    <div className='content'>
    <div className="img"><img src={himal}/></div>
    <div className="name"><h4>Himal Neupane</h4></div>
    <div className="bio">Mobile App Developer</div>
    <div className="bio_desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sint consectetur corporis, necessitatibus, iste nesciuus natus minus aut sunt?</div>
    </div>
     <div className='content'>
    <div className="img"><img src={sushan}/></div>
    <div className="name"><h4>Sushan Sen</h4></div>
    <div className="bio">Web Developer</div>
    <div className="bio_desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sint consectetur corporis, necessitatibus, iste nesciuus natus minus aut sunt?</div>
    </div> 
     <div className='content'>
    <div className="img"><img src={dipesh}/></div>
    <div className="name"><h4>Dipesh Adhikari</h4></div>
    <div className="bio">.Net Developer</div>
    <div className="bio_desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sint consectetur corporis, necessitatibus, iste nesciuus natus minus aut sunt?</div>
    </div>
   </div>

   <div className="testmonial_lower_part"></div>
   </>
  )
}

export default forwardRef(Testimonial)