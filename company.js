import React from 'react';

const Company = (props) => {
    const { containerStyle, headingStyle, textStyle } = props;

    const pastelContainerStyle = {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
        background: '#f6f6f6',
        border: '1px solid #e8e8e8',
        borderRadius: '10px',
        maxWidth: '800px',
        margin: 'auto',
    };

    const pastelHeadingStyle = {
        fontSize: '24px',
        color: '#6a92c6',
        marginBottom: '10px',
    };

    const pastelTextStyle = {
        fontSize: '16px',
        color: '#8f8f8f',
        marginBottom: '20px',
    };

    return (
        <div style={{ ...pastelContainerStyle, ...containerStyle }}>
            <h2 style={{ ...pastelHeadingStyle, ...headingStyle }}>WEATHER REPORT</h2>
            <p style={pastelTextStyle}>
                Our weather team provides comprehensive forecasts and insights to help you plan your
                day effectively and stay prepared for any weather conditions.
            </p>

            <h2 style={{ ...pastelHeadingStyle, ...headingStyle }}>WEATHER ALERTS</h2>
            <p style={pastelTextStyle}>
                Stay informed with real-time weather alerts for any sudden changes in weather
                patterns in your area.
            </p>

            <h2 style={{ ...pastelHeadingStyle, ...headingStyle }}>WEATHER UPDATES</h2>
            <p style={pastelTextStyle}>
                Get the latest weather updates, including temperature, humidity, wind speed, and
                more, to plan your activities accordingly.
            </p>

            <h2 style={{ ...pastelHeadingStyle, ...headingStyle }}>WEATHER INSIGHTS</h2>
            <p style={pastelTextStyle}>
                Our experts provide valuable insights into weather phenomena, helping you understand
                the science behind various weather patterns.
            </p>

            <h2 style={{ ...pastelHeadingStyle, ...headingStyle }}>WEATHER SERVICES</h2>
            <p style={pastelTextStyle}>
                From daily forecasts to long-term climate projections, we offer a wide range of
                weather services tailored to your specific needs.
            </p>
        </div>
    );
};

export default Company;
