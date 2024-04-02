import React from 'react';
import contactFormcss from '../styles/ContactForm.module.css';
import Logo from '../asset/TECHiQ (3).png';

const ContactForm = ({ id }) => {
  return (
    <div className={contactFormcss['form-main']} id={id}>
      <div className={contactFormcss['main-wrapper']}>
         <img src={Logo} alt="Logo" className="logoImg" />
        <h2 className={contactFormcss['form-head']}>Contact Us </h2>
        <p className={contactFormcss['form-para']}>Enter your complain here and we will do our best to respond as soon as possible.!!</p>
        <form className={contactFormcss['form-wrapper']}>
          <div className={contactFormcss['form-card']}>
            <input
              className={contactFormcss['form-input']}
              type="text"
              name="full_name"
              required="required"
            />
            <label className={contactFormcss['form-label']} htmlFor="full_name"> Enter Full Name</label>
          </div>

          <div className={contactFormcss['form-card']}>
            <input
              className={contactFormcss['form-input']}
              type="email"
              name="email"
              required="required"
            />
            <label className={contactFormcss['form-label']} htmlFor="email">Enter Email</label>
          </div>

          <div className={contactFormcss['form-card']}>
            <textarea
              className={contactFormcss['form-textarea']}
              maxLength="420"
              rows="3"
              name="address"
              required="required"
            ></textarea>
            <label className={contactFormcss['form-textarea-label']} htmlFor="address">How can we be of help to you?</label>
          </div>
          <div className={contactFormcss['btn-wrap']}>
            <button className='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
