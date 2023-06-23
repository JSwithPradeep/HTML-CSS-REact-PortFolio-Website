import React from 'react';
import './style.scss';
import {FaPhoneAlt} from 'react-icons/fa';
import {MdMail} from 'react-icons/md';
const ContactInfo = () => {
  return (
    <div className='contact-info-box'>
        <h4>I would be happy to answer any questions you may have about
        freelance writing or content marketing!
        </h4>
    <div className='contact-option'>
        <FaPhoneAlt/>
        <span className='text'>+91 8700250093</span>
    </div>

    <div className='contact-option'>
        <MdMail/>
        <span className='text'>psrana055@gmail.com</span>
    </div>
</div>
  )
}

export default ContactInfo;