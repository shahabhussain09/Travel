import React, { useState } from 'react';
import './Navbar.css';
import { MenuItem } from '../MenuItem';
import { BiMenuAltLeft, BiWindowClose } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [clicked, setClicked] = useState(false); // Using the useState hook to manage 'clicked' state

    const handleClick = () => {
        setClicked(!clicked); // Updating the 'clicked' state using the setClicked function
    };

    return (
        <div>
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Trippy</h1>
                <div className='menu-icons' onClick={handleClick}>
                    <span className={clicked ? 'menu-icon active' : 'menu-icon'}>
                        {clicked ? <BiWindowClose /> : <BiMenuAltLeft />}
                    </span>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItem.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <span>{item.icon}</span>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
