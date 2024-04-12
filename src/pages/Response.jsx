import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import logo from '../asset/TECHiQ (3).png'
import { useAuth } from '../Contexts/AuthContext';

const Response = () => {
   const { logout } = useAuth(); 
      const navigate = useNavigate();
   

        const HandleBack = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
   
  };
  return (
    <div className="overviewPageContainer">
      <div className="overviewPageInnerContainer">
        <div className="overviewFormContainer">
          <div className="overviewFormInnerContainer">
            <img src={logo} alt="" className='overviewLogo'/>
            <div className="overviewheader">
<FaCircleCheck  style={{fontSize:'50px',marginBottom:'10px'}}/>
                <h2>Well done!</h2>
       <p style={{textAlign:'center'}}>Congratulations on completing the psychometric test
        <br />We are thrilled to be part of your journey <br />towards self-awareness and success.
       </p>
<button className='overviewButton' onClick={HandleBack}>Go Back</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Response