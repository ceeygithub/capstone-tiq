import React, { useState } from 'react';
import '../styles/Form.css';


const Form3 = ({  handleChange, submitForms }) => {
  // eslint-disable-next-line no-unused-vars
   const [submitted, setSubmitted] = useState(false);
//      const { user, handleTestSubmit } = useAuth();
//       const [result, setResult] = useState('');


//        const [formData, setFormData] = useState({
//  form1: {},
//     form2: {},
//     form3: {}
//   });

  // const handleSubmit = () => {
  //   setSubmitted(true);
    
  // };

  //  const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (!user) {
  //     // Handle case when user is not logged in
  //     return;
  //   }

  //   // Call handleTestSubmit function from the AuthContext
  //   try {
  //     await handleTestSubmit(user.uid, result);
  //     setResult('');
  //     console.log('Test result submitted successfully.');
  //   } catch (error) {
  //     console.error('Error submitting test result:', error);
  //   }
  // };

  // const handleSubmit = async () => {
  //   // Perform form submission here
  //   // Example using fetch API to submit form data to Google Form
  //   const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfMSJ6Ly-Oh8RrSTtLMgeKDH0iMO9IyIuFkeLpoun6c3StLjg/formResponse', {
  //     method: 'POST',
  //     mode: 'no-cors',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: new URLSearchParams(formData).toString(),
  //   });
    
  //   // Reset form data after submission
  //   // setFormData({
  //   //   // Reset form data fields here
  //   //   // Example:
  //   //   // question1: '',
  //   //   // question2: '',
  //   //   // ...
  //   // });
    
  //   // Handle success or error response accordingly
  //   console.log('Form submitted!');
  // };


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setAnswers({
  //     ...answers,
  //     [name]: value,
  //   });
  // };
  // const handleInputChange = (e) => {
  //   onChange(e.target.name, e.target.value);
  // };

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
            // onSubmit={handleSubmit}
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
                  
           
   <button type='submit' id="submit" className='FormBtn'   onClick={submitForms} >Submit</button>
    </form>
      </>
  );
};

export default Form3;
// import React, { useState } from 'react';
// import '../styles/Form.css';

  

// const Form3 = ({ formData, handleChange, submitForms }) => {
   
// const [submitted, setSubmitted] = useState(false);

  

//   return (
//     <>
//         <iframe
//             className='response'
//             title='response'
//             name='response'
//             style={{ display: 'none' }}
//             onLoad={() => {
//               if (submitted) {
//                 window.location = '/response';
//               }
//             }}
//           ></iframe>
    
  
//    <form
           
//             action="https://docs.google.com/forms/d/e/1FAIpQLSfkkTAqXE2DNCkXEhTHwEYPgBCKzLjh7LImvhe4289-APOsiA/formResponse"
//             method="post"
//              target='response'
          
//           >
            
//               <label htmlFor="entry.1761544823"  className='question'>What motivates you the most about technology?
              
//               <textarea id="entry.1761544823" className='textArea' name="entry.1761544823" required placeholder='Type here'   onChange={handleChange}></textarea>
//             </label>
//              <label htmlFor="entry.326547479"  className='question'>What are some challenges you see in tech today that you want to solve?
              
//               <textarea id="entry.326547479" className='textArea' name="entry.326547479" required placeholder='Type here'  onChange={handleChange}></textarea>
//             </label>
//              <label htmlFor="entry.827968864"  className='question'>How would you use your skills to make a positive impact?
              
//               <textarea id="entry.827968864" className='textArea' name="entry.827968864" required placeholder='Type here'  onChange={handleChange}></textarea>
//             </label>
//              <label htmlFor="entry.2118413439"  className='question'>After a successful project what brings you the most satisfaction?
              
//               <textarea id="entry.2118413439" className='textArea' name="entry.2118413439" required placeholder='Type here'  onChange={handleChange}></textarea>
//             </label>
//              <label htmlFor="entry.1268435976"  className='question'>In your interactions with people, what is something you
// find surprising or unexpected
              
//               <textarea id="entry.1268435976" className='textArea' name="entry.1268435976" required placeholder='Type here'  onChange={handleChange}></textarea>
//             </label>
                  
           
//    <button type='submit' id="submit" className='FormBtn'   onClick={submitForms} >Submit</button>
//     </form>
//       </>
//   );
// };

// export default Form3;



