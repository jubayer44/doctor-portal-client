import React from "react";

const ConfirmationModal = ({ title, message, closeModal, successAction, modalData }) => {
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {title}
          </h3>
          <p className="py-4">
                {message}
          </p>
          <div className="modal-action">
            <label onClick={()=> successAction(modalData)} htmlFor="delete-modal" className="btn btn-error">
              delete
            </label>
            <label onClick={closeModal} className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
