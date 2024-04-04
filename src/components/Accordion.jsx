
import React from 'react';
import '../styles/Accordion.css';

const Accordion = () => {
  return (
    <div className="accordion">
    <h1 style={{textAlign:'left'}}>Frequently Asked Questions</h1>
    <div className="accordion-item">
        <input type="checkbox" id="accordion1"/>
        <label htmlFor="accordion1" className="accordion-item-title"><span className="icon"></span>What exactly is a psychometric assessment?</label>
        <div className="accordion-item-desc">A psychometric assessment is a scientific method used to measure an individual's psychological attributes, cognitive abilities, personality traits, and aptitudes. It involves standardized tests and questionnaires designed to provide insights into an individual's strengths, preferences, and areas for development.</div>
    </div>

    <div className="accordion-item">
        <input type="checkbox" id="accordion2"/>
        <label htmlFor="accordion2" className="accordion-item-title"><span className="icon"></span>Will my answers be confidential?</label>
        <div className="accordion-item-desc">Yes, confidentiality is of utmost importance to us. Your answers and assessment results will be kept strictly confidential and will only be accessible to authorized personnel involved in the assessment process.</div>
    </div>

    <div className="accordion-item">
        <input type="checkbox" id="accordion3"/>
        <label htmlFor="accordion3" className="accordion-item-title"><span className="icon"></span>How does the assessment personalize my learning journey?</label>
        <div className="accordion-item-desc">The assessment personalizes your learning journey by analyzing your psychological attributes, cognitive abilities, personality traits, and aptitudes. By understanding your individual profile, the program can recommend learning tracks and resources that align most harmoniously with your strengths and aspirations. This personalized approach ensures that your learning journey is tailored to your specific needs and goals.</div>
    </div>

    <div className="accordion-item">
        <input type="checkbox" id="accordion4"/>
        <label htmlFor="accordion4" className="accordion-item-title"><span className="icon"></span>Is there a specific time frame within which I must complete the assessment?</label>
        <div className="accordion-item-desc">Yes, there is typically a specific time frame provided for completing the assessment. The deadline for completion will be communicated to you upon registration or enrollment in the Women Techsters Fellowship program. It's important to adhere to this deadline to ensure timely processing of your assessment results.</div>
    </div>

    <div className="accordion-item">
        <input type="checkbox" id="accordion5"/>
        <label htmlFor="accordion5" className="accordion-item-title"><span className="icon"></span>Can I retake the assessment if I'm not satisfied with my results?</label>
        <div className="accordion-item-desc">Depending on the program's policies, you may have the opportunity to retake the assessment if you are not satisfied with your initial results. However, please note that retake options may be limited, and there may be specific guidelines or conditions for retaking the assessment. It's recommended to reach out to program administrators or support staff for more information on retake options.</div>
    </div>

</div>
  );
}

export default Accordion;


