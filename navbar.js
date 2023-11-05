import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return (    
        <div className='navBar'>
            <div className='home'>
                <Link to="/">Our Weather</Link>
            </div>
            <div className='solutions'>
                <Link to="/solutions">Solutions</Link>
        </div>
            <div className='company'>
                <Link to="/company">Company</Link>
            </div>
            <div className='connect'>
                <Link to="/connect">Connect with us</Link>
            </div>
            <div className='WeatherComponent'>
                <Link to="/WeatherComponent">Weather-o-meter</Link>
            </div>

           
           

        </div>
    )

}

export default Navbar;