
import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar } from 'react-step-progress-bar';
import "../styles/Progressbar.css"

const StepProgressBar = ({ currentStep }) => {
  // Calculate the percentage based on the current step
  const percent = (currentStep - 1) * 33.33; // Assuming each step is 33.33% of the progress bar

  return (
    <div className='ProgressbarWrapper'>
  <ProgressBar percent={percent} filledBackground="#FF7845" />
    </div>
  
  );
};

export default StepProgressBar;
