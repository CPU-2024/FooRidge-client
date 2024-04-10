import React, { useState } from 'react';
import './Post.css';
import uploadIcon from '../assets/poto.png';
import { useNavigate } from 'react-router';
import { FaChevronLeft } from 'react-icons/fa';
import axios from 'axios';
import { IoMdClose } from "react-icons/io";

const Post = () => {
  const [filePaths, setFilePaths] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [priceVisible, setPriceVisible] = useState(false);
  const [postTitle, setTitle] = useState('');
  const [tradeMethod, setTradeMethod] = useState('');
  const [postContent, setContent] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);

      const newFilePaths = newFiles.map((file) => URL.createObjectURL(file));
      setFilePaths((prevPaths) => [...prevPaths, ...newFilePaths]);
    }
  };

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    if (option === 'sale') {
      setPriceVisible(true);
    } else {
      setPriceVisible(false);
    }
  };

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append('postTitle', postTitle);
      formData.append('tradeMethod', tradeMethod);
      formData.append('price', price);
      formData.append('postContent', postContent);
      files.forEach((file) => {
        formData.append('file', file);
      });

      const response = await axios.post('http://localhost:8080/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        alert('글 등록 성공');
      }
    } catch (error) {
      alert('글 등록 실패');
      console.log(error);
    }
  };

  const handleDeleteImage = (index) => {
    const newFilePaths = [...filePaths];
    const newFiles = [...files];
    newFilePaths.splice(index, 1);
    newFiles.splice(index, 1);
    setFilePaths(newFilePaths);
    setFiles(newFiles);
  };

  return (
    <div>
      <div className="header">
        <button onClick={() => navigate(-1)}>
          <FaChevronLeft />
        </button>
        <p>나눔하기</p>
      </div>
      <hr />
      <div className="post">
        <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="upload-input" multiple />
        <label htmlFor="upload-input">
          <img src={uploadIcon} alt="Upload Icon" className="upload-icon" />
        </label>

        {filePaths.map((image, index) => (
          <div key={index} className="image-preview-container">
            <div className="delete-button" onClick={() => handleDeleteImage(index)}>
            </div>
            <img src={image} alt={`Preview ${index}`} className="image-preview" onClick={() => handleDeleteImage(index)} />
          </div>
        ))}
      </div>
      <div className="postdetail">
        <label>제목</label>
        <br />
        <input type="text" placeholder="제목" value={postTitle} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>거래 방식</label>
        <br />
        <button className={selectedOption === 'sale' ? 'selected-button' : ''} onClick={() => handleButtonClick('sale')} value="판매">
          판매
        </button>
        <button className={selectedOption === 'donation' ? 'selected-button' : ''} onClick={() => handleButtonClick('donation')} value="가부">
          기부
        </button>
        <br />

        {priceVisible && (
          <>
            <label>가격</label>
            <br />
            <input type="text" placeholder="가격" value={price} onChange={(e) => setPrice(e.target.value)} />
            <br />
          </>
        )}
        <label>자세한 설명</label>
        <br />
        <textarea className="postexplanation" rows="7" placeholder="자세한 설명을 입력하세요." value={postContent} onChange={(e) => setContent(e.target.value)}></textarea>
        <div className="registration">
          <button onClick={handlePost} type="submit">
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
