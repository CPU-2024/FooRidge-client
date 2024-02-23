import React, { useState } from "react";
import '../Post/Post.css';
import uploadIcon from '../assets/poto.png';
import { FaChevronLeft } from "react-icons/fa";

const Post = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [priceVisible, setPriceVisible] = useState(false); // New state for price visibility
  const [price, setPrice] = useState(""); // New state for price input

  // 이미지 변경
  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files) {
      const newImages = Array.from(files).map((file) => {
        const reader = new FileReader();

        //selectedImages 업데이트
        reader.onloadend = () => {
          setSelectedImages((prevImages) => [...prevImages, reader.result]);
        };

        // 파일읽기
        reader.readAsDataURL(file);

        return file;
      });
    }
  };

  // 버튼 색상변경, 가격 input 표시
  const handleButtonClick = (option) => {
    setSelectedOption(option);
    if (option === "sale") {
      setPriceVisible(true);
    } else {
      setPriceVisible(false);
    }
  };

  return (
    <div>
      <div className="header">
        <FaChevronLeft></FaChevronLeft><p>나눔하기</p>
      </div>
      <hr />
      <div className="post">
        <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} id="upload-input" multiple />
        {/* 파일입력*/}
        <label htmlFor="upload-input">
          <img src={uploadIcon} alt="Upload Icon" className="upload-icon" />
        </label>

        {/*미리보기*/}
        {selectedImages.map((image, index) => (
          <div key={index} className="image-preview-container">
            <img src={image} alt={`Preview ${index}`} className="image-preview" />
          </div>
        ))}
      </div>
      <div className="postdetail">
        <label>제목</label><br />
        <input type="text" placeholder="제목" /><br />
        <label>거래 방식</label><br />
        <button
          className={selectedOption === "sale" ? "selected-button" : ""}
          onClick={() => handleButtonClick("sale")}>판매</button>
        <button
          className={selectedOption === "donation" ? "selected-button" : ""}
          onClick={() => handleButtonClick("donation")}>기부</button><br />

        {/*가격*/}
        {priceVisible && (
          <>
            <label>가격</label><br />
            <input type="text" placeholder="가격" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
          </>
        )}
        <label>자세한 설명</label><br />
        <textarea className="postexplanation" rows="7" placeholder="자세한 설명을 입력하세요."></textarea>
        <div className="registration">
            <button>등록하기</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
