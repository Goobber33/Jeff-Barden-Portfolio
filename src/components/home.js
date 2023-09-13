import React from 'react';
import shopImage from '../images/carpenter.jpg';

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
        marginBottom: '25rem'
    };

    const underlineStyle = {
        content: '""',
        position: 'absolute',
        height: '2px',
        backgroundColor: 'white',
        width: '80rem',
        left: '50%',
        bottom: '0',
        marginLeft: '-40rem'
    };

    return (
        <div style={backgroundStyle} className="d-flex justify-content-center align-items-center">
            <div style={centerTextStyle}>
                <h1 style={h1Style}>
                    New Wood Designs
                    <span style={underlineStyle}></span>
                </h1>
                <p style={pStyle}>
                    Your vision, our creation.
                    <span style={underlineStyle}></span>
                </p>
            </div>
        </div>
    );
};

export default Home;
