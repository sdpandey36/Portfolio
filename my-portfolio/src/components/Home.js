import React from 'react'
import Navbar from './Navbar' 
import { SocialIcon } from 'react-social-icons';
import { forwardRef } from 'react';

const Home = (props,ref) => {
  return (
    <>
  <div ref={ref} className="home-container">
    <div className="main-body">I'm Shreedhar Pandey.</div>
    <div className="describe">Creative Designer & Developer located in Nepal.</div>
    <div className="specialized">
        <div className="static_text">Specialized in </div> 
              <ul className="dynamic_text">
                <li><span> Developer...</span></li>
                <li><span> Designing UI/UX...</span></li>
                <li><span> Freelancer...</span></li>
                </ul>
        </div>
    <div className="link">
        <SocialIcon className='socialMedia' url="https://twitter.com/" style={{height:"40px",width:"40px" ,marginRight:"10px"}}/> 
        <SocialIcon className='socialMedia' url="https://facebook.com/"style={{height:"40px",width:"40px",marginRight:"10px"}} /> 
        <SocialIcon className='socialMedia' url="https://instagram.com/"style={{height:"40px",width:"40px",marginRight:"10px"}} />
        <SocialIcon className='socialMedia' url="https://google.com/" style={{height:"40px",width:"40px",marginRight:"10px"}}/>

    </div>
  </div>
    </>
  )
}

export default forwardRef(Home)