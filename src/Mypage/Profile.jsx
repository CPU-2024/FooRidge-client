// Profile.js

import React, { useState, useRef } from 'react';
import './Profile.css';
import Modal from './mypage-modal';

const Profile = ({ name: initialName, profilePicture }) => {
  const [name, setName] = useState(initialName);
  const [selectedPicture, setSelectedPicture] = useState(profilePicture);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handlePictureClick = () => {
    fileInputRef.current.click();
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedPicture(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveName = (newName) => {
    setName(newName);
  };

  return (
    <div className="profile">
      <img
        src={selectedPicture}
        alt="Profile"
        onClick={handlePictureClick}
      />
      <h2 onClick={openModal}>{name}</h2>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handlePictureChange}
      />
      {isModalOpen && (
        <Modal onClose={closeModal} onSave={handleSaveName} />
      )}
    </div>
  );
};

export default Profile;
