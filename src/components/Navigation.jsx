

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import '../styles/Navigation.css';
import Logo from '../asset/TECHiQ (3).png';
import { RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
      const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
    const handleJoin = () => {
    navigate('/signin');
  };
// const HandleAbout=()=>{
//   navigate('/about');
// }

  return (
    <nav className="nav">
      <div className="nav-title">
        <img src={Logo} alt="Logo" className="logoImg" />
      </div>
      <div className="nav-btn" onClick={toggleNav}>
        <IoIosMenu />
      </div>
      <ul className={`nav-list ${showNav ? 'show' : ''}`}>
        <li><Link to="#" className="navLink active" onClick={() => smoothScrollTo('home')}>Home</Link></li>
        {/* <li><Link to="#" className='navLink' onClick={() => smoothScrollTo('about')}>About us</Link></li> */}
            {/* <li><Link to="#" className='navLink' onClick={HandleAbout}>About us</Link></li> */}
        <li>
          <span className='navLink' onClick={toggleDropdown}>Assessments <RiArrowDownSLine /></span>
          <ul className={`dropdown ${showDropdown ? 'show' : ''}`}>
            <li><Link to="#" onClick={() =>{} }>Assessment 1</Link></li>
            <li><Link to="#" onClick={() =>{} }>Assessment 2</Link></li>
                 <li><Link to="#" onClick={() =>{} }>Assessment 3</Link></li>
         
          </ul>
        </li>
        <li><Link to="#" className='navLink' onClick={() => smoothScrollTo('faq')}>FAQs</Link></li>
        {/* <li><Link to="#" className='navLink' onClick={() => smoothScrollTo('contact')}>Contact Us</Link></li> */}
<li><Link to="/contact" className='navLink'>Contact Us</Link></li>

        <button className='ctaBtn' onClick={handleJoin}>Get started</button>
      </ul>
    </nav>
  );
}

export default Navigation;
