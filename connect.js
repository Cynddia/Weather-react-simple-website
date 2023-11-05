import React from 'react';

const Connect = () => {
  return (
    <div style={{ display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    marginTop: '50px' }}>
      
      <h1 style={{ fontSize: '24px', 
      marginBottom: '20px' }}>
        Connect with Us</h1>

      <div style={{ display: 'flex', 
      justifyContent: 'center', 
      marginTop: '20px' }}>

        <div style={{ width: '100px', 
        height: '100px', 
        backgroundColor: '#405DE6', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: '0 10px' }}>
          <span style={{ color: 'white', fontSize: '18px' }}>Instagram</span>
        </div>

        <div style={{ width: '100px', height: '100px', backgroundColor: '#3b5998', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 10px' }}>
          <span style={{ color: 'white', fontSize: '18px' }}>Facebook</span>
        </div>

        <div style={{ width: '100px', height: '100px', backgroundColor: '#0e76a8', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 10px' }}>
          <span style={{ color: 'white', fontSize: '18px' }}>LinkedIn</span>
        </div>

        <div style={{ width: '100px', height: '100px', backgroundColor: '#ea4335', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 10px' }}>
          <span style={{ color: 'white', fontSize: '18px' }}>Gmail</span>
        </div>

      </div>
    </div>
  );
};

export default Connect;





