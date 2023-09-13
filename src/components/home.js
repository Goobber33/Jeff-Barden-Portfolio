import React, { useState } from 'react';
import '../styles/Home.css'
import shopImage from '../images/carpenter.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.png';

const Home = () => {

    const allImages = [img1, img2, img3, img4, img5];
    const [startIndex, setStartIndex] = useState(0);

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
        color: 'white'
    };

    const h1Style = {
        fontSize: '4rem',
        position: 'relative',
        display: 'inline-block',
        marginBottom: '2rem'
    };

    const pStyle = {
        fontSize: '1.5rem',
        position: 'relative',
        display: 'inline-block',
        marginBottom: '18rem'
    };

    const underlineStyle = {
        content: '""',
        position: 'absolute',
        height: '2px',
        backgroundColor: 'white',
        width: '80rem',
        left: '50%',
        bottom: '-0.2rem',
        marginLeft: '-40rem'
    };

    const [offset, setOffset] = useState(0);

    const scroll = (direction) => {
        let width = 220; // width of image + margin (200px width + 2*10px margin)
        if (direction === 'right' && startIndex < allImages.length - 4) {
            setOffset(offset - width);
            setStartIndex(startIndex + 1);
        } else if (direction === 'left' && startIndex > 0) {
            setOffset(offset + width);
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div style={backgroundStyle} className="d-flex justify-content-center align-items-center">
            <div style={centerTextStyle}>
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
                        <img src={img} className="carousel-image" alt={`Wood design ${index + 1}`} key={index} />
                    ))}
                </div>

                <button onClick={() => scroll('left')}>Previous</button>
                <button onClick={() => scroll('right')}>Next</button>
            </div>
        </div>
    );
};

export default Home;