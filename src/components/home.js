import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.css'
import shopImage from '../images/carpenter.jpg';
import logo from '../images/logo.png';
import img1 from '../images/img1.JPG';
import img2 from '../images/img2.JPG';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';

const Home = () => {
  const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [startIndex, setStartIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const imageRef = useRef(null);

  const handleModalClick = (e) => {
    if (imageRef.current && !imageRef.current.contains(e.target)) {
      setIsModalVisible(false);
    }
  };

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${shopImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    margin: 0,
    padding: 0,
  };

  const centerTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    color: 'white',
  };

  const h1Style = {
    fontSize: '7rem',
    position: 'relative',
    display: 'inline-block',
    marginTop: '4rem',
    marginBottom: '2rem',
    fontFamily: 'Radley, sans-serif',
  };

  const pStyle = {
    fontSize: '1.5rem',
    position: 'relative',
    display: 'inline-block',
    marginBottom: '14rem',
  };

  const underlineStyle = {
    content: '""',
    position: 'absolute',
    height: '1px',
    backgroundColor: 'white',
    width: '80rem',
    left: '50%',
    bottom: '-0.2rem',
    marginLeft: '-40rem',
  };

  const showModal = (imageSrc, index) => {
    console.log("Opening modal with image:", imageSrc, " and index:", index);
    setModalImage(imageSrc);
    setModalIndex(index);
    setIsModalVisible(true);
    console.log("Is Modal Visible:", isModalVisible);  // Debugging line
  };

  useEffect(() => {
    console.log("Is Modal Visible has changed:", isModalVisible);
  }, [isModalVisible]);

  const scroll = (direction) => {
    if (direction === 'right' && startIndex < allImages.length - 4) {
      setStartIndex(startIndex + 1);
    } else if (direction === 'left' && startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const scrollModal = (direction) => {
    let newIndex = modalIndex;
    if (direction === 'right' && modalIndex < allImages.length - 1) {
      newIndex = modalIndex + 1;
    } else if (direction === 'left' && modalIndex > 0) {
      newIndex = modalIndex - 1;
    }
    setModalIndex(newIndex);
    setModalImage(allImages[newIndex]);
  };

  return (
    <div style={backgroundStyle} className="d-flex justify-content-center align-items-center">
      <div style={centerTextStyle}>

        <div className="logo-container">
          <div className="logo-tint"></div>
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <h1 style={h1Style}>
          New Wood Designs
          <span style={underlineStyle}></span>
        </h1>

        <p style={pStyle}>
          By Jeff Barden
          <span style={underlineStyle}></span>
        </p>

        <div id="imageContainer" className="image-container">

          <div className="arrow-button left" onClick={() => scroll('left')}>
            ←  {/* Left Arrow */}
          </div>

          <div className="image-slider">
            {allImages.slice(startIndex, startIndex + 4).map((img, index) => (
              <img src={img} className="carousel-image" alt={`Wood design ${index + 1}`} key={index} onClick={() => showModal(img, index)} />  // Added index
            ))}
          </div>

          <div className="arrow-button right" onClick={() => scroll('right')}>
            →  {/* Right Arrow */}
          </div>

        </div>

      </div>

      {isModalVisible && (
        <div className="modal-bg" onClick={handleModalClick}>
          <div className="close-button-wrapper">
            <button className="btn btn-danger" onClick={() => setIsModalVisible(false)}>X</button>
          </div>
          <button className="btn btn-light modal-arrow modal-arrow-left" onClick={(e) => { e.stopPropagation(); scrollModal('left'); }}>←</button>
          <img ref={imageRef} src={modalImage} alt="Full-Size" style={{ maxWidth: "80%", maxHeight: "80vh" }} className="modal-img" />
          <button className="btn btn-light modal-arrow modal-arrow-right" onClick={(e) => { e.stopPropagation(); scrollModal('right'); }}>→</button>
        </div>
      )}
    </div>
  );
};

export default Home;
