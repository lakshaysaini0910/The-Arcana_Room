import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="navLogo">THE ARCANA ROOM</div>
                <ul>
                    <li>
                        <Link to='/'> HOME </Link>
                        </li>
                    <li>
                        <Link to="/reading-setup"> READING </Link>
                    </li>
                    <li>
                        <Link to="/card-library">CARDS LIBRARY</Link>
                    </li>
                    <li>
                        <Link to="/about" >ABOUT</Link>
                        </li>

                </ul>
            </nav >
        </>
    )
}

export default Navbar