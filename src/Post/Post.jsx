import React, { useState } from "react";
import '../Post/Post.css';
import uploadIcon from '../assets/poto.png';
import { useNavigate } from "react-router";
import { FaChevronLeft } from "react-icons/fa";
import axios from "axios";

const Post = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [priceVisible, setPriceVisible] = useState(false); // New state for price visibility
  const [postTitle, setTitle] = useState(""); // New state for price input
  const [tradeMethod, setTradeMethod] = useState(""); // New state for price input
  const [postContent, setContent] = useState(""); // New state for price input
  const [price, setPrice] = useState(""); 
  const navigate = useNavigate();

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

  const handlePost=async()=>{
    const post={postTitle,tradeMethod,price,postContent}
    try{
      const response=await axios.post('http://localhost:8080/post',post)
      if(response.status===201){
        alert('글 등록 성공')
      }
    }catch(error){
      alert('글 등록 실패')
      console.log(error)
    }
  }
  return (
    <div>
      <div className="header">
      <button onClick={() => navigate(-1)}><FaChevronLeft/></button> 
      <p>나눔하기</p>
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
        <input type="text" placeholder="제목" value={postTitle} onChange={(e) => setTitle(e.target.value)} /><br />
        <label>거래 방식</label><br />
        <button
          className={selectedOption === "sale" ? "selected-button" : ""}
          onClick={() => handleButtonClick("sale")} value="판매" onChange={(e) => setTradeMethod(e.target.value)}>판매</button>
        <button
          className={selectedOption === "donation" ? "selected-button" : ""}
          onClick={() => handleButtonClick("donation")}value="가부"  onChange={(e) => setTradeMethod(e.target.value)}>기부</button><br />

        {/*가격*/}
        {priceVisible && (
          <>
            <label>가격</label><br />
            <input type="text" placeholder="가격" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
          </>
        )}
        <label>자세한 설명</label><br />
        <textarea className="postexplanation" rows="7" placeholder="자세한 설명을 입력하세요." value={postContent} onChange={(e) => setContent(e.target.value)} ></textarea>
        <div className="registration">
            <button onClick={handlePost} type='submit'>등록하기</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
