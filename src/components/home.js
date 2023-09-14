import React, { useState } from 'react';
import '../styles/Home.css'
import shopImage from '../images/carpenter.jpg';
import logo from '../images/logo.png';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.png';

const Home = () => {
  const allImages = [img1, img2, img3, img4, img5];
  const [startIndex, setStartIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);

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
    marginTop: '8rem',
    marginBottom: '2rem',
    fontFamily: 'Radley, sans-serif', // Apply the Radley font
  };

  const pStyle = {
    fontSize: '1.5rem',
    position: 'relative',
    display: 'inline-block',
    marginBottom: '12rem',
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

  const showModal = (imageSrc) => {
    console.log('Modal should open now.');
    setModalImage(imageSrc);
    setIsModalVisible(true);
    console.log('isModalVisible:', isModalVisible); // Add this line
  };

  const scroll = (direction) => {
    if (direction === 'right' && startIndex < allImages.length - 4) {
      setStartIndex(startIndex + 1);
    } else if (direction === 'left' && startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div style={backgroundStyle} className="d-flex justify-content-center align-items-center">
      <div style={centerTextStyle}>
        {/* Add the logo div with styles for top-left positioning */}
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
          {allImages.slice(startIndex, startIndex + 4).map((img, index) => (
            <img src={img} className="carousel-image" alt={`Wood design ${index + 1}`} key={index} onClick={() => showModal(img)} />
          ))}
        </div>

        <button onClick={() => scroll('left')}>Previous</button>
        <button onClick={() => scroll('right')}>Next</button>
      </div>

      {isModalVisible && (
        <div className="modal">
          <button className="close-button" onClick={() => setIsModalVisible(false)}>X</button>
          <img src={modalImage} alt="Full-Size" />
        </div>
      )}

    </div>
  );
};

export default Home;