import React from 'react'

const AnalysisModal = ( { isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Meetup</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              {/* Your form content for creating a meetup */}
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="">Date</label>
                <input type="text" className="form-control" />
              </div>
              {/* Add more form fields as needed */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default AnalysisModal