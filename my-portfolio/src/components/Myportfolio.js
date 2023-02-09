import React from 'react';
import {BsCalendarDateFill,BsEmojiSmile,BsAward} from "react-icons/bs";
import{SlCalender} from "react-icons/sl"
import { forwardRef } from 'react';

const Myportfolio = (props,ref) => {
  return (
    <div ref={ref} className="Myportfolio">
         <div className="upper_part">
            <h2>My Portfolio</h2>
            <p>I love what I do. I take great pride in what I do.</p>
        </div>
        <div className="lower_main_part">

        
        <div className="lower_part_portfolio">
            <button className='btn'>All</button>
            <button className='btn'>Web Design</button>
            <button className='btn'>Development</button>
            <button className='btn'>Marketing</button>
            
        </div>
        <div className="lower_part_portfolio_pic">

        </div>
        <div className="lower_part_number">
            <div className="lower-portfolio_grid">

            <div className="icon_for_portfolio"><BsCalendarDateFill style={{color:"gray"}} className='iconedit'/></div>
            <div className="number_for_portfolio"><h2>10</h2></div>
            <div className="name_for_portfolio">Total Projects</div>
            </div> <div className="lower-portfolio_grid">

            <div className="icon_for_portfolio"><BsEmojiSmile style={{color:"gray"}}  className="iconedit"/></div>
            <div className="number_for_portfolio"><h2>5</h2></div>
            <div className="name_for_portfolio">Happy Clients</div>
            </div> <div className="lower-portfolio_grid">

            <div className="icon_for_portfolio"><SlCalender style={{color:"gray"}}  className="iconedit"/></div>
            <div className="number_for_portfolio"><h2>3</h2></div>
            <div className="name_for_portfolio">Years of Experience</div>
            </div> <div className="lower-portfolio_grid">

            <div className="icon_for_portfolio"><BsAward style={{color:"gray"}}  className="iconedit"/></div>
            <div className="number_for_portfolio"><h2>3</h2></div>
            <div className="name_for_portfolio">Award Won</div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default forwardRef(Myportfolio)