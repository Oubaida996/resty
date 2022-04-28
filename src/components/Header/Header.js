import React from 'react';
import './Header.sass';

export default function Header() {
    return (
        <div className='header'>
            <ul className="ul-menu">
                <li className="li-menu-header">Home</li>
                <li className="li-menu-header">History</li>
                <li className="li-menu-header">Help</li>
            </ul>
        </div>
    )
}
