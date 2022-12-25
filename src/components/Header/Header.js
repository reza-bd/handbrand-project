import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            This is the top of this webpage.
            <Link to={'/'}>Home</Link>
            <Link to={'product'}>Product</Link>
            <Link to={'order'}>Order</Link>
            <Link to={'Login'}>Login</Link>
        </div>
    );
};

export default Header;