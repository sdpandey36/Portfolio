import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import {FaPenFancy} from "react-icons/fa"
import {BsGraphUp} from "react-icons/bs"
import {SlGraph} from "react-icons/sl"
import {GrSupport} from "react-icons/gr"
import {FaPencilRuler} from "react-icons/fa"
import { forwardRef } from 'react';

const Service = (props,ref) => {
  return (
    <div ref={ref} className="service">
        <div className="upper_part">
            <h2>What I'm Doing</h2>
            <p>I love what I do. I take great pride in what I do.</p>
        </div>
        <div className="lower_part">
            <div className="grid_item">
                <div className="icon"><HiOutlineDesktopComputer className='iconedit'/></div>
                <div className="title"><h2>Web Design</h2></div>
                <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam delectus ad quod fuga nam officiis aliquam reiciendis corrupti suscipit asperiores.</div>
            </div> <div className="grid_item">
                <div className="icon"><FaPenFancy className='iconedit'/></div>
                <div className="title"><h2>Development</h2></div>
                <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam delectus ad quod fuga nam officiis aliquam reiciendis corrupti suscipit asperiores.</div>
            </div> <div className="grid_item">
                <div className="icon"><BsGraphUp className='iconedit'/></div>
                <div className="title"><h2>Marketing</h2></div>
                <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam delectus ad quod fuga nam officiis aliquam reiciendis corrupti suscipit asperiores.</div>
            </div> <div className="grid_item">
                <div className="icon"><SlGraph className='iconedit'/></div>
                <div className="title"><h2>Stretegy</h2></div>
                <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam delectus ad quod fuga nam officiis aliquam reiciendis corrupti suscipit asperiores.</div>
            </div> <div className="grid_item">
                <div className="icon"><GrSupport   className='iconedit'/></div>
                <div className="title"><h2>Support</h2></div>
                <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam delectus ad quod fuga nam officiis aliquam reiciendis corrupti suscipit asperiores.</div>
            </div> <div className="grid_item">
                <div className="icon"><FaPencilRuler className='iconedit'/></div>
                <div className="title"><h2>We're Experienced</h2></div>
                <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam delectus ad quod fuga nam officiis aliquam reiciendis corrupti suscipit asperiores.</div>
            </div>

        </div>
    </div>
  )
}

export default forwardRef(Service)