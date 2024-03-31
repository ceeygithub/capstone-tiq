import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import '../styles/Navigation.css';
import Logo from '../asset/TECHiQ (3).png';

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="nav">
   
        <div className="nav-title">
          <img src={Logo} alt="Logo" className="logoImg" />
        </div>
    
      <div className="nav-btn" onClick={toggleNav}>
        <IoIosMenu />
      </div>
      <ul className={`nav-list ${showNav ? 'show' : ''}`}>
       <li><Link to="#" className="navLink active">Home</Link></li>

        <li><Link to="#" className='navLink'>About us</Link></li>
        <li><Link to="#" className='navLink'>Assement</Link></li>
         <li><Link to="#" className='navLink'>FAQs</Link></li>
            <li><Link to="#" className='navLink'>Contact Us</Link></li>
           {/* <li><Link to="#" className='ctaBtn navLink' type='button'>Get started</Link></li> */}
   <button className='ctaBtn'>Get started</button>
      </ul>
   
    </nav>
  );
}

export default Navigation;
