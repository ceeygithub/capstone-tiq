import React from 'react'
import '../styles/Modal.css'
import { IoMdCloseCircleOutline } from "react-icons/io";
import ProgressBar from './ProgressBar';

const AnalysisModal = ( { isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="analysisModal">
        <div className="modalDialog">
          <div className="modalContent">
            <div className="modalHeader">
              <h5 className="modalTitle">Fellow's Assessment Result</h5>
              <button type="button" className="btn-close" onClick={onClose}><IoMdCloseCircleOutline /></button>
            </div>
            <div className="modalBody">
              <ProgressBar />
                  <ProgressBar/>
                      <ProgressBar/>
            </div>
            <div>
             <p>Recommended learning track based on assessment result</p>
             <div className='track'>Android Development</div>
            </div>
              <button type="button" className="btnSave" >Save Result</button>
          
          </div>
        </div>
      </div>
    )
  );
}

export default AnalysisModal