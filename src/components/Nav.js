import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="mainNav">
            <ul>
                <li>
                    <Link to="/#portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/aboutContact">About | Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;