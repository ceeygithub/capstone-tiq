import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa"; // Import the eye and eye slash icons
import '../styles/Signin.css'
import logo from '../asset/TECHiQ (3).png'

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform validation here before navigating
    if (email === 'admin@gmail.com' && password === 'admin') {
      navigate('/adminDashboard');
    } else {
      navigate('/overview');
    }
  };

  const handleReset = () => {
    // Implement your logic for resetting password
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="LoginPageContainer">
      <div className="LoginPageInnerContainer">
        <div className="LoginFormContainer">
          <div className="LoginFormInnerContainer">
            <img src={logo} alt="" className='formLogo'/>
            <header className="formheader">
              <h3>Welcome back, Fellow</h3>
              <h6>Enter your email address and password to access your personalized learning portal.</h6>
            </header>
            <form onSubmit={handleSubmit}>
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
                    type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
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
              <button type="submit" className="LoginButton">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
