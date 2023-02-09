import React, { useState} from 'react'
import { forwardRef } from 'react';
import Logo from "./logo2.png";
import { Button } from 'antd';
const Navbar = (props,ref) => {

    const[fix,setFix]=useState(false);
    
    const setFixed=()=>{
        if(window.scrollY>96){
            setFix(true)
        }
        else{
            setFix(false)
        }
    }
    window.addEventListener("scroll",setFixed);
    console.log(window.scrollY)


    // Use of Useref for scroll.
    
    
   
    const scrollChange=(elementRef)=>{
        window.scrollTo({
            top:elementRef.current.offsetTop,
            behavior:"smooth"
        });
    };



  return (
    
//    <div className="nav_container">
  <div className={fix ? "sticky_navbar " : "nav_container"}> 
    <div className="logo">Logo</div>
    
        <ul className="middleNav">
            <li onClick={()=>scrollChange(ref.ref1)}>Home</li>
            <li  onClick={()=>scrollChange(ref.ref2)}>About</li>
            <li  onClick={()=>scrollChange(ref.ref3)} > Service</li>
            <li onClick={()=>scrollChange(ref.ref4)}>Portfolio</li>
            <li onClick={()=>scrollChange(ref.ref5)}>Testimonial</li>
            <li onClick={()=>scrollChange(ref.ref6)}>Blog</li>
            <li onClick={()=>scrollChange(ref.ref7)}>Contact</li>
        </ul>

    <div className="logRegister">
       
        <button className="btn">Login</button>
    </div>
   </div>
  )
}

export default forwardRef(Navbar)
