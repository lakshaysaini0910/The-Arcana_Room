import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className='Footer'>

                <div className="fLogo">THE ARCANA ROOM</div>

                <div className="fLinksColumn">


                    <div className="navItems">
                        <div className="nItems">GO TO</div>
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
                                <Link to="/about"> ABOUT </Link>
                                </li>

                        </ul>

                    </div>

                    <div className='fConnect'>
                        <div className='nItems'> CONNECT</div>
                        <ul>
                            <li>
                                <Link to='https://github.com/lakshaysaini0910/'> GITHUB </Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com/in/lakshay-saini-056a20194/"> LINKEDIN </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="ftext">
                    <div>"The future is not fixed. The cards reveal possibilities."</div>
                    <div>© 2026 Tarot. Made with ❤️ by Lakshay</div>
                </div>



            </div >

        </>
    )
}

export default Footer