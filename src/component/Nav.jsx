import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../CSSF/nav.css";
import logo from "../assets/Images/logo.svg";
import hamburger from "../assets/Images/icon-hamburger.svg";
import close from "../assets/Images/icon-close.svg";

const Nav = () => {
    const [menu, setMenu] = useState(true);
    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(true); // Ensure the menu closes when clicking outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='header-top'>
            <div className='undernav'>
                <div className="nav_wrapper_menu" ref={menuRef}>
                    <div className='logo'>
                        <img src={logo} alt="Company Logo" />
                    </div>
                    <div className='menu_wrapper'>
                        <div className='hand_close_wrap' onClick={() => setMenu(!menu)}>
                            {menu ? <img src={close} title="Close menu" alt="Close menu icon" className='close' /> :
                                <img src={hamburger} title='Open menu' alt="Hamburger menu icon" className='menu' />}
                        </div>
                    </div>
                    {menu && (
                        <div className='right-side'>
                            <ul>
                                <Link to='/Features' style={{ textDecoration: 'none' }}>
                                    <div className="side-btn">
                                        <h4>Features</h4>
                                    </div>
                                </Link>
                                <Link to='/Team' style={{ textDecoration: 'none' }}>
                                    <div className="side-btn">
                                        <h4>Team</h4>
                                    </div>
                                </Link>
                                <Link to='/Sign In' style={{ textDecoration: 'none' }}>
                                    <div className="side-btn">
                                        <h4>Sign In</h4>
                                    </div>
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
