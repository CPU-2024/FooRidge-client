import React, { useState, useEffect } from "react";
import './Statuspost.css';
import markimg from '../assets/fruitstore.png';
import { BsChevronDown } from "react-icons/bs";
import BottomBar from'../Main/BottomBar';

const Statuspost = () => {
  const [showMore, setShowMore] = useState(false); 
  const [sortedButtons, setSortedButtons] = useState([]); 
  const [sortingOption, setSortingOption] = useState('new '); 

  const buttons = [
    {
      name: 'Button 1',
      description: '게시 날짜 20211212',
      image: markimg,
      date : 20211212
    },
    {
      name: 'Button 2',
      description: '게시 날짜 20240629',
      image: markimg,
      date : 20240629
    },
    {
      name: 'Button 3',
      description: '게시 날짜 20220606',
      image: markimg,
      date : 20220606
    },
    {
      name: 'Button 4',
      description: '게시 날짜 20240101',
      image: markimg,
      date : 20240101
    },
    {
      name: 'Button 5',
      description: '게시 날짜 20240301',
      image: markimg,
      date : 20240301
    },
    {
      name: 'Button 6',
      description: '게시 날짜 20240228',
      image: markimg,
      date : 20240228
    },
    {
      name: 'Button 7',
      description: '게시 날짜 20220929',
      image: markimg,
      date : 20220929
    },
    {
      name: 'Button 8',
      description: '게시 날짜 20240412',
      image: markimg,
      date : 20240412
    },
    {
      name: 'Button 9',
      description: '게시 날짜 20230505',
      image: markimg,
      date : 20230505
    },
    {
      name: 'Button 10',
      description: '게시 날짜 20141213',
      image: markimg,
      date : 20141213
    },

  ];

  useEffect(() => {
    if (sortingOption === 'new ') {
      const sorted = buttons.slice().sort((a, b) => b.date - a.date); 
      setSortedButtons(sorted); 
    } else {
      setSortedButtons(buttons); 
    }
  }, [sortingOption]); 

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const hideAllButtons = () => {
    setShowMore(false); 
  };

  const toggleSortingOption = (option) => {
    setSortingOption(option); 
    setShowMore(false); 
  };

  return (
    <div className="Statuspost">
      <p className="posttitle">푸릿지 참여 현황</p>
      <button className="showMoreButton" onClick={toggleShowMore}>
        {showMore ? sortingOption : (
          <>
            {sortingOption} <BsChevronDown />
          </>
        )}
      </button>

      {showMore && (
        <div className="moreOptions">
          <button onClick={() => toggleSortingOption('new ')}>new</button>
          <button onClick={() => toggleSortingOption('거리순')}>거리순</button>
          <button onClick={() => toggleSortingOption('인기순')}>인기순</button>
        </div>
      )}
      <div className="containerDetaillButton">
        {sortedButtons.map((button, index) => (
          <div key={index} className="detailbutton">
            <button className="detail">
              <img src={button.image} alt={button.name} /><br />
              <div className="detailtext">
                <p className="storename">{button.name}</p>
                <p className="storedetail">{button.description}</p>
              </div>
            </button>
          </div>
        ))}
      </div>
      <div className='bottom_bar'>
          <BottomBar />
        </div>
    </div>
  );
};

export default Statuspost;
