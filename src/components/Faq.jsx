import React from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from './Accordion';
import faqcss from '../styles/Faq.module.css';

const Faq = ({ id }) => {
    const navigate = useNavigate();

    const handleJoin = () => {
        navigate('/signup');
    };

    return (
        <section className={faqcss.faq } id={id}>
            <div className={faqcss.faqContainer}>
                <div className={faqcss.faqRight}>
                    {/* <h2 className={faqcss.faqHeader}>Frequently asked <br />questions</h2> */}
                      <h2 className={faqcss.faqHeader}>Any question?</h2>
                    <p className={faqcss.faqParagraph}>Get answers to frequently asked <br />questions about the Women in Tech<br /> Program's psychometric assessment</p>
                    <button className={faqcss.joinBtn} onClick={handleJoin}>Ask Question</button>
                </div>
                <div className={faqcss.aboutLeft}>
                    <Accordion />
                </div>
            </div>
        </section>
    );
}

export default Faq;

