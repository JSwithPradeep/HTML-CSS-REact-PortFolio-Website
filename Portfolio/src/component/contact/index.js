import React from 'react';
import './style.scss';
import Section from '../../shared/section';
import ContactInfo from './contact-info';
import FormValidation from './form';

const Contact = () => {
  return (
    <Section id="contact" title="Any Question Feel Free To Contact" background="light"> 
    <div className='contact-content-wrapper'>
     <ContactInfo/>
     <FormValidation/>
      </div>
    </Section>
  );
}
;
export default Contact;