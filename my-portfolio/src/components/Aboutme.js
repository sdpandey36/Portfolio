import React from 'react'
import Profile from "./profile2.png"
import { forwardRef } from 'react'
import { useRef } from 'react'

const  Aboutme = ((props,ref) => {
  return (
<div className="aboutme" ref={ref} >
    <div className="left_container grid">
        <div className="head">About Me</div>
        <div className="about-desc">Visual Designer & Front-End Developer,</div>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iste harum recusandae nam laudantium reiciendis sapiente, quas voluptatum ipsam mollitia asperiores provident totam fugiat aspernatur! Voluptate, fuga commodi obcaecati fugiat consectetur nulla officiis enim natus aliquam possimus, amet laboriosam in, dolor repudiandae quos. Aperiam maxime quia autem numquam delectus molestiae, deleniti tenetur eaque, necessitatibus, quis asperiores. Libero, molestiae. Hic dolor voluptatibus sequi esse distinctio, excepturi porro, quisquam illum possimus consequuntur aliquam eveniet numquam dolorum maxime et, cum quibusdam facere quaerat atque. Totam minus voluptatibus sunt sed accusantium ea beatae autem culpa ipsum corporis! Fugit, inventore. Quibusdam natus quas nihil doloremque.
    <div className="btnabout">
    <button className='btn btnhire'>Hire Me</button>
   <button className='btn'>Download CV</button>
    </div>
    </div>
    <div className="right_container grid">
        <img src={Profile}></img>
       

    </div>

</div>
  )
})

export default forwardRef(Aboutme)