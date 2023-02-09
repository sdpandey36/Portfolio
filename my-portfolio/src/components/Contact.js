import React from 'react'
import { CiLocationOn } from "react-icons/ci"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { BiWebcam } from "react-icons/bi"
import { forwardRef } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'

const Contact = (props,ref) => {
  return (
    <div ref={ref} className="contact">
      <div className="upper_contact">

      
      <div className="contact_info">
        <h2>Contact Info</h2>
        <div className="contact_info_content">

          <span><CiLocationOn className='contact_info_content_icon' />Address:Kathmandu,Nepal</span>
          <span><BsFillTelephoneFill className='contact_info_content_icon' />Phone:9867736000</span>
          <span><MdEmail className='contact_info_content_icon' />Email:Shreedharroman123@gmail.com</span>

          <span><BiWebcam className='contact_info_content_icon' />Website:www.shreedharroman.com</span>
        </div>
      </div>
      <div className="contact_form">
        <h2>Contact Form</h2>
        <div className="form">
          <FormControl isRequired className='form_contact_form'>

            <Input placeholder='Your Name*' />
          </FormControl> 
           < FormControl isRequired className='form_contact_form'>
          <Input placeholder='Your Email*' />
          </FormControl>
            <FormControl isRequired className='form_contact_form'>

          <Input placeholder='Subject*' />
          </FormControl>  
          <FormControl isRequired className='form_contact_form'>

          <Input placeholder='Phone*' />
          </FormControl>
          <FormControl className='form_contact_form_message'>

          <Input placeholder='Your Message' />
          </FormControl>


         

        </div>
      </div>
      </div>
        <button className="btn">Send Message</button>


    </div>
  )
}

export default forwardRef(Contact)