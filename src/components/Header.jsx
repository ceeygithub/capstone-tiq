import React from 'react';
import '../styles/Header.css'
import { useNavigate } from 'react-router-dom';
import Heroimg from '../asset/Hero image.png';

const Header = () => {
        const navigate = useNavigate();

  const handleJoin = () => {
    navigate('/signup');
  };
  return (
    <section className='about'>
      <div className="about-container">
        <div className="about-right">
             <h1 className='HeroHeader'>Uncover Your  <br/>Tech Potential</h1>
                <p className='heroParagraph'>We leverage a personalized psychometric assessment  <br/> to understand your unique strengths, learning <br/> preferences, and areas for  growth</p>
            <button className='joinBtn ' onClick={handleJoin}>Get started</button>
        </div>
        <div className="about-left">
          
          <img src={Heroimg} alt="Girl with laptop"  />
          
        </div>
      </div>
    </section>
  );
};

export default Header;
