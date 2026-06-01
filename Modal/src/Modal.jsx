import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Welcome</h2>
        <p>
          This is a simple modal component built with React.
        </p>

        <button className="action-btn" onClick={onClose}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Modal;