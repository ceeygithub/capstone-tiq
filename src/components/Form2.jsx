import React, { useState, useEffect } from 'react';
import '../styles/Form.css'
import { BsArrowRight } from "react-icons/bs";
import { TfiTimer } from "react-icons/tfi";

const Form2 = ({ formData, handleChange, nextForm }) => {
   const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerDuration = 15 * 60; // 15 minutes

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSeconds(0);
      nextForm();
    }, timerDuration * 1000);

    return () => clearTimeout(timeout);
  }, [nextForm, timerDuration]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAnswers({
//       ...answers,
//       [name]: value,
//     });
//   };

  return (
  <form
     
            action="https://docs.google.com/forms/d/e/1FAIpQLSfMSJ6Ly-Oh8RrSTtLMgeKDH0iMO9IyIuFkeLpoun6c3StLjg/formResponse"
            method="post"
           
          >
             {/* <div  className='timer'><TfiTimer className='timerIcon'/> {formatTime(timerDuration - seconds)}</div> */}
             <div className="timer">
        <TfiTimer className="timerIcon" />{' '}
        {formatTime(timerDuration - seconds > 0 ? timerDuration - seconds : 0)}
      </div>
          
            <fieldset>
            <label htmlFor='entry.1887011380' className='question'>A bakery sells 24 muffins each day. If they bake muffins for 5 days in a row, how many muffins will they have baked in total?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="120 muffins"><input id="entry.1887011380" type="radio" name="entry.1887011380" value="120 muffins"   onChange={handleChange}/> 120 muffins</label>
        </div>
          <div className='answer'>
   <label htmlFor="96 muffins"><input id="entry.1887011380" type="radio" name="entry.1887011380" value="96 muffins"   onChange={handleChange}/> 96 muffins</label>
          </div>
           
      <div  className='answer'>
           <label htmlFor="72 muffins"><input id="entry.1887011380" type="radio" name="entry.1887011380" value="72 muffins"   onChange={handleChange}/> 72 muffins</label>
      </div>
   <div  className='answer'>
  <label htmlFor="48 muffins"><input id="entry.1887011380" type="radio" name="entry.1887011380" value="48 muffins"  onChange={handleChange} /> 48 muffins</label>
   </div>
   
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.1109513289' className='question'>If a person buys 3 apples for $1, how much would 8 apples cost?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="$2.64"><input id="entry.1109513289" type="radio" name="entry.1109513289" value="$2.64"  onChange={handleChange}/> $2.64</label>
        </div>
          <div className='answer'>
   <label htmlFor="$3"><input id="entry.1109513289" type="radio" name="entry.1109513289" value="$3"   onChange={handleChange}/> $3</label>
          </div>
           
      <div  className='answer'>
           <label htmlFor="$2.22"><input id="entry.1109513289" type="radio" name="entry.1109513289" value="$2.22"  onChange={handleChange}/> $2.22</label>
      </div>
   <div  className='answer'>
  <label htmlFor="$4"><input id="entry.1109513289" type="radio" name="entry.1109513289" value="$4"  onChange={handleChange}/> $4</label>
   </div>
         
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.1848740065' className='question'>A car travels at an average speed of 60 miles per hour. How far will it travel in 3 hours?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="120 miles"><input id="entry.1848740065" type="radio" name="entry.1848740065" value="120 miles"  onChange={handleChange}/> 120 miles</label>
        </div>
          <div className='answer'>
   <label htmlFor="150 miles"><input id="entry.1848740065" type="radio" name="entry.1848740065" value="150 miles"  onChange={handleChange}/> 150 miles</label>
          </div>
           
      <div  className='answer'>
           <label htmlFor="180 miles"><input id="entry.1848740065" type="radio" name="entry.1848740065" value="180 miles"  onChange={handleChange}/> 180 miles</label>
      </div>
   <div  className='answer'>
  <label htmlFor="200 miles"><input id="entry.1848740065" type="radio" name="entry.1848740065" value="200 miles"  onChange={handleChange}/> 200 miles</label>
   </div>
  
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.627471489' className='question'>What is the next number in the sequence: 1, 4, 9, 16, ___ ?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="20"><input id="entry.627471489" type="radio" name="entry.627471489" value="20"  onChange={handleChange}/> 20</label>
        </div>
          <div className='answer'>
   <label htmlFor="25"><input id="entry.627471489" type="radio" name="entry.627471489" value="25"  onChange={handleChange}/> 25</label>
          </div>
           
      <div  className='answer'>
           <label htmlFor="30"><input id="entry.627471489" type="radio" name="entry.627471489" value="30"  onChange={handleChange}/> 30</label>
      </div>
   <div  className='answer'>
  <label htmlFor="36"><input id="entry.627471489" type="radio" name="entry.627471489" value="36"  onChange={handleChange} /> 36</label>
   </div>
       
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.1329946019' className='question'>Which of the following shapes has the most sides: triangle, square, pentagon, and hexagon?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Triangle"><input id="entry.1329946019" type="radio" name="entry.1329946019" value="Triangle"  onChange={handleChange}/> Triangle</label>
        </div>
          <div className='answer'>
   <label htmlFor="Square"><input id="entry.1329946019" type="radio" name="entry.1329946019" value="Square"  onChange={handleChange}/> Square</label>
          </div>
           
      <div  className='answer'>
           <label htmlFor="Pentagon"><input id="entry.1329946019" type="radio" name="entry.1329946019" value="Pentagon"  onChange={handleChange}/> Pentagon</label>
      </div>
   <div  className='answer'>
  <label htmlFor="Hexagon"><input id="entry.1329946019" type="radio" name="entry.1329946019" value="Hexagon"   onChange={handleChange}/> Hexagon</label>
   </div>

          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.143092441' className='question'>If John has 5 apples and he gives 2 to his friend, how many apples does John have left?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="2 apples"><input id="entry.143092441" type="radio" name="entry.143092441" value="2 apples"  onChange={handleChange}/> 2 apples</label>
        </div>
          <div className='answer'>
   <label htmlFor="3 apples"><input id="entry.143092441" type="radio" name="entry.143092441" value="3 apples"  onChange={handleChange}/> 3 apples</label>
          </div>
           
      <div  className='answer'>
           <label htmlFor="4 apples"><input id="entry.143092441" type="radio" name="entry.143092441" value="4 apples"  onChange={handleChange}/> 4 apples</label>
      </div>
   <div  className='answer'>
  <label htmlFor="5 apples"><input id="entry.143092441" type="radio" name="entry.143092441" value="5 apples"  onChange={handleChange}/> 5 apples</label>
   </div>
  
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.1696386892' className='question'>If it takes 4 hours to mow a lawn and there are 3 lawns to mow, how many hours will it take to mow all the lawns?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="8 hours"><input id="entry.1696386892" type="radio" name="entry.1696386892" value="8 hours"  onChange={handleChange}/> 8 hours</label>
        </div>
          <div className='answer'>
   <label htmlFor="10 hours"><input id="entry.1696386892" type="radio" name="entry.1696386892" value="10 hours"  onChange={handleChange}/> 10 hours</label>
          </div>
           
      <div  className='answer'>
           <label htmlFor="12 hours"><input id="entry.1696386892" type="radio" name="entry.1696386892" value="12 hours"  onChange={handleChange}/> 12 hours</label>
      </div>
   <div  className='answer'>
  <label htmlFor="16 hours"><input id="entry.1696386892" type="radio" name="entry.1696386892" value="16 hours"  onChange={handleChange}/> 16 hours</label>
   </div>
    
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.946294464' className='question'>Which of the following is not a primary color: red, blue, yellow, green??</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Red"><input id="entry.946294464" type="radio" name="entry.946294464" value="Red"   onChange={handleChange}/> Red</label>
        </div>
          <div className='answer'>
   <label htmlFor="Blue"><input id="entry.946294464" type="radio" name="entry.946294464" value="Blue"  onChange={handleChange}/> Blue</label>
          </div>
           
      <div  className='answer'>
           <label htmlFor="Yellow"><input id="entry.946294464" type="radio" name="entry.946294464" value="Yellow"  onChange={handleChange}/> Yellow</label>
      </div>
   <div  className='answer'>
  <label htmlFor="Green"><input id="entry.946294464" type="radio" name="entry.946294464" value="Green"  onChange={handleChange}/> Green</label>
   </div>
  
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.563560451' className='question'>Which of the following words is most similar in meaning to "confident":</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Sure"><input id="entry.563560451" type="radio" name="entry.563560451" value="Sure"  onChange={handleChange}/> Sure</label>
        </div>
          <div className='answer'>
   <label htmlFor="Doubtful"><input id="entry.563560451" type="radio" name="entry.563560451" value="Doubtful"  onChange={handleChange}/> Doubtful</label>
          </div>
           
      <div  className='answer'>
           <label htmlFor="Uncertain"><input id="entry.563560451" type="radio" name="entry.563560451" value="Uncertain"  onChange={handleChange} /> Uncertain</label>
      </div>
   <div  className='answer'>
  <label htmlFor="Hesitant"><input id="entry.563560451" type="radio" name="entry.563560451" value="Hesitant"   onChange={handleChange}/> Hesitant</label>
   </div>
      
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.414768504' className='question'>If all software engineers are good at coding, and Maria is good at coding, can we conclude that Maria is a software engineer?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Yes, Maria is a software engineer"><input id="entry.414768504" type="radio" name="entry.414768504" value="Yes, Maria is a software engineer"   onChange={handleChange}/> Yes, Maria is a software engineer</label>
        </div>
          <div className='answer'>
   <label htmlFor="No, Maria can be anything else"><input id="entry.414768504" type="radio" name="entry.414768504" value="No, Maria can be anything else"  onChange={handleChange}/> No, Maria can be anything else</label>
          </div>
           
      <div  className='answer'>
           <label htmlFor="I don’t know"><input id="entry.414768504" type="radio" name="entry.414768504" value="I don’t know"  onChange={handleChange}/> I don’t know</label>
      </div>
  
          
         </div>
      
          </fieldset>

           
      <button type="button" onClick={nextForm} className='FormBtn'>Next <BsArrowRight className="icon" /></button>
    </form>
  );
};

export default Form2;

// import React, { useState, useEffect } from 'react';
// import '../styles/Form.css'
// import { BsArrowRight } from "react-icons/bs";
// import { TfiTimer } from "react-icons/tfi";

// const Form2 = ({ formData, handleChange, nextForm }) => {
//    const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSeconds(prevSeconds => prevSeconds + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const timerDuration = 15 * 60; // 15 minutes

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setSeconds(0);
//       nextForm();
//     }, timerDuration * 1000);

//     return () => clearTimeout(timeout);
//   }, [nextForm, timerDuration]);

//   const formatTime = (timeInSeconds) => {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = timeInSeconds % 60;
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   return (
//   <form
     
//             action="https://docs.google.com/forms/d/e/1FAIpQLSfkkTAqXE2DNCkXEhTHwEYPgBCKzLjh7LImvhe4289-APOsiA/formResponse"
//             method="post"
           
//           >
           
//              <div className="timer">
//         <TfiTimer className="timerIcon" />{' '}
//         {formatTime(timerDuration - seconds > 0 ? timerDuration - seconds : 0)}
//       </div>
          
//             <fieldset>
//             <label htmlFor='entry.386998000' className='question'>A bakery sells 24 muffins each day. If they bake muffins for 5 days in a row, how many muffins will they have baked in total?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="120 muffins"><input id="entry.386998000" type="radio" name="entry.386998000" value="120 muffins"   onChange={handleChange}/> 120 muffins</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="96 muffins"><input id="entry.386998000" type="radio" name="entry.386998000" value="96 muffins"   onChange={handleChange}/> 96 muffins</label>
//           </div>
           
//       <div  className='answer'>
//            <label htmlFor="72 muffins"><input id="entry.386998000" type="radio" name="entry.386998000" value="72 muffins"   onChange={handleChange}/> 72 muffins</label>
//       </div>
//    <div  className='answer'>
//   <label htmlFor="48 muffins"><input id="entry.386998000" type="radio" name="entry.386998000" value="48 muffins"  onChange={handleChange} /> 48 muffins</label>
//    </div>
   
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.895441760' className='question'>If a person buys 3 apples for $1, how much would 8 apples cost?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="$2.64"><input id="entry.895441760" type="radio" name="entry.895441760" value="$2.64"  onChange={handleChange}/> $2.64</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="$3"><input id="entry.895441760" type="radio" name="entry.895441760" value="$3"   onChange={handleChange}/> $3</label>
//           </div>
           
//       <div  className='answer'>
//            <label htmlFor="$2.22"><input id="entry.895441760" type="radio" name="entry.895441760" value="$2.22"  onChange={handleChange}/> $2.22</label>
//       </div>
//    <div  className='answer'>
//   <label htmlFor="$4"><input id="entry.895441760" type="radio" name="entry.895441760" value="$4"  onChange={handleChange}/> $4</label>
//    </div>
         
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.1010329419' className='question'>A car travels at an average speed of 60 miles per hour. How far will it travel in 3 hours?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="120 miles"><input id="entry.1010329419" type="radio" name="entry.1010329419" value="120 miles"  onChange={handleChange}/> 120 miles</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="150 miles"><input id="entry.1010329419" type="radio" name="entry.1010329419" value="150 miles"  onChange={handleChange}/> 150 miles</label>
//           </div>
           
//       <div  className='answer'>
//            <label htmlFor="180 miles"><input id="entry.1010329419" type="radio" name="entry.1010329419" value="180 miles"  onChange={handleChange}/> 180 miles</label>
//       </div>
//    <div  className='answer'>
//   <label htmlFor="200 miles"><input id="entry.1010329419" type="radio" name="entry.1010329419" value="200 miles"  onChange={handleChange}/> 200 miles</label>
//    </div>
  
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.138344281' className='question'>What is the next number in the sequence: 1, 4, 9, 16, ___ ?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="20"><input id="entry.138344281" type="radio" name="entry.138344281" value="20"  onChange={handleChange}/> 20</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="25"><input id="entry.138344281" type="radio" name="entry.138344281" value="25"  onChange={handleChange}/> 25</label>
//           </div>
           
//       <div  className='answer'>
//            <label htmlFor="30"><input id="entry.138344281" type="radio" name="entry.138344281" value="30"  onChange={handleChange}/> 30</label>
//       </div>
//    <div  className='answer'>
//   <label htmlFor="36"><input id="entry.138344281" type="radio" name="entry.138344281" value="36"  onChange={handleChange} /> 36</label>
//    </div>
       
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.2114542975' className='question'>Which of the following shapes has the most sides: triangle, square, pentagon, and hexagon?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Triangle"><input id="entry.2114542975" type="radio" name="entry.2114542975" value="Triangle"  onChange={handleChange}/> Triangle</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Square"><input id="entry.2114542975" type="radio" name="entry.2114542975" value="Square"  onChange={handleChange}/> Square</label>
//           </div>
           
//       <div  className='answer'>
//            <label htmlFor="Pentagon"><input id="entry.2114542975" type="radio" name="entry.2114542975" value="Pentagon"  onChange={handleChange}/> Pentagon</label>
//       </div>
//    <div  className='answer'>
//   <label htmlFor="Hexagon"><input id="entry.2114542975" type="radio" name="entry.2114542975" value="Hexagon"   onChange={handleChange}/> Hexagon</label>
//    </div>

          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.2005416861' className='question'>If John has 5 apples and he gives 2 to his friend, how many apples does John have left?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="2 apples"><input id="entry.2005416861" type="radio" name="entry.2005416861" value="2 apples"  onChange={handleChange}/> 2 apples</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="3 apples"><input id="entry.2005416861" type="radio" name="entry.2005416861" value="3 apples"  onChange={handleChange}/> 3 apples</label>
//           </div>
           
//       <div  className='answer'>
//            <label htmlFor="4 apples"><input id="entry.2005416861" type="radio" name="entry.2005416861" value="4 apples"  onChange={handleChange}/> 4 apples</label>
//       </div>
//    <div  className='answer'>
//   <label htmlFor="5 apples"><input id="entry.2005416861" type="radio" name="entry.2005416861" value="5 apples"  onChange={handleChange}/> 5 apples</label>
//    </div>
  
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.332662623' className='question'>If it takes 4 hours to mow a lawn and there are 3 lawns to mow, how many hours will it take to mow all the lawns?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="8 hours"><input id="entry.332662623" type="radio" name="entry.332662623" value="8 hours"  onChange={handleChange}/> 8 hours</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="10 hours"><input id="entry.332662623" type="radio" name="entry.332662623" value="10 hours"  onChange={handleChange}/> 10 hours</label>
//           </div>
           
//       <div  className='answer'>
//            <label htmlFor="12 hours"><input id="entry.332662623" type="radio" name="entry.332662623" value="12 hours"  onChange={handleChange}/> 12 hours</label>
//       </div>
//    <div  className='answer'>
//   <label htmlFor="16 hours"><input id="entry.332662623" type="radio" name="entry.332662623" value="16 hours"  onChange={handleChange}/> 16 hours</label>
//    </div>
    
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.733934254' className='question'>Which of the following is not a primary color: red, blue, yellow, green??</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Red"><input id="entry.733934254" type="radio" name="entry.733934254" value="Red"   onChange={handleChange}/> Red</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Blue"><input id="entry.733934254" type="radio" name="entry.733934254" value="Blue"  onChange={handleChange}/> Blue</label>
//           </div>
           
//       <div  className='answer'>
//            <label htmlFor="Yellow"><input id="entry.733934254" type="radio" name="entry.733934254" value="Yellow"  onChange={handleChange}/> Yellow</label>
//       </div>
//    <div  className='answer'>
//   <label htmlFor="Green"><input id="entry.733934254" type="radio" name="entry.733934254" value="Green"  onChange={handleChange}/> Green</label>
//    </div>
  
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.1608842641' className='question'>Which of the following words is most similar in meaning to "confident":</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Sure"><input id="entry.1608842641" type="radio" name="entry.1608842641" value="Sure"  onChange={handleChange}/> Sure</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Doubtful"><input id="entry.1608842641" type="radio" name="entry.1608842641" value="Doubtful"  onChange={handleChange}/> Doubtful</label>
//           </div>
           
//       <div  className='answer'>
//            <label htmlFor="Uncertain"><input id="entry.1608842641" type="radio" name="entry.1608842641" value="Uncertain"  onChange={handleChange} /> Uncertain</label>
//       </div>
//    <div  className='answer'>
//   <label htmlFor="Hesitant"><input id="entry.1608842641" type="radio" name="entry.1608842641" value="Hesitant"   onChange={handleChange}/> Hesitant</label>
//    </div>
      
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.161189286' className='question'>If all software engineers are good at coding, and Maria is good at coding, can we conclude that Maria is a software engineer?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Yes, Maria is a software engineer"><input id="entry.161189286" type="radio" name="entry.161189286" value="Yes, Maria is a software engineer"   onChange={handleChange}/> Yes, Maria is a software engineer</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="No, Maria can be anything else"><input id="entry.161189286" type="radio" name="entry.161189286" value="No, Maria can be anything else"  onChange={handleChange}/> No, Maria can be anything else</label>
//           </div>
           
//       <div  className='answer'>
//            <label htmlFor="I don’t know"><input id="entry.161189286" type="radio" name="entry.161189286" value="I don’t know"  onChange={handleChange}/> I don’t know</label>
//       </div>
  
          
//          </div>
      
//           </fieldset>

           
//       <button type="button" onClick={nextForm} className='FormBtn'>Next <BsArrowRight className="icon" /></button>
//     </form>
//   );
// };

// export default Form2;




