import React from "react";
import Modal from "react-modal";

const SortingOptionsModal = ({ isOpen, toggleSortingOption }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => toggleSortingOption(null)} 
      style={customModalStyles}
    >
      <button onClick={() => toggleSortingOption("new")} style={{marginBottom:"5px", backgroundColor:"white", borderStyle:"none"}}>new</button>
      <button onClick={() => toggleSortingOption("거리순")}style={{marginBottom:"5px", backgroundColor:"white", borderStyle:"none"}}>거리순</button>
      <button onClick={() => toggleSortingOption("인기순")}style={{marginBottom:"5px", backgroundColor:"white", borderStyle:"none"}}>인기순</button>
    </Modal>
  );
};

const customModalStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "60px",
    height: "80px",
    zIndex: "150",
    position: "absolute",
    top: "175px",
    left: "294px",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
    padding: "10px",
  },
};

export default SortingOptionsModal;
