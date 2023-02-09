import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className="footer">
        <div className="logo_footer">Logo</div>
        <div className="icon_footer">
        <SocialIcon className='socialMedia' url="https://twitter.com/" style={{height:"40px",width:"40px" ,marginRight:"10px"}}/> 
        <SocialIcon className='socialMedia' url="https://facebook.com/"style={{height:"40px",width:"40px",marginRight:"10px"}} /> 
        <SocialIcon className='socialMedia' url="https://instagram.com/"style={{height:"40px",width:"40px",marginRight:"10px"}} />
        <SocialIcon className='socialMedia' url="https://google.com/" style={{height:"40px",width:"40px",marginRight:"10px"}}/>
        </div>
        <div className="madewith_footer">Made with love by <span>Shreedhar</span> </div>
        <div className="rights_footer">© 2023 Shreedhar - ALL RIGHTS RESERVED </div>

    </div>
  )
}

export default Footer