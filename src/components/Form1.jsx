
// import React, { useState, useEffect } from 'react';
// import '../styles/Form.css'
// import { BsArrowRight } from "react-icons/bs";
// import { TfiTimer } from "react-icons/tfi";

// const Form1 = ({ formData, handleChange, nextForm }) => {
//  const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSeconds(prevSeconds => prevSeconds + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const timerDuration = 30 * 60; // 30 minutes

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setSeconds(0);
// nextForm();
//     }, timerDuration * 1000);

//     return () => clearTimeout(timeout);
//   }, [nextForm, timerDuration]);

//   const formatTime = (timeInSeconds) => {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = timeInSeconds % 60;
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };


//   return (
 
//     <form
            
//             action="https://docs.google.com/forms/d/e/1FAIpQLSfMSJ6Ly-Oh8RrSTtLMgeKDH0iMO9IyIuFkeLpoun6c3StLjg/formResponse"
//             method="post"
           
//           >
//            <div  className='timer'><TfiTimer className='timerIcon'/> {formatTime(timerDuration - seconds)}</div>
//              <fieldset>
//             <label htmlFor='entry.104871724' className='question'>On a scale of 1 to 5, how much do you agree with the statement: "I enjoy meeting new people and socializing at events?  </label>

//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Strongly disagree"><input id="entry.104871724" type="radio" name="entry.104871724" value="Strongly disagree" onChange={handleChange} /> Strongly disagree</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Disagree"><input id="entry.104871724" type="radio" name="entry.104871724" value="Disagree"  onChange={handleChange}/> Disagree</label>
//           </div>
           
//       <div  className='answer'>
//            <label htmlFor="Neutral"><input id="entry.104871724" type="radio" name="entry.104871724" value="Neutral" onChange={handleChange}/> Neutral</label>
//       </div>
//    <div  className='answer'>
//   <label htmlFor="Agree"><input id="entry.104871724" type="radio" name="entry.104871724" value="Agree" onChange={handleChange} /> Agree</label>
//    </div>
//             <div className='answer'>
//     <label htmlFor="Strongly agree"><input id="entry.104871724" type="radio" name="entry.104871724" value="Strongly agree" onChange={handleChange}/> Strongly agree</label>
//             </div>
          
//          </div>
      
//           </fieldset>

//          <fieldset>
//             <label htmlFor='entry.470892165' className='question'>Do you prefer working alone or in a team?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Alone"><input id="entry.470892165" type="radio" name="entry.470892165" value="Alone"  onChange={handleChange}/> Alone</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="In a team"><input id="entry.470892165" type="radio" name="entry.470892165" value="In a team"  onChange={handleChange}/> In a team</label>
//           </div>
           
    
//          </div>
      
//           </fieldset>
//            <fieldset>
//             <label htmlFor='entry.499498185' className='question'>How organized do you consider yourself to be in your daily life?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Very disorganized"><input id="entry.499498185" type="radio" name="entry.499498185" value="Very disorganized" onChange={handleChange} /> Very disorganized</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Somewhat disorganized"><input id="entry.499498185" type="radio" name="entry.499498185" value="Somewhat disorganized" onChange={handleChange}/> Somewhat disorganized</label>
//           </div>
           
//       <div  className='answer'>
//            <label htmlFor="Neither organized nor disorganized"><input id="entry.499498185" type="radio" name="entry.499498185" value="Neither organized nor disorganized" onChange={handleChange}/> Neither organized nor disorganized</label>
//       </div>
//    <div  className='answer'>
//   <label htmlFor="Somewhat organized"><input id="entry.499498185" type="radio" name="entry.499498185" value="Somewhat organized" onChange={handleChange}/> Somewhat organized</label>
//    </div>
//             <div className='answer'>
//     <label htmlFor="Very organized"><input id="entry.499498185" type="radio" name="entry.499498185" value="Very organized" onChange={handleChange}/> Very organized</label>
//             </div>
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.702402297' className='question'>When faced with a problem, do you prefer to tackle it head-on or take time to analyze the situation first?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Tackle it head-on"><input id="entry.702402297" type="radio" name="entry.702402297" value="Tackle it head-on" onChange={handleChange}/> Tackle it head-on</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Take time to analyze the situation first"><input id="entry.702402297" type="radio" name="entry.702402297" value="Take time to analyze the situation first" onChange={handleChange}/> Take time to analyze the situation first</label>
//           </div>
           
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.151653220' className='question'>Are you more likely to trust your intuition or rely on factual evidence when making decisions?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Trust intuition"><input id="entry.151653220" type="radio" name="entry.151653220" value="Trust intuition" onChange={handleChange}/> Trust intuition</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Rely on factual evidence."><input id="entry.151653220" type="radio" name="entry.151653220" value="Rely on factual evidence." onChange={handleChange}/> Rely on factual evidence.</label>
//           </div>
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.1095183448' className='question'>When faced with a complex technical problem, do you prefer to:</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Dive right in and experiment with different solutions."><input id="entry.1095183448" type="radio" name="entry.1095183448" value="Dive right in and experiment with different solutions." onChange={handleChange} /> Dive right in and experiment with different solutions.</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Take a step back and analyze the problem thoroughly before taking action."><input id="entry.1095183448" type="radio" name="entry.1095183448" value="Take a step back and analyze the problem thoroughly before taking action." onChange={handleChange} /> Take a step back and analyze the problem thoroughly before taking action.</label>
//           </div>
      
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.1706647842' className='question'>In a team project, do you typically take on the role of:</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="The leader who delegates tasks and ensures the project stays on track."><input id="entry.1706647842" type="radio" name="entry.1706647842" value="The leader who delegates tasks and ensures the project stays on track." onChange={handleChange}/> The leader who delegates tasks and ensures the project stays on track.</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="The collaborator who contributes ideas and supports team members in their tasks."><input id="entry.1706647842" type="radio" name="entry.1706647842" value="The collaborator who contributes ideas and supports team members in their tasks."  onChange={handleChange}/> The collaborator who contributes ideas and supports team members in their tasks.</label>
//           </div>
          
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.1590385264' className='question'>How do you approach learning new technical skills?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Through hands-on experimentation and trial-and-error"><input id="entry.1590385264" type="radio" name="entry.1590385264" value="Through hands-on experimentation and trial-and-error" onChange={handleChange}/> Through hands-on experimentation and trial-and-error</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Through structured courses and step-by-step tutorials."><input id="entry.1590385264" type="radio" name="entry.1590385264" value="Through structured courses and step-by-step tutorials." onChange={handleChange}/> Through structured courses and step-by-step tutorials.</label>
//           </div>
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.2004614173' className='question'>When working on a challenging coding task, how do you handle setbacks or bugs?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Persistently troubleshoot until finding a solution."><input id="entry.2004614173" type="radio" name="entry.2004614173" value="Persistently troubleshoot until finding a solution." onChange={handleChange}/> Persistently troubleshoot until finding a solution.</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Seek assistance or collaborate with others to overcome the obstacle."><input id="entry.2004614173" type="radio" name="entry.2004614173" value="Seek assistance or collaborate with others to overcome the obstacle." onChange={handleChange} /> Seek assistance or collaborate with others to overcome the obstacle.</label>
//           </div>
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.91896165' className='question'>When working on a team project, how do you handle disagreements or conflicts?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Address the issue directly and work towards finding a resolution."><input id="entry.91896165" type="radio" name="entry.91896165" value="Address the issue directly and work towards finding a resolution." onChange={handleChange} /> Address the issue directly and work towards finding a resolution.</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Step back and allow others to resolve the conflict while focusing on your tasks."><input id="entry.91896165" type="radio" name="entry.91896165" value="Step back and allow others to resolve the conflict while focusing on your tasks." onChange={handleChange} /> Step back and allow others to resolve the conflict while focusing on your tasks.</label>
//           </div>
       
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.802351486' className='question'>How do you prioritize tasks when working on multiple projects simultaneously?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="By assessing deadlines and importance to determine the order of tasks."><input id="entry.802351486" type="radio" name="entry.802351486" value="By assessing deadlines and importance to determine the order of tasks." onChange={handleChange}/> By assessing deadlines and importance to determine the order of tasks.</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="By focusing on tasks that align with your interests and strengths first."><input id="entry.802351486" type="radio" name="entry.802351486" value="By focusing on tasks that align with your interests and strengths first." onChange={handleChange}/> By focusing on tasks that align with your interests and strengths first.</label>
//           </div>
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.1162863195' className='question'>When working on a team project, what role do you naturally gravitate towards?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="The problem solver who identifies and addresses technical challenges."><input id="entry.1162863195" type="radio" name="entry.1162863195" value="The problem solver who identifies and addresses technical challenges." onChange={handleChange}/> The problem solver who identifies and addresses technical challenges.</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="The collaborator who facilitates communication and coordination among team members."><input id="entry.1162863195" type="radio" name="entry.1162863195" value="The collaborator who facilitates communication and coordination among team members." onChange={handleChange}/> The collaborator who facilitates communication and coordination among team members.</label>
//           </div>
           
    
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.142914211' className='question'>How do you typically recharge after a long day or week of work?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="By spending time alone, engaging in quiet activities like reading or listening to music."><input id="entry.142914211" type="radio" name="entry.142914211" value="By spending time alone, engaging in quiet activities like reading or listening to music." onChange={handleChange}/> By spending time alone, engaging in quiet activities like reading or listening to music.</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="By socializing with friends or participating in group activities to unwind."><input id="entry.142914211" type="radio" name="entry.142914211" value="By socializing with friends or participating in group activities to unwind." onChange={handleChange}/> By socializing with friends or participating in group activities to unwind.</label>
//           </div>
          
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.1353723009' className='question'>When working on a team project, do you prefer to:</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Take on individual tasks and work independently to achieve the project goals."><input id="entry.1353723009" type="radio" name="entry.1353723009" value="Take on individual tasks and work independently to achieve the project goals." onChange={handleChange}/> Take on individual tasks and work independently to achieve the project goals.</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Collaborate closely with team members, discussing ideas and sharing responsibilities"><input id="entry.1353723009" type="radio" name="entry.1353723009" value="Collaborate closely with team members, discussing ideas and sharing responsibilities" onChange={handleChange}/> Collaborate closely with team members, discussing ideas and sharing responsibilities</label>
//           </div>
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.78650999' className='question'>How do you feel about public speaking or presenting in front of a group?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Uncomfortable or nervous, preferring to avoid public speaking whenever possible."><input id="entry.78650999" type="radio" name="entry.78650999" value="Uncomfortable or nervous, preferring to avoid public speaking whenever possible." onChange={handleChange}/> Uncomfortable or nervous, preferring to avoid public speaking whenever possible.</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Comfortable and confident, enjoying the opportunity to share ideas and engage with an audience."><input id="entry.78650999" type="radio" name="entry.78650999" value="Comfortable and confident, enjoying the opportunity to share ideas and engage with an audience." onChange={handleChange}/> Comfortable and confident, enjoying the opportunity to share ideas and engage with an audience.</label>
//           </div>
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.413389923' className='question'>In social settings, do you tend to</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Listen more than you speak, preferring to observe and process information before contributing"><input id="entry.413389923" type="radio" name="entry.413389923" value="Listen more than you speak, preferring to observe and process information before contributing" onChange={handleChange}/> Listen more than you speak, preferring to observe and process information before contributing</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Initiate conversations and actively engage with others, enjoying the energy of social interactions."><input id="entry.413389923" type="radio" name="entry.413389923" value="Initiate conversations and actively engage with others, enjoying the energy of social interactions." onChange={handleChange} /> Initiate conversations and actively engage with others, enjoying the energy of social interactions.</label>
//           </div>
      
          
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.91028304' className='question'>When faced with a leadership opportunity, how do you approach the role?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="With caution, preferring to support others in leadership roles rather than take on the responsibility yourself."><input id="entry.91028304" type="radio" name="entry.91028304" value="With caution, preferring to support others in leadership roles rather than take on the responsibility yourself." onChange={handleChange}/> With caution, preferring to support others in leadership roles rather than take on the responsibility yourself.</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="With enthusiasm, embracing the challenge and actively seeking opportunities to lead and make decisions"><input id="entry.91028304" type="radio" name="entry.91028304" value="With enthusiasm, embracing the challenge and actively seeking opportunities to lead and make decisions" onChange={handleChange}/> With enthusiasm, embracing the challenge and actively seeking opportunities to lead and make decisions</label>
//           </div>
        
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.65049058' className='question'>How do you prefer to communicate with team members or colleagues?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Through written communication channels like email or messaging apps, allowing for thoughtful consideration of responses."><input id="entry.65049058" type="radio" name="entry.65049058" value="Through written communication channels like email or messaging apps, allowing for thoughtful consideration of responses." onChange={handleChange}/> Through written communication channels like email or messaging apps, allowing for thoughtful consideration of responses.</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Through verbal communication channels like phone calls or face-to-face meetings, facilitating real-time interaction and collaboration."><input id="entry.65049058" type="radio" name="entry.65049058" value="Through verbal communication channels like phone calls or face-to-face meetings, facilitating real-time interaction and collaboration." onChange={handleChange}/> Through verbal communication channels like phone calls or face-to-face meetings, facilitating real-time interaction and collaboration.</label>
//           </div>
    
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.1452749410' className='question'>How do you approach networking or building professional relationships?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="Selectively, preferring to build deeper connections with a few individuals rather than engaging in large networking events."><input id="entry.1452749410" type="radio" name="entry.1452749410" value="Selectively, preferring to build deeper connections with a few individuals rather than engaging in large networking events." onChange={handleChange}/> Selectively, preferring to build deeper connections with a few individuals rather than engaging in large networking events.</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="Proactively, enjoying the opportunity to meet new people and expand your professional network through various events and activities."><input id="entry.1452749410" type="radio" name="entry.1452749410" value="Proactively, enjoying the opportunity to meet new people and expand your professional network through various events and activities." onChange={handleChange}/> Proactively, enjoying the opportunity to meet new people and expand your professional network through various events and activities.</label>
//           </div>
        
//          </div>
      
//           </fieldset> <fieldset>
//             <label htmlFor='entry.891863068' className='question'>How do you feel about solving complex problems using logical reasoning and algorithms?</label>
            
//          <div className='answerContainer'>
//   <div className='answer'>
//  <label htmlFor="I enjoy the challenge and find satisfaction in solving problems logically."><input id="entry.891863068" type="radio" name="entry.891863068" value="I enjoy the challenge and find satisfaction in solving problems logically." onChange={handleChange} /> I enjoy the challenge and find satisfaction in solving problems logically.</label>
//         </div>
//           <div className='answer'>
//    <label htmlFor="I prefer tasks that involve creativity and innovation rather than strict logic."><input id="entry.891863068" type="radio" name="entry.891863068" value="I prefer tasks that involve creativity and innovation rather than strict logic." onChange={handleChange}/> I prefer tasks that involve creativity and innovation rather than strict logic.</label>
//           </div>
       
//          </div>
      
//           </fieldset> 
          

           
//       <button type="button" onClick={nextForm} className='FormBtn'>Next  <BsArrowRight className="icon" /></button>
//     </form>
//   );
// };

// export default Form1;




import React, { useState, useEffect } from 'react';
import '../styles/Form.css'
import { BsArrowRight } from "react-icons/bs";
import { TfiTimer } from "react-icons/tfi";

const Form1 = ({ formData, handleChange, nextForm, setFormCompleted }) => {
 const [seconds, setSeconds] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerDuration = 30 * 60; // 30 minutes

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

 const handleNext = () => {
    // Perform any validation or processing if needed before moving to the next form
    setFormCompleted(); // Mark Form1 as completed
    nextForm({ form1: formData }); // Move to the next form and pass form data
  };

  return (
 
    <form
            
            action="https://docs.google.com/forms/d/e/1FAIpQLSfMSJ6Ly-Oh8RrSTtLMgeKDH0iMO9IyIuFkeLpoun6c3StLjg/formResponse"
            method="post"
           
          >
           <div  className='timer'><TfiTimer className='timerIcon'/> {formatTime(timerDuration - seconds)}</div>
             <fieldset>
            <label htmlFor='entry.104871724' className='question'>On a scale of 1 to 5, how much do you agree with the statement: "I enjoy meeting new people and socializing at events?  </label>

         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Strongly disagree"><input id="entry.104871724" type="radio" name="entry.104871724" value="Strongly disagree" onChange={handleChange} /> Strongly disagree</label>
        </div>
          <div className='answer'>
   <label htmlFor="Disagree"><input id="entry.104871724" type="radio" name="entry.104871724" value="Disagree"  onChange={handleChange}/> Disagree</label>
          </div>
           
      <div  className='answer'>
           <label htmlFor="Neutral"><input id="entry.104871724" type="radio" name="entry.104871724" value="Neutral" onChange={handleChange}/> Neutral</label>
      </div>
   <div  className='answer'>
  <label htmlFor="Agree"><input id="entry.104871724" type="radio" name="entry.104871724" value="Agree" onChange={handleChange} /> Agree</label>
   </div>
            <div className='answer'>
    <label htmlFor="Strongly agree"><input id="entry.104871724" type="radio" name="entry.104871724" value="Strongly agree" onChange={handleChange}/> Strongly agree</label>
            </div>
          
         </div>
      
          </fieldset>

         <fieldset>
            <label htmlFor='entry.470892165' className='question'>Do you prefer working alone or in a team?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Alone"><input id="entry.470892165" type="radio" name="entry.470892165" value="Alone"  onChange={handleChange}/> Alone</label>
        </div>
          <div className='answer'>
   <label htmlFor="In a team"><input id="entry.470892165" type="radio" name="entry.470892165" value="In a team"  onChange={handleChange}/> In a team</label>
          </div>
           
    
         </div>
      
          </fieldset>
           <fieldset>
            <label htmlFor='entry.499498185' className='question'>How organized do you consider yourself to be in your daily life?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Very disorganized"><input id="entry.499498185" type="radio" name="entry.499498185" value="Very disorganized" onChange={handleChange} /> Very disorganized</label>
        </div>
          <div className='answer'>
   <label htmlFor="Somewhat disorganized"><input id="entry.499498185" type="radio" name="entry.499498185" value="Somewhat disorganized" onChange={handleChange}/> Somewhat disorganized</label>
          </div>
           
      <div  className='answer'>
           <label htmlFor="Neither organized nor disorganized"><input id="entry.499498185" type="radio" name="entry.499498185" value="Neither organized nor disorganized" onChange={handleChange}/> Neither organized nor disorganized</label>
      </div>
   <div  className='answer'>
  <label htmlFor="Somewhat organized"><input id="entry.499498185" type="radio" name="entry.499498185" value="Somewhat organized" onChange={handleChange}/> Somewhat organized</label>
   </div>
            <div className='answer'>
    <label htmlFor="Very organized"><input id="entry.499498185" type="radio" name="entry.499498185" value="Very organized" onChange={handleChange}/> Very organized</label>
            </div>
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.702402297' className='question'>When faced with a problem, do you prefer to tackle it head-on or take time to analyze the situation first?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Tackle it head-on"><input id="entry.702402297" type="radio" name="entry.702402297" value="Tackle it head-on" onChange={handleChange}/> Tackle it head-on</label>
        </div>
          <div className='answer'>
   <label htmlFor="Take time to analyze the situation first"><input id="entry.702402297" type="radio" name="entry.702402297" value="Take time to analyze the situation first" onChange={handleChange}/> Take time to analyze the situation first</label>
          </div>
           
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.151653220' className='question'>Are you more likely to trust your intuition or rely on factual evidence when making decisions?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Trust intuition"><input id="entry.151653220" type="radio" name="entry.151653220" value="Trust intuition" onChange={handleChange}/> Trust intuition</label>
        </div>
          <div className='answer'>
   <label htmlFor="Rely on factual evidence."><input id="entry.151653220" type="radio" name="entry.151653220" value="Rely on factual evidence." onChange={handleChange}/> Rely on factual evidence.</label>
          </div>
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.1095183448' className='question'>When faced with a complex technical problem, do you prefer to:</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Dive right in and experiment with different solutions."><input id="entry.1095183448" type="radio" name="entry.1095183448" value="Dive right in and experiment with different solutions." onChange={handleChange} /> Dive right in and experiment with different solutions.</label>
        </div>
          <div className='answer'>
   <label htmlFor="Take a step back and analyze the problem thoroughly before taking action."><input id="entry.1095183448" type="radio" name="entry.1095183448" value="Take a step back and analyze the problem thoroughly before taking action." onChange={handleChange} /> Take a step back and analyze the problem thoroughly before taking action.</label>
          </div>
      
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.1706647842' className='question'>In a team project, do you typically take on the role of:</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="The leader who delegates tasks and ensures the project stays on track."><input id="entry.1706647842" type="radio" name="entry.1706647842" value="The leader who delegates tasks and ensures the project stays on track." onChange={handleChange}/> The leader who delegates tasks and ensures the project stays on track.</label>
        </div>
          <div className='answer'>
   <label htmlFor="The collaborator who contributes ideas and supports team members in their tasks."><input id="entry.1706647842" type="radio" name="entry.1706647842" value="The collaborator who contributes ideas and supports team members in their tasks."  onChange={handleChange}/> The collaborator who contributes ideas and supports team members in their tasks.</label>
          </div>
          
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.1590385264' className='question'>How do you approach learning new technical skills?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Through hands-on experimentation and trial-and-error"><input id="entry.1590385264" type="radio" name="entry.1590385264" value="Through hands-on experimentation and trial-and-error" onChange={handleChange}/> Through hands-on experimentation and trial-and-error</label>
        </div>
          <div className='answer'>
   <label htmlFor="Through structured courses and step-by-step tutorials."><input id="entry.1590385264" type="radio" name="entry.1590385264" value="Through structured courses and step-by-step tutorials." onChange={handleChange}/> Through structured courses and step-by-step tutorials.</label>
          </div>
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.2004614173' className='question'>When working on a challenging coding task, how do you handle setbacks or bugs?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Persistently troubleshoot until finding a solution."><input id="entry.2004614173" type="radio" name="entry.2004614173" value="Persistently troubleshoot until finding a solution." onChange={handleChange}/> Persistently troubleshoot until finding a solution.</label>
        </div>
          <div className='answer'>
   <label htmlFor="Seek assistance or collaborate with others to overcome the obstacle."><input id="entry.2004614173" type="radio" name="entry.2004614173" value="Seek assistance or collaborate with others to overcome the obstacle." onChange={handleChange} /> Seek assistance or collaborate with others to overcome the obstacle.</label>
          </div>
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.91896165' className='question'>When working on a team project, how do you handle disagreements or conflicts?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Address the issue directly and work towards finding a resolution."><input id="entry.91896165" type="radio" name="entry.91896165" value="Address the issue directly and work towards finding a resolution." onChange={handleChange} /> Address the issue directly and work towards finding a resolution.</label>
        </div>
          <div className='answer'>
   <label htmlFor="Step back and allow others to resolve the conflict while focusing on your tasks."><input id="entry.91896165" type="radio" name="entry.91896165" value="Step back and allow others to resolve the conflict while focusing on your tasks." onChange={handleChange} /> Step back and allow others to resolve the conflict while focusing on your tasks.</label>
          </div>
       
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.802351486' className='question'>How do you prioritize tasks when working on multiple projects simultaneously?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="By assessing deadlines and importance to determine the order of tasks."><input id="entry.802351486" type="radio" name="entry.802351486" value="By assessing deadlines and importance to determine the order of tasks." onChange={handleChange}/> By assessing deadlines and importance to determine the order of tasks.</label>
        </div>
          <div className='answer'>
   <label htmlFor="By focusing on tasks that align with your interests and strengths first."><input id="entry.802351486" type="radio" name="entry.802351486" value="By focusing on tasks that align with your interests and strengths first." onChange={handleChange}/> By focusing on tasks that align with your interests and strengths first.</label>
          </div>
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.1162863195' className='question'>When working on a team project, what role do you naturally gravitate towards?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="The problem solver who identifies and addresses technical challenges."><input id="entry.1162863195" type="radio" name="entry.1162863195" value="The problem solver who identifies and addresses technical challenges." onChange={handleChange}/> The problem solver who identifies and addresses technical challenges.</label>
        </div>
          <div className='answer'>
   <label htmlFor="The collaborator who facilitates communication and coordination among team members."><input id="entry.1162863195" type="radio" name="entry.1162863195" value="The collaborator who facilitates communication and coordination among team members." onChange={handleChange}/> The collaborator who facilitates communication and coordination among team members.</label>
          </div>
           
    
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.142914211' className='question'>How do you typically recharge after a long day or week of work?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="By spending time alone, engaging in quiet activities like reading or listening to music."><input id="entry.142914211" type="radio" name="entry.142914211" value="By spending time alone, engaging in quiet activities like reading or listening to music." onChange={handleChange}/> By spending time alone, engaging in quiet activities like reading or listening to music.</label>
        </div>
          <div className='answer'>
   <label htmlFor="By socializing with friends or participating in group activities to unwind."><input id="entry.142914211" type="radio" name="entry.142914211" value="By socializing with friends or participating in group activities to unwind." onChange={handleChange}/> By socializing with friends or participating in group activities to unwind.</label>
          </div>
          
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.1353723009' className='question'>When working on a team project, do you prefer to:</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Take on individual tasks and work independently to achieve the project goals."><input id="entry.1353723009" type="radio" name="entry.1353723009" value="Take on individual tasks and work independently to achieve the project goals." onChange={handleChange}/> Take on individual tasks and work independently to achieve the project goals.</label>
        </div>
          <div className='answer'>
   <label htmlFor="Collaborate closely with team members, discussing ideas and sharing responsibilities"><input id="entry.1353723009" type="radio" name="entry.1353723009" value="Collaborate closely with team members, discussing ideas and sharing responsibilities" onChange={handleChange}/> Collaborate closely with team members, discussing ideas and sharing responsibilities</label>
          </div>
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.78650999' className='question'>How do you feel about public speaking or presenting in front of a group?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Uncomfortable or nervous, preferring to avoid public speaking whenever possible."><input id="entry.78650999" type="radio" name="entry.78650999" value="Uncomfortable or nervous, preferring to avoid public speaking whenever possible." onChange={handleChange}/> Uncomfortable or nervous, preferring to avoid public speaking whenever possible.</label>
        </div>
          <div className='answer'>
   <label htmlFor="Comfortable and confident, enjoying the opportunity to share ideas and engage with an audience."><input id="entry.78650999" type="radio" name="entry.78650999" value="Comfortable and confident, enjoying the opportunity to share ideas and engage with an audience." onChange={handleChange}/> Comfortable and confident, enjoying the opportunity to share ideas and engage with an audience.</label>
          </div>
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.413389923' className='question'>In social settings, do you tend to</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Listen more than you speak, preferring to observe and process information before contributing"><input id="entry.413389923" type="radio" name="entry.413389923" value="Listen more than you speak, preferring to observe and process information before contributing" onChange={handleChange}/> Listen more than you speak, preferring to observe and process information before contributing</label>
        </div>
          <div className='answer'>
   <label htmlFor="Initiate conversations and actively engage with others, enjoying the energy of social interactions."><input id="entry.413389923" type="radio" name="entry.413389923" value="Initiate conversations and actively engage with others, enjoying the energy of social interactions." onChange={handleChange} /> Initiate conversations and actively engage with others, enjoying the energy of social interactions.</label>
          </div>
      
          
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.91028304' className='question'>When faced with a leadership opportunity, how do you approach the role?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="With caution, preferring to support others in leadership roles rather than take on the responsibility yourself."><input id="entry.91028304" type="radio" name="entry.91028304" value="With caution, preferring to support others in leadership roles rather than take on the responsibility yourself." onChange={handleChange}/> With caution, preferring to support others in leadership roles rather than take on the responsibility yourself.</label>
        </div>
          <div className='answer'>
   <label htmlFor="With enthusiasm, embracing the challenge and actively seeking opportunities to lead and make decisions"><input id="entry.91028304" type="radio" name="entry.91028304" value="With enthusiasm, embracing the challenge and actively seeking opportunities to lead and make decisions" onChange={handleChange}/> With enthusiasm, embracing the challenge and actively seeking opportunities to lead and make decisions</label>
          </div>
        
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.65049058' className='question'>How do you prefer to communicate with team members or colleagues?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Through written communication channels like email or messaging apps, allowing for thoughtful consideration of responses."><input id="entry.65049058" type="radio" name="entry.65049058" value="Through written communication channels like email or messaging apps, allowing for thoughtful consideration of responses." onChange={handleChange}/> Through written communication channels like email or messaging apps, allowing for thoughtful consideration of responses.</label>
        </div>
          <div className='answer'>
   <label htmlFor="Through verbal communication channels like phone calls or face-to-face meetings, facilitating real-time interaction and collaboration."><input id="entry.65049058" type="radio" name="entry.65049058" value="Through verbal communication channels like phone calls or face-to-face meetings, facilitating real-time interaction and collaboration." onChange={handleChange}/> Through verbal communication channels like phone calls or face-to-face meetings, facilitating real-time interaction and collaboration.</label>
          </div>
    
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.1452749410' className='question'>How do you approach networking or building professional relationships?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="Selectively, preferring to build deeper connections with a few individuals rather than engaging in large networking events."><input id="entry.1452749410" type="radio" name="entry.1452749410" value="Selectively, preferring to build deeper connections with a few individuals rather than engaging in large networking events." onChange={handleChange}/> Selectively, preferring to build deeper connections with a few individuals rather than engaging in large networking events.</label>
        </div>
          <div className='answer'>
   <label htmlFor="Proactively, enjoying the opportunity to meet new people and expand your professional network through various events and activities."><input id="entry.1452749410" type="radio" name="entry.1452749410" value="Proactively, enjoying the opportunity to meet new people and expand your professional network through various events and activities." onChange={handleChange}/> Proactively, enjoying the opportunity to meet new people and expand your professional network through various events and activities.</label>
          </div>
        
         </div>
      
          </fieldset> <fieldset>
            <label htmlFor='entry.891863068' className='question'>How do you feel about solving complex problems using logical reasoning and algorithms?</label>
            
         <div className='answerContainer'>
  <div className='answer'>
 <label htmlFor="I enjoy the challenge and find satisfaction in solving problems logically."><input id="entry.891863068" type="radio" name="entry.891863068" value="I enjoy the challenge and find satisfaction in solving problems logically." onChange={handleChange} /> I enjoy the challenge and find satisfaction in solving problems logically.</label>
        </div>
          <div className='answer'>
   <label htmlFor="I prefer tasks that involve creativity and innovation rather than strict logic."><input id="entry.891863068" type="radio" name="entry.891863068" value="I prefer tasks that involve creativity and innovation rather than strict logic." onChange={handleChange}/> I prefer tasks that involve creativity and innovation rather than strict logic.</label>
          </div>
       
         </div>
      
          </fieldset> 
          

           
      <button type="button" onClick={handleNext} className='FormBtn'>Next  <BsArrowRight className="icon" /></button>
    </form>
  );
};

export default Form1;