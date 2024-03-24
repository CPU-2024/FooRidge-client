// Profile.js

import React from 'react';

const Profile = ({ name, profilePicture }) => {
  return (
    <div className="profile">
      <img src={profilePicture} alt="Profile" />
      <h2>{name}</h2>
    </div>
  );
};

export default Profile;
