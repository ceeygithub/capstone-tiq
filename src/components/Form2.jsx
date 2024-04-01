import React from 'react';
import '../styles/Form.css'
import { BsArrowRight } from "react-icons/bs";

const Form2 = ({ onNext }) => {
  return (
  <form
            id="survey-form"
            action="https://docs.google.com/forms/d/e/1FAIpQLSf_r4_1ait2ouu9SxOSwU1g7K30FMdQ_j8MJhHtxNiQgjxy9w/formResponse"
            method="post"
           
          >
          
             <fieldset>
            <label htmlFor='entry.520046930' className='question'>On a scale of 1 to 5, how much do you agree with the statement: "I enjoy meeting new people and socializing at events?</label>
       
        <div className='answer'>
 <label htmlFor="Strongly disagree"><input id="entry.520046930" type="radio" name="entry.520046930" value="Strongly disagree" /> Strongly disagree</label>
        </div>
          <div className='answer'>
   <label htmlFor="Disagree"><input id="entry.520046930" type="radio" name="entry.520046930" value="Disagree" /> Disagree</label>
          </div>
           
      <div  className='answer'>
           <label htmlFor="Neutral"><input id="entry.520046930" type="radio" name="entry.520046930" value="Neutral" /> Neutral</label>
      </div>
   <div  className='answer'>
  <label htmlFor="Agree"><input id="entry.520046930" type="radio" name="entry.520046930" value="Agree" /> Agree</label>
   </div>
            <div className='answer'>
    <label htmlFor="Strongly agree"><input id="entry.520046930" type="radio" name="entry.520046930" value="Strongly agree" /> Strongly agree</label>
            </div>
          
          </fieldset>

           <fieldset>
            <label htmlFor='entry.1502698870' className='question'>
             A car travels at an average speed of 60 miles per hour. How far will it travel in 3 hours?
            </label> 
            <div  className='answer'>
   <label htmlFor="120 miles"><input id="entry.1502698870" type="checkbox" name="entry.1502698870" value="120 miles" /> 120 miles</label> 
            </div>
       <div className='answer'>
 <label htmlFor="150 miles"><input id="entry.1502698870" type="checkbox" name="entry.1502698870" value="150 miles" /> 150 miles</label>
       </div>
           <div   className='answer'>
                <label htmlFor="180 miles"><input id="entry.1502698870" type="checkbox" name="entry.1502698870" value="180 miles" /> 180 miles</label>
            </div>  
          <div  className='answer'>
                   <label htmlFor="200 miles"><input id="entry.1502698870" type="checkbox" name="entry.1502698870" value="entry.1502698870" /> 200 miles</label>
          </div>
      
          </fieldset>

           
      <button type="button" onClick={onNext} className='FormBtn'>Next <BsArrowRight className="icon" /></button>
    </form>
  );
};

export default Form2;
