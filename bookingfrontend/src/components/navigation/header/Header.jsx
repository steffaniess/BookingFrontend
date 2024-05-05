import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Importera CSS för header-styling här

const Header = () => {
    return (
        <header className="header">
            {/* Logga */}
            <div className="logo-container">
                <img src="/images/FB.png" alt="Logo" className="logo" />
            </div>
            {/* Navigationsmeny */}
            <nav className="navigation">
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <NavLink to="/" className="navigation-link" activeClassName="active-link">Home</NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink to="/booking" className="navigation-link" activeClassName="active-link">Booking</NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink to="/about" className="navigation-link" activeClassName="active-link">About</NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink to="/contact" className="navigation-link" activeClassName="active-link">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;