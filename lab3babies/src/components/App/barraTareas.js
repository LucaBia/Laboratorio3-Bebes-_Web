import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'

function Nav(){

    const navStyle = { color: 'black' };

    return (
        <nav>
            <ul className="links">
                <Link style={navStyle} to='/babies'>
                    <li>Babies</li>
                </Link>
                <Link style={navStyle} to='/events'>
                    <li>Events</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;