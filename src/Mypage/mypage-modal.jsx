import React, { useState } from 'react';
import './mypage-modal.css';

const MypageModal = ({ onClose, onSave }) => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSave = () => {
    onSave(name);
    setName('');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={handleNameChange}
        />
        <div>
          <button onClick={onClose}>취소</button>
          <button onClick={handleSave}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default MypageModal;
