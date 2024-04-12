

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
  const { login, isAuthenticated,user,isAdmin,isRegularUser } = useAuth();
  const auth = useAuth();
  const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       if (auth.user) {
//         if (auth.user.email  === 'admin@gmail.com') {
//           navigate('/adminDashboard');
//         } else {
//           navigate('/overview');
//         }
//       }
//       else{
//             //  navigate('/');
//               setError('Login failed. Please check email and password and  try again.');
//       }
//    } catch (error) {
//   console.error('Error during login:', error);
//   setError('Login failed. Please try again.');
// }

//   };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         // Attempt to log in with the provided email and password
//         await login(email, password);

//         // Wait for authentication to complete
//         const currentUser = user;

//         if (currentUser) {
//             // If a user is logged in, determine their role
//             if (isAdmin()) {
//                 navigate('/adminDashboard');
//             } else if (isRegularUser()) {
//                 navigate('/overview');
//             } else {
//                 // Handle unexpected roles
//                 setError('Unknown user role. Please contact support.');
//             }
//         } else {
//             // If no user is logged in, show login error
//             setError('Login failed. Please check email and password and try again.');
//         }
//     } catch (error) {
//         console.error('Error during login:', error);
//         setError('Login failed. Please try again.');
//     }
// };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("Logging in...");
        await login(email, password);
         console.log("User after login:", auth.user);
        console.log("Is authenticated:", isAuthenticated());
        console.log("Is admin:", isAdmin());
        console.log("Is regular user:", isRegularUser());
        
        // Check if the user is authenticated
        if (auth.user && isAuthenticated()) {
            // Check if the user is an admin
            if (isAdmin()) {
                navigate('/adminDashboard');
            } else if (isRegularUser()) {
                navigate('/overview');
            } else {
                // Handle unexpected roles
                setError('Unknown user role. Please contact support.');
            }
        } else {
            // Handle authentication failure
            setError('Login failed. Please check email and password and try again.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        setError('Login failed. Please try again.');
    }
};



//  const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { role } = await login(email, password);
//            console.log("User after login:", auth.user);
//         console.log("Is authenticated:", isAuthenticated());
//         console.log("Is admin:", isAdmin());
//         console.log("Is regular user:", isRegularUser());
//       if (role === 'admin') {
//         navigate('/adminDashboard');
//       } else if (role === 'regular') {
//         navigate('/overview');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//         setError('Login failed. Please check email and password and try again.');
//     }
//   };
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
