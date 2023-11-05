// Home.js

import React from 'react';

const Home = (props) => {
    const { founderName } = props;

    const containerStyle = {
        textAlign: 'center',
        padding: '20px',
        border: '2px solid #ddd', // Add border
        borderRadius: '10px', // Add border radius for a smoother look
        backgroundColor: '#f9f9f9', // Set your preferred background color 
        margin: 'auto', // Center the container
        maxWidth: '800px', // Set maximum width for better readability
    };


const footerStyle = {
        position: 'fixed',
        bottom: 0,
        left: 0, 
        right: 0,
        width: '100%',
        backgroundColor: '#f9f9f9',
        padding: '5px 0', // Adjusted padding for a thinner footer
    };


 const headingStyle = {
        fontSize: '20px',
        color: '#333',
    };


    const textStyle = {
        fontSize: '16px',
        color: '#666',
    };



    return (
        <div style={containerStyle}>
            <p style={{ fontSize: '16px', color: '#100' }}>Get the Latest Weather Updates</p>

            <h2 style={headingStyle}>Featured Locations</h2>
            <a href="#">View All Locations</a>
            {/* ... (rest of the content) ... */}

            <h2 style={headingStyle}>WEATHER BLOG</h2>
            <p style={textStyle}>Understanding Weather Patterns and Forecasts</p>
            <p style={textStyle}>
                Stay informed about the latest weather trends and how they impact your daily life.
            </p>

            <h2 style={headingStyle}>WEATHER ALERTS</h2>
            <p style={textStyle}>
                Receive Instant Alerts for Severe Weather Conditions and Important Updates
            </p>
            <p style={textStyle}>
                Stay prepared for any weather emergencies with real-time notifications.
            </p>

            {/* Adding the name of the founder */}
            <p style={{ fontSize: '14px', color: '#888', marginTop: '20px' }}>Weather found by: {founderName}</p>

            {/* Footer */}
            <div style={footerStyle}>
                <p style={{ fontSize: '12px', color: '#777' }}>&copy; 2023 Weather and Co</p>
            </div>
        </div>
    );
};

export default Home;
