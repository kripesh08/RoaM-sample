// src/components/User/Modal.jsx
import React from "react";
import "./Modal.css"; // Don't forget the modal styling

const Modal = ({ showModal, onClose, title, content }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Trip details</h3>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <div className="table-above">
            <p>State: </p>
            <p>District: </p>
            <p>No. of persons: </p>
          </div>
          <br />
          <div className="user-table">
              <table>
                <tr>
                    <th>S No</th>
                    <th>Location</th>
                    <th>Duration</th>
                    <th>Travel Rate</th>
                    <th>Food rate</th>
                    <th>Ticket Rate</th>
                    <th>Accomodation Rate</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Black Thunder</td>
                    <td>120 mins</td>
                    <td>1000</td>
                    <td>200</td>
                    <td>200</td>
                    <td>0</td>
                </tr>
              </table>
          </div>
        </div>
        <div className="modal-footer">
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
