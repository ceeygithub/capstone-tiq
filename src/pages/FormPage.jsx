
import React, { useState } from 'react';
import StepProgressBar from '../components/StepProgressBar';
import Form1 from '../components/Form1';
import Form2 from '../components/Form2';
import Form3 from '../components/Form3';

const FormPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div style={{ margin: 'auto',  maxWidth: '1220px', display:'flex',flexDirection:'column',justifyContent:'center' }}>
      
      <StepProgressBar currentStep={currentStep} />
     
      <div style={{margin:' 50px auto 0 auto'}}>
 <h3 style={{marginBottom:'60px'}}>Answer/tap on each assessment on this page from <b>strongly agree</b> to <b>strongly disagree</b> on how true it is about you.</h3>
  {/* Conditionally render forms based on the current step */}
      {currentStep === 1 && <Form1 onNext={handleNext} />}
      {currentStep === 2 && <Form2 onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStep === 3 && <Form3 onPrevious={handlePrevious} />}
      </div>
    
    </div>
  );
};

export default FormPage;

