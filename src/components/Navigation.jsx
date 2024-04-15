

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import Logo from '../asset/TECHiQ (3).png';
import { useNavigate } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { useAuth } from '../Contexts/AuthContext'; 
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoLayers } from "react-icons/io5";
import { CiLaptop } from "react-icons/ci";
import { FaCodeBranch } from "react-icons/fa";

const Navigation = () => {
    const auth = useAuth();
    const { isAdmin } = useAuth(); 
    const navigate = useNavigate();
    const [showNav, setShowNav] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const navPosition = isAdmin() ? 'fixed' : 'relative'; // Check if admin is logged in

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    const toggleDropdown = () => {
        setShowDropdown(prevState => !prevState);
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

    return (
        <nav className="nav" style={{ position: navPosition }}> {/* Apply fixed position conditionally */}
            <header className='container'>
                <div className={`nav-title ${isAdmin() ? 'adminLogo' : ''}`}>
                    <img src={Logo} alt="Logo" className="logoImg" />
                </div>
                <div className="nav-btn" onClick={toggleNav}>
                    <IoIosMenu />
                </div>
                {isAdmin() && (
                    <>
                        {auth.user && auth.user.email && <h3 className='welcomeMessage'>Welcome, Admin</h3>}
                    </>
                )}
                <ul className={`nav-list ${showNav ? 'show' : ''}`}>
                    {!isAdmin() && (
                        <li><Link to="#" className="navLink active" onClick={() => smoothScrollTo('home')}>Home</Link></li>
                    )}
                    {!isAdmin() && (
                        <li>
                            <span className='navLink' onClick={toggleDropdown}>Assessments</span>
                            <div className={`Navdropdown ${showDropdown ? 'show' : ''}`}>
                                <div className="assessment-item">
                                    <IoLayers />
                                    <div>
                                        <h3>Intelligence Test</h3>
                                        <p>Helps us understand your ability to learn new concepts and excel in a tech environment.</p>
                                    </div>
                                </div>
                                <div className="assessment-item">
                                    <CiLaptop />
                                    <div>
                                        <h3>Qalitative Inquiry</h3>
                                        <p>Measures your potential for success in fields like coding, data analysis, product design, cybersecurity etc </p>
                                    </div>
                                </div>
                                <div className="assessment-item">
                                    <FaCodeBranch />
                                    <div>
                                        <h3>Personality Test</h3>
                                        <p>Helps us personalize your program experience to match your learning style and goals.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                    {!isAdmin() && (
                        <li><Link to="#" className='navLink' onClick={() => smoothScrollTo('faq')}>FAQs</Link></li>
                    )}
                    {!isAdmin() && (
                        <li><Link to="/contact" className='navLink'>Contact Us</Link></li>
                    )}
                    {isAdmin() && (
                        <>
                            <IoIosNotificationsOutline  className='notification'/>
                            <li className="adminAvatar">
                                <img  className='adminAvatarImg' src="https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Admin Avatar" />
                            </li>
                        </>
                    )}
                    {!isAdmin() && (
                        <li>
                            <button className='ctaBtn' onClick={handleJoin}>Get started</button>
                        </li>
                    )}
                </ul>
            </header>
        </nav>
    );
};

export default Navigation;
