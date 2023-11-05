import React from 'react';

const Solutions = () => {
    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
        backgroundImage: `url('https://i.pinimg.com/736x/6e/32/87/6e32878542a4a6b86e640204d951fbff--blue-wallpapers-blue-backgrounds.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const headingStyle = {
        fontSize: '20px',
        color: '#333',
    };

    const textStyle = {
        fontSize: '16px',
        color: '#666',
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        fontSize: '18px',
        border: 'none',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            
            <h2 style={headingStyle}>Explore and Compare</h2>
            <p style={textStyle}>Current Weather Conditions</p>
            <p style={textStyle}>Hourly Weather Forecast</p>
            <p style={textStyle}>Weekly Weather Forecast</p>
            <p style={textStyle}>Weather Radar</p>
            <p style={textStyle}>Severe Weather Alerts</p>
            <p style={textStyle}>Air Quality Index (AQI) Information</p>
            <p style={textStyle}>UV Index Information</p>
            <p style={textStyle}>Wind Speed and Direction</p>
            <p style={textStyle}>Sunrise and Sunset Times</p>
            <p style={textStyle}>Moon Phase Information</p>

            <h2 style={headingStyle}>Use Cases</h2>
            <p style={textStyle}>Planning Outdoor Activities</p>
            <p style={textStyle}>Travel Planning</p>
            <p style={textStyle}>Agricultural Planning</p>
            <p style={textStyle}>Construction Planning</p>
            <p style={textStyle}>Weather-based Decision Making</p>
            <p style={textStyle}>Event Planning</p>
            <p style={textStyle}>Weather Data Analysis</p>

            <h2 style={headingStyle}>Related Industries</h2>
            <p style={textStyle}>Travel and Tourism</p>
            <p style={textStyle}>Agriculture</p>
            <p style={textStyle}>Construction</p>
            <p style={textStyle}>Event Management</p>
            <p style={textStyle}>Environmental Sciences</p>
            <p style={textStyle}>Transportation</p>
            <p style={textStyle}>Outdoor Recreation</p>
        </div>
    );
};

export default Solutions;
