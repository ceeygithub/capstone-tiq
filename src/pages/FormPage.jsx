
// import React, { useState } from 'react';
// import StepProgressBar from '../components/StepProgressBar';
// import Form1 from '../components/Form1';
// import Form2 from '../components/Form2';
// import Form3 from '../components/Form3';
// import { useNavigate } from 'react-router-dom';

// const FormPage = () => {
//       const navigate = useNavigate();
//       // eslint-disable-next-line no-unused-vars
//   const [submitted, setSubmitted] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
//    const [answers, setAnswers] = useState({});
//   const [formData, setFormData] = useState({
//     form1: {},
//     form2: {},
//     form3: {}
//   });

//  const handleChange = (event, formName) => {
//   const { name, value } = event.target;
//   setFormData((prevFormData) => ({
//     ...prevFormData,
//     [formName]: {
//       ...prevFormData[formName],
//       [name]: value,
//     },
//   }));
// };

//   const nextForm = (partAnswers) => {
//     setAnswers({ ...answers, ...partAnswers });
//     setCurrentStep(prevStep => prevStep + 1);
//   };

//   const submitForms = async () => {
//   // Combine all form data
//   const allAnswers = Object.values(formData).reduce((acc, form) => {
//     return { ...acc, ...form };
//   }, {});

//   try {
//     const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfMSJ6Ly-Oh8RrSTtLMgeKDH0iMO9IyIuFkeLpoun6c3StLjg/formResponse', {
//       method: 'POST',
//       mode: 'no-cors',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams(allAnswers).toString(),
//     });

//     // Use the response variable here
//     console.log(response);

//     setSubmitted(true);
//     navigate('/response');

//     // Display submission status
//     const submissionStatus = Object.keys(allAnswers).length > 0 ? "Answers submitted successfully!" : "No answers submitted!";
//     alert(submissionStatus);

//     // Reset form data after successful submission
//     setFormData({
//       form1: {},
//       form2: {},
//       form3: {}
//     });

//   } catch (error) {
//     console.error('Error submitting form:', error);
//     alert('Failed to submit answers. Please try again later.');
//   }
// };

//   return (
//     <div style={{ margin: 'auto',  maxWidth: '1220px', display:'flex',flexDirection:'column',justifyContent:'center' }}>
      
//       <StepProgressBar currentStep={currentStep} />
     
//       <div style={{margin:' 50px auto 0 auto'}}>
//  <h3 style={{marginBottom:'60px'}}>Answer/tap on each assessment on this page from <b>strongly agree</b> to <b>strongly disagree</b> on how true it is about you.</h3>
//   {/* Conditionally render forms based on the current step */}
//        {currentStep === 1 && (
//         <Form1
//           formData={formData.form1}
//           handleChange={(event) => handleChange(event, 'form1')}
//           nextForm={nextForm}
//         />
//       )}
//     {currentStep === 2 && (
//         <Form2
//           formData={formData.form2}
//   handleChange={(event) => handleChange(event, 'form2')}
//           nextForm={nextForm}
//         />
//       )}
//   {currentStep === 3 && (
//         <Form3
//           formData={formData.form3}
//           handleChange={handleChange}
//           submitForms={submitForms}
//         />
//       )}
//       </div>
    
//     </div>
//   );
// };

// export default FormPage;

// import React, { useState } from 'react';
// import StepProgressBar from '../components/StepProgressBar';
// import Form1 from '../components/Form1';
// import Form2 from '../components/Form2';
// import Form3 from '../components/Form3';
// import { useNavigate } from 'react-router-dom';

// const FormPage = () => {
//   const navigate = useNavigate();
//   // eslint-disable-next-line
//   const [submitted, setSubmitted] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     form1: {},
//     form2: {},
//     form3: {}
//   });
//   const [formCompleted, setFormCompleted] = useState({
//     form1: false,
//     form2: false,
//     form3: false
//   });
  


//   const handleChange = (event, formName) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [formName]: {
//         ...prevFormData[formName],
//         [name]: value,
//       },
//     }));
//   };

//   const nextForm = (partAnswers) => {
//     setFormData({ ...formData, ...partAnswers });
//     setCurrentStep(prevStep => prevStep + 1);
//     //  window.scrollTo({ top: 0, behavior: 'smooth' });
//      window.scrollTo(0, 0);
//   };

//   const submitForms = async () => {
//     // Combine all form data
//     const allAnswers = Object.values(formData).reduce((acc, form) => {
//       return { ...acc, ...form };
//     }, {});

//     // Check if all forms are completed
//     const allFormsCompleted = Object.values(formCompleted).every(status => status);

//     if (!allFormsCompleted) {
//       alert('Please complete all forms before submitting.');
//       return;
//     }

//     // Submission logic here
//     try {
//         const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfMSJ6Ly-Oh8RrSTtLMgeKDH0iMO9IyIuFkeLpoun6c3StLjg/formResponse', {
//       method: 'POST',
//       mode: 'no-cors',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams(allAnswers).toString(),
//     });

//     // Use the response variable here
//     console.log(response);

//  console.log('Submitting forms:', allAnswers);
//     setSubmitted(true);
//     alert('All answers submitted!');
//     navigate('/response')

//       // Display submission status
//       const submissionStatus = Object.keys(allAnswers).length > 0 ? "Answers submitted successfully!" : "No answers submitted!";
//       alert(submissionStatus);

//       // Reset form data after successful submission
//       setFormData({
//         form1: {},
//         form2: {},
//         form3: {}
//       });

//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('Failed to submit answers. Please try again later.');
//     }
//   };

//   return (
//     <div style={{ margin: 'auto', maxWidth: '1220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//       <StepProgressBar currentStep={currentStep} />
//       <div style={{ margin: '50px auto 0 auto' }}>
//         <h3 style={{ marginBottom: '60px' }}>Answer/tap on each assessment on this page from <b>strongly agree</b> to <b>strongly disagree</b> on how true it is about you.</h3>
//         {/* Conditionally render forms based on the current step */}
//         {currentStep === 1 && (
//           <Form1
//             formData={formData.form1}
//             handleChange={(event) => handleChange(event, 'form1')}
//             nextForm={nextForm}
//             setFormCompleted={() => setFormCompleted({ ...formCompleted, form1: true })}
//           />
//         )}
//         {currentStep === 2 && (
//           <Form2
//             formData={formData.form2}
//             handleChange={(event) => handleChange(event, 'form2')}
//             nextForm={nextForm}
//             setFormCompleted={() => setFormCompleted({ ...formCompleted, form2: true })}
//           />
//         )}
//         {currentStep === 3 && (
//           <Form3
//             formData={formData.form3}
//             handleChange={handleChange}
//             submitForms={submitForms}
//             setFormCompleted={() => setFormCompleted({ ...formCompleted, form3: true })}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default FormPage;


import React, { useState, useEffect } from 'react';
import StepProgressBar from '../components/StepProgressBar';
import Form1 from '../components/Form1';
import Form2 from '../components/Form2';
import Form3 from '../components/Form3';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    form1: {},
    form2: {},
    form3: {}
  });
  const [formCompleted, setFormCompleted] = useState({
    form1: false,
    form2: false,
    form3: false
  });

  useEffect(() => {
    // Add event listener to prevent default form submission on Enter key press
    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleChange = (event, formName) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [formName]: {
        ...prevFormData[formName],
        [name]: value
      }
    }));
  };

  const nextForm = (partAnswers) => {
    setFormData({ ...formData, ...partAnswers });
    setCurrentStep(prevStep => prevStep + 1);
    window.scrollTo(0, 0);
  };

  const submitForms = async () => {
    // Combine all form data
    const allAnswers = Object.values(formData).reduce((acc, form) => {
      return { ...acc, ...form };
    }, {});



    try {
        // Reset form data after successful submission
      setFormData({
        form1: {},
        form2: {},
        form3: {}
      });
      // Submission logic here
      console.log('Submitting forms:', allAnswers);
      setSubmitted(true);
      // alert('All answers submitted!');
      navigate('/response');

          const allFormsCompleted = Object.values(formCompleted).every(status => status);
  if (allFormsCompleted) {
      alert('All answers submitted!');
      return;
    }
    
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit answers. Please try again later.');
    }
  };

  return (
    <div style={{ margin: 'auto', maxWidth: '1220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <StepProgressBar currentStep={currentStep} />
      <div style={{ margin: '50px auto 0 auto' }}>
        <h3 style={{ marginBottom: '60px' }}>Answer/tap on each assessment on this page from <b>strongly agree</b> to <b>strongly disagree</b> on how true it is about you.</h3>
        {/* Conditionally render forms based on the current step */}
        {currentStep === 1 && (
          <Form1
            formData={formData.form1}
            handleChange={(event) => handleChange(event, 'form1')}
            nextForm={nextForm}
            setFormCompleted={() => setFormCompleted({ ...formCompleted, form1: true })}
          />
        )}
        {currentStep === 2 && (
          <Form2
            formData={formData.form2}
            handleChange={(event) => handleChange(event, 'form2')}
            nextForm={nextForm}
            setFormCompleted={() => setFormCompleted({ ...formCompleted, form2: true })}
          />
        )}
        {currentStep === 3 && (
          <Form3
            formData={formData.form3}
            handleChange={handleChange}
            submitForms={submitForms}
            setFormCompleted={() => setFormCompleted({ ...formCompleted, form3: true })}
          />
        )}
      </div>
    </div>
  );
};

export default FormPage;
