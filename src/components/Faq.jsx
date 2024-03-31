// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Accordion from './Accordion';
// import faqcss from '../styles/Faq.module.css';

// const Faq = () => {
//     const navigate = useNavigate();

//     const handleJoin = () => {
//         navigate('/signup');
//     };

//     return (
//         <section className={faqcss.faq }>
//             <div className={faqcss.faqContainer}>
//                 <div className={faqcss.faqRight}>
//                     <h2 className={faqcss.faqHeader}>Frequently asked <br />questions</h2>
//                     <p className={faqcss.faqParagraph}>Get answers to frequently asked <br />questions about the Women in Tech<br /> Program's psychometric assessment</p>
//                     <button className={faqcss.joinBtn} onClick={handleJoin}>Get started</button>
//                 </div>
//                 <div className={faqcss.aboutLeft}>
//                     <Accordion />
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Faq;

// Faq.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from './Accordion';
import faqcss from '../styles/Faq.module.css';

const Faq = () => {
    const [containerHeight, setContainerHeight] = useState('auto'); // State to control container height
    const navigate = useNavigate();

    const handleJoin = () => {
        navigate('/signup');
    };

    const handleAccordionToggle = () => {
        setContainerHeight(containerHeight === 'auto' ? 'fit-content' : 'auto');
    };

    return (
        <section className={faqcss.faq } style={{ height: containerHeight }}> {/* Set inline style for container height */}
            <div className={faqcss.faqContainer}>
                <div className={faqcss.faqRight}>
                    <h2 className={faqcss.faqHeader}>Frequently asked <br />questions</h2>
                    <p className={faqcss.faqParagraph}>Get answers to frequently asked <br />questions about the Women in Tech<br /> Program's psychometric assessment</p>
                    <button className={faqcss.joinBtn} onClick={handleJoin}>Get started</button>
                </div>
                <div className={faqcss.faqLeft}>
                    <Accordion onToggle={handleAccordionToggle} />
                </div>
            </div>
        </section>
    );
}

export default Faq;
