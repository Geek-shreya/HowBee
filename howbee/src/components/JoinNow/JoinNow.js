import React, { useState } from 'react';
import './style.css'; // Assuming you have a CSS file for styling

const JoinNow = () => {
  const [selectedRole, setSelectedRole] = useState('Yoga Practitioner');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You have signed up as a ${selectedRole}`);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="avatar-placeholder"></div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="role-selection">
            <p>Join as</p>
            <label className="role-option">
              <input
                type="checkbox"
                value="Yoga Practitioner"
                checked={selectedRole === 'Yoga Practitioner'}
                onChange={handleRoleChange}
              />
              Yoga Practitioner
            </label>
            <label className="role-option">
              <input
                type="checkbox"
                value="Yoga Instructor"
                checked={selectedRole === 'Yoga Instructor'}
                onChange={handleRoleChange}
              />
              Yoga Instructor
            </label>
          </div>
          <button type="submit" className="join-button">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default JoinNow;