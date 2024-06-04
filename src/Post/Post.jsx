import React, { useState } from 'react';
import styles from './Post.module.css';
import uploadIcon from '../assets/poto.png';
import { useNavigate } from 'react-router';
import { FaChevronLeft } from 'react-icons/fa';
import axios from 'axios';

const Post = () => {
  const [filePaths, setFilePaths] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [category, setCategory] = useState('');
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
    setTradeMethod(option);
  };

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append('postTitle', postTitle);
      formData.append('tradeMethod', tradeMethod);
      formData.append('price', price);
      formData.append('postContent', postContent);
      formData.append('category', category);  // 카테고리 추가
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
      if (error.response) {
        console.log('Server responded with:', error.response.status, error.response.data);
        alert(`글 등록 실패: ${error.response.data.message}`);
      } else if (error.request) {
        console.log('No response received:', error.request);
        alert('글 등록 실패: 서버 응답이 없습니다.');
      } else {
        console.log('Error before sending request:', error.message);
        alert('글 등록 실패: 요청을 보내는 중 오류가 발생했습니다.');
      }
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

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <button onClick={() => navigate(-1)} className={styles.headerButton}>
          <FaChevronLeft />
        </button>
        <p>나눔하기</p>
      </div>
      <div className={styles.postDetail}>
        <div className={styles.post}>
          <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="upload-input" multiple />
          <label htmlFor="upload-input">
            <img src={uploadIcon} alt="Upload Icon" className={styles.uploadIcon} />
          </label>

          {filePaths.map((image, index) => (
            <div key={index} className={styles.imagePreviewContainer}>
              <div className={styles.deleteButton} onClick={() => handleDeleteImage(index)}></div>
              <img src={image} alt={`Preview ${index}`} className={styles.imagePreview} onClick={() => handleDeleteImage(index)} />
            </div>
          ))}
        </div>
        <input type="text" placeholder="제목" value={postTitle} onChange={(e) => setTitle(e.target.value)} className={styles.postTitleInput} />
        <br />
        <label>카테고리</label>
        <div className={styles.categoryContainer}>
          <button className={`${styles.categoryButton} ${category === 'fastfood' ? styles.selectedButton : ''}`} onClick={() => handleCategoryClick('fastfood')} value="패스트푸드">
            패스트푸드
          </button>
          <button className={`${styles.categoryButton} ${category === 'cafe' ? styles.selectedButton : ''}`} onClick={() => handleCategoryClick('cafe')} value="카페">
            카페
          </button>
          <button className={`${styles.categoryButton} ${category === 'restaurant' ? styles.selectedButton : ''}`} onClick={() => handleCategoryClick('restaurant')} value="음식점">
            음식점
          </button>
          <button className={`${styles.categoryButton} ${category === 'fruits' ? styles.selectedButton : ''}`} onClick={() => handleCategoryClick('fruits')} value="과일 채소">
            과일 채소
          </button>
          <button className={`${styles.categoryButton} ${category === 'store' ? styles.selectedButton : ''}`} onClick={() => handleCategoryClick('store')} value="가게">
            가게
          </button>
          <button className={`${styles.categoryButton} ${category === 'pets' ? styles.selectedButton : ''}`} onClick={() => handleCategoryClick('pets')} value="애완 동물">
            애완 동물
          </button>
        </div>
        <label>거래 방식</label>
        <br />
        <div className={`${styles.transaction}`}>
          <button className={`${styles.tradeButton} ${selectedOption === 'sale' ? styles.selectedButton : ''}`} onClick={() => handleButtonClick('sale')} value="판매">
            판매
          </button>
          <button className={`${styles.tradeButton} ${selectedOption === 'donation' ? styles.selectedButton : ''}`} onClick={() => handleButtonClick('donation')} value="기부">
            기부
          </button>
        </div>
        <br />
        {priceVisible && (
          <>
            <input type="text" placeholder="가격" value={price} onChange={(e) => setPrice(e.target.value)} className={styles.priceInput} />
            <br />
          </>
        )}
        <label>자세한 설명</label>
        <br />
        <textarea className={styles.postExplanation} rows="7" placeholder="자세한 설명을 입력하세요." value={postContent} onChange={(e) => setContent(e.target.value)}></textarea>
        <div className={styles.registration}>
          <button onClick={handlePost} type="submit" className={styles.registrationButton}>
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
