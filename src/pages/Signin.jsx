

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import '../styles/Signin.css';
import logo from '../asset/TECHiQ (3).png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';


const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const [error, setError] = useState('');

const handleSignin = async (e) => {
  e.preventDefault();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    // Redirect based on the role
    if (userCredential.user.email === 'admin@gmail.com') {
      navigate('/adminDashboard');
    } else if (userCredential.user) {
      navigate('/overview');
    } else {
      setError('Unknown user. Please contact support.');
    }
  } catch (error) {
    console.error('Error during login:', error);
    setError('Login failed. Please try again.');
  }
};

  const handleReset = () => {
    navigate('/ResetPassword');
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="LoginPageContainer">
   <div className="LoginPageInnerContainer">
        <div className="LoginFormContainer">
          <div className="LoginFormInnerContainer">
            <img src={logo} alt="" className='formLogo'/>
            <div className="Signinformheader">
              <h3 style={{textAlign:'left'}}>Welcome , Fellow</h3>
              <h6>Enter your email address and password to access your personalized learning portal.</h6>
            </div>
            <form onSubmit={ handleSignin}>
              <div className="inputContainer">
                <label htmlFor="email">
                  <span>Email Address</span>
                </label>
                <div className="inputIcon">
                  <input
                    type="email"
                    className="input"
                    id="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <CiMail className="icons" alt="Email Icon" />
                </div>
              </div>
              <div className="inputContainer">
                <label htmlFor="password">
                  <span>Password</span>
                </label>
                <div className="inputIcon">
                  <input
                    type={showPassword ? "text" : "password"} 
                    className="input"
                    id="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {showPassword ? (
                     <FaRegEye className="icons" alt="Show Password Icon" onClick={togglePasswordVisibility} />
                  ) : (
                     <FaRegEyeSlash className="icons" alt="Hide Password Icon" onClick={togglePasswordVisibility} />
                  )}
                </div>
              </div>
              <div className="OptionsContainer">
                <div className="checkboxContainer">
                  <input type="checkbox" id="RememberMe" className="checkbox" />
                  <label htmlFor="RememberMe">Remember me</label>
                </div>
                <Link to="/ResetPassword" className="SignInLink" onClick={handleReset}>
                  Forgot Password?
                </Link>
              </div>
                      {error && <div className="error-message">{error}</div>}
              <button type="submit" className="LoginButton">
                Login
              </button>
           

            </form>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
