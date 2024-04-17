import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';
import '../styles/progress.css'

const StepProgressBar = ({ currentStep }) => {
  return (
    <div className='progress-wrapper'>
      <ProgressBar percent={(currentStep - 1) * 50} filledBackground="#FF7845" >
        {/* Step 1 */}
        <Step transition="scale"   left = '5%'
               >
          {({ accomplished }) => (
             <div style={{ textAlign: 'center', display:'flex',flexDirection:'column',alignItems:'baseline',justifyContent:'center',position:"relative"}}>
              <div style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                backgroundColor: accomplished ? '#083A55' : '#4A4A4A',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: accomplished ? 'white' : '#222222',
              
          
              }}>
                1
              </div>
             
              <p style={{  position:'absolute',
                left:'-56%',top:'99%',whiteSpace: 'nowrap'}}>Personality Test</p>
            </div>
          )}
        </Step>
        {/* Step 2 */}
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <div style={{ width: 30, height: 30, borderRadius: '50%', backgroundColor: accomplished ? '#083A55' : '#4A4A4A', display: 'flex', justifyContent: 'center', alignItems: 'center', color: accomplished ? 'white' : '#222222' }}>2</div>
         <p style={{  position:'absolute',
                left:'-57%',top:'99%',whiteSpace: 'nowrap'}}>Intelligence Test</p>
            </div>
          )}
        </Step>
        {/* Step 3 */}
        <Step transition="scale">
          {({ accomplished }) => (
            <div style={{width:'50px'}}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', backgroundColor: accomplished ? '#083A55' : '#4A4A4A', display: 'flex', justifyContent: 'center', alignItems: 'center', color: accomplished ? 'white' : '#222222' }}>3</div>
              <p style={{  position:'absolute',
                left:'-45%',top:'99%' , whiteSpace: 'nowrap'}}> Qualitative Inquiry</p>
            </div>
          )}
        </Step>
      </ProgressBar>

    </div>
  );
};

export default StepProgressBar;
