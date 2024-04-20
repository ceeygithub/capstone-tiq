

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import '../styles/Signin.css';
import logo from '../asset/TECHiQ (3).png';
import { useAuth } from '../Contexts/AuthContext';




const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, isAuthenticated,isAdmin,isRegularUser} = useAuth();
  //  const { login, getUserRole} = useAuth();

  const [error, setError] = useState('');

const handleSignin = async (e) => {
  e.preventDefault();
  // Access the email and password values from form fields
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    console.log('Logging in with email:', email);
    const user = await login(email, password); // Call the login function

    console.log('Is authenticated:', isAuthenticated());
    console.log('Is admin:', isAdmin());
    console.log('Is regular user:', isRegularUser());

    // Clear any previous error message
    setError('');

    // Redirect user based on role after successful login
  
      if ( user && email === 'admin@gmail.com') {
        navigate('/adminDashboard');
      } else if ( user && email === 'fausat@womentechsters.org') {
        navigate('/overview');
      } else {
        // Handle unexpected roles
        setError('Unknown user . Please contact support.');
      }

  } catch (error) {
    console.error('Error during login:', error);
    setError('Login failed. Please try again.');
  }
};



// const handleSubmit = async (e) => {
//   e.preventDefault();
//   // Access the email value from the form field
//   const email = e.target.email.value;
//   const password = e.target.email.value;
  
//   if (email === 'admin@gmail.com') {
//     navigate('/adminDashboard');
//   } else if (email === 'fausat@womentechsters.org' || email === 'chimaka.okeke@womentechsters.org') {
//     navigate('/overview');
//   } else {
//     // Handle unexpected email addresses
//     setError('Unknown user. Please contact support.');
//   }
// };



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
              <h3 style={{textAlign:'left'}}>Welcome back, Fellow</h3>
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
