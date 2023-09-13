import React from 'react';
import shopImage from '../images/carpenter.jpg'; // Adjust the relative path as needed

const Home = () => {
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
        height: '100%', // This will be relative to parent div height
        textAlign: 'center',
        color: 'white'
    };

    const h1Style = {
        fontSize: '4rem', // Adjust the value as needed
    };

    const pStyle = {
        fontSize: '1.5rem', // Adjust the value as needed
    };

    return (
        <div style={backgroundStyle} className="d-flex justify-content-center align-items-center">
            <div style={centerTextStyle} className="text-white">
                <h1 style={h1Style}>New Wood Design</h1>
                <p style={pStyle}>Your vision, our creation.</p>
            </div>
        </div>
    );
};

export default Home;
