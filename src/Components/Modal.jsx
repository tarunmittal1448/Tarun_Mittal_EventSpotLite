import React from 'react';
import '../styles/Modal.css'; // Ensure you have the appropriate styles

const Modal = ({ event, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div style={{"marginRight":"-400px"}}>
        <button onClick={onClose}>Close</button>
      </div>
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <img src={event.image} alt={event.name} />
      </div>
    </div>
  );
};

export default Modal;
