// ProfileCard.js
import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, title, image }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} className="profile-image" />
      <div className="profile-info">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-title">{title}</p>
      </div>
      <div className="profile-options">⋮</div>
    </div>
  );
};

export default ProfileCard;