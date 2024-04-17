import React, { useState } from 'react';
import '../styles/Form.css';



const Form3 = ({  handleChange, submitForms,  setFormCompleted,formData }) => {
   const [submitted, setSubmitted] = useState(false);
   

const handleSubmit = (e) => {
  e.preventDefault();
  const allFormData = {
    form1: formData.form1,
    form2: formData.form2,
    form3: formData.form3
  };
  setFormCompleted({ form1: true, form2: true, form3: true }); // Mark all forms as completed
  submitForms(allFormData); // Submit the forms
  setSubmitted(true);

};


  return (
    <>
        <iframe
            className='response'
            title='response'
            name='response'
            style={{ display: 'none' }}
            onLoad={() => {
              if (submitted) {
                window.location = '/response';
              }
            }}
          ></iframe>
    
  
   <form
           
            action="https://docs.google.com/forms/d/e/1FAIpQLSfMSJ6Ly-Oh8RrSTtLMgeKDH0iMO9IyIuFkeLpoun6c3StLjg/formResponse"
            method="post"
             target='response'
            onSubmit={handleSubmit}
          >
              <label htmlFor="entry.1284418903"  className='question'>What motivates you the most about technology?
              
              <textarea id="entry.1284418903" className='textArea' name="entry.1284418903" required placeholder='Type here'   onChange={handleChange}></textarea>
            </label>
             <label htmlFor="entry.1602001245"  className='question'>What are some challenges you see in tech today that you want to solve?
              
              <textarea id="entry.1602001245" className='textArea' name="entry.1602001245" required placeholder='Type here'  onChange={handleChange}></textarea>
            </label>
             <label htmlFor="entry.577814044"  className='question'>How would you use your skills to make a positive impact?
              
              <textarea id="entry.577814044" className='textArea' name="entry.577814044" required placeholder='Type here'  onChange={handleChange}></textarea>
            </label>
             <label htmlFor="entry.1363052241"  className='question'>After a successful project what brings you the most satisfaction?
              
              <textarea id="entry.1363052241" className='textArea' name="entry.1363052241" required placeholder='Type here'  onChange={handleChange}></textarea>
            </label>
             <label htmlFor="entry.339107092"  className='question'>In your interactions with people, what is something you
find surprising or unexpected
              
              <textarea id="entry.339107092" className='textArea' name="entry.339107092" required placeholder='Type here'  onChange={handleChange}></textarea>
            </label>
                  
           
   <button type='submit' id="submit" className='FormBtn'   >Submit</button>
    </form>
      </>
  );
};

export default Form3;

