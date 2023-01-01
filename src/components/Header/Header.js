import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='top-part'>
            <a className='brand-name' href="/">HandBrand</a>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/login">Log in</Link>
                <Link to="signup">Sign UP</Link>
            
            </nav>
        </div>
    );
};

export default Header;