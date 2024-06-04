import React, { useState, useEffect, useRef } from "react";
import styles from './Statuspost.module.css';
import markimg from "../assets/fruitstore.png";
import { BsChevronDown } from "react-icons/bs";
import BottomBar from "../Main/BottomBar";
import SortingOptionsModal from "./SortingOptionsModal";

const DetailButton = ({ button }) => {
  return (
    <div className={styles.detailbutton}>
      <button className={styles.detail}>
        <img src={button.image} alt={button.name} />
        <br />
        <div className={styles.detailtext}>
          <p className={styles.storename}>{button.name}</p>
          <p className={styles.storedetail}>{button.description}</p>
        </div>
      </button>
    </div>
  );
};

const SortingButton = ({ showMore, sortingOption, toggleShowMore, buttonRef }) => {
  return (
    <button className={styles.showMoreButton} onClick={toggleShowMore} ref={buttonRef}>
      {showMore ? sortingOption : <>{sortingOption}<BsChevronDown /></>}
    </button>
  );
};

const Statuspost = () => {
  const [showMore, setShowMore] = useState(false);
  const [sortedButtons, setSortedButtons] = useState([]);
  const [sortingOption, setSortingOption] = useState("new");
  const buttonRef = useRef(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleSortingOption = (option) => {
    setSortingOption(option);
    setShowMore(false);
  };

  useEffect(() => {
    if (sortingOption === "new") {
      const sorted = buttons.slice().sort((a, b) => b.date - a.date);
      setSortedButtons(sorted);
    } else {
      setSortedButtons(buttons);
    }
  }, [sortingOption]);

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX
      });
    }
  }, [showMore]);

  const buttons = [
    { name: 'Button 1', description: '게시 날짜 20211212', image: markimg, date: 20211212 },
    { name: 'Button 2', description: '게시 날짜 20240629', image: markimg, date: 20240629 },
    { name: 'Button 3', description: '게시 날짜 20220606', image: markimg, date: 20220606 },
    { name: 'Button 4', description: '게시 날짜 20240101', image: markimg, date: 20240101 },
    { name: 'Button 5', description: '게시 날짜 20240301', image: markimg, date: 20240301 },
    { name: 'Button 6', description: '게시 날짜 20240228', image: markimg, date: 20240228 },
    { name: 'Button 7', description: '게시 날짜 20220929', image: markimg, date: 20220929 },
    { name: 'Button 8', description: '게시 날짜 20240412', image: markimg, date: 20240412 },
    { name: 'Button 9', description: '게시 날짜 20230505', image: markimg, date: 20230505 },
    { name: 'Button 10', description: '게시 날짜 20141213', image: markimg, date: 20141213 },
  ];

  return (
    <div className={styles.Statuspost}>
      <p className={styles.posttitle}>푸릿지 참여 현황</p>
      <SortingButton
        showMore={showMore}
        sortingOption={sortingOption}
        toggleShowMore={toggleShowMore}
        buttonRef={buttonRef}
      />
      {showMore && (
        <SortingOptionsModal
          isOpen={true}
          toggleSortingOption={toggleSortingOption}
          modalPosition={modalPosition}
        />
      )}
      <div className={styles.containerDetaillButton}>
        {sortedButtons.map((button, index) => (
          <DetailButton key={index} button={button} />
        ))}
      </div>
      <div className={styles.bottom_bar}>
        <BottomBar />
      </div>
    </div>
  );
};

export default Statuspost;
