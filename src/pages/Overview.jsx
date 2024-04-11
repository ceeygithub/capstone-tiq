import React from 'react'
import logo from '../asset/TECHiQ (3).png'
import { useNavigate } from 'react-router-dom';
import '../styles/Overview.css'
import { BsArrowRight } from "react-icons/bs";

const Overview = () => {
      const navigate = useNavigate();
      const HandleStart = ()=>{
            navigate('/formPage');
      }
  return (
 <div className="overviewPageContainer">
      <div className="overviewPageInnerContainer">
        <div className="overviewFormContainer">
          <div className="overviewFormInnerContainer">
            <img src={logo} alt="" className='overviewLogo'/>
            <div className="overviewheader">
       <p>Welcome to our psychometric assessment! This tool offers insights into your personality traits and strengths. Through a series of questions, gain a deeper understanding of yourself and how you interact with the world.
<br /><br /><br />
 Take your time, answer honestly, and embrace the opportunity to learn more about yourself.   
<br /><br /><br />
Your responses are confidential and used solely for your benefit. Let's begin!</p>
<button className='overviewButton' onClick={HandleStart}>Take Test <BsArrowRight className="icon" /></button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview