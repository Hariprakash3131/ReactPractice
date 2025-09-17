import React from "react";
import "./App.css";

export default function PersonDetails({ person, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{person.name} Details</h2>
        <p><strong>Age:</strong> {person.age}</p>
        <p><strong>Phone:</strong> {person.phone}</p>
        <p><strong>Address:</strong> {person.address}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
