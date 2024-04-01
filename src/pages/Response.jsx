import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import logo from '../asset/TECHiQ (3).png'

const Response = () => {
      const navigate = useNavigate();
      const HandleBack = ()=>{
            navigate('/');
      }
  return (
    <div className="overviewPageContainer">
      <div className="overviewPageInnerContainer">
        <div className="overviewFormContainer">
          <div className="overviewFormInnerContainer">
            <img src={logo} alt="" className='overviewLogo'/>
            <header className="overviewheader">
<FaCircleCheck  style={{fontSize:'50px',marginBottom:'10px'}}/>
                <h2>Well done!</h2>
       <p style={{textAlign:'center'}}>Congratulations on completing the psychometric test
        <br />We are thrilled to be part of your journey <br />towards self-awareness and success.
       </p>
<button className='overviewButton' onClick={HandleBack}>Back</button>
            </header>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Response