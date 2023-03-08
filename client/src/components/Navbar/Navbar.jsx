import React, { useState } from 'react'
import './Navbar.scss'
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../assets/newLogo.png'

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState('Home')

    const currentPageStyle = {
        color: 'black',
        borderBottom: '2px solid #FF1616'
    }

    return (
        <>
            <div className='navbar-container'>
                <div className='nav-logo'>
                    <Link to="/" onClick={() => setCurrentPage('Home')}>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="nav-links-container">
                    <ul className='nav-list'>
                        <Link
                            to="/"
                            key='Home'
                            onClick={() => setCurrentPage('Home')}
                        >
                            <li
                                className='nav-item'
                                style={
                                    currentPage === 'Home'
                                        ? currentPageStyle
                                        : { color: 'gray' }
                                }
                            >
                                Home
                            </li>
                        </Link>
                        <Link
                            to="/about"
                            key='About'
                            onClick={() => setCurrentPage('About')}
                        >
                            <li
                                className='nav-item'
                                style={
                                    currentPage === 'About'
                                        ? currentPageStyle
                                        : { color: 'gray' }
                                }
                            >
                                About Us
                            </li>
                        </Link>
                        {/* <Link
                            to="/services"
                            key='Portfolio'
                            onClick={() => setCurrentPage('Portfolio')}
                        >
                            <li
                                className='nav-item dropdown'
                                style={
                                    currentPage === 'Portfolio'
                                        ? currentPageStyle
                                        : { color: 'gray' }
                                }
                            >
                                What we do &#9207;
                                <div className='dropdown-options'>
                                    <Link to="/portfolio">Portfolio</Link>
                                    <Link to="/portfolio">Projects</Link>
                                    <Link to="/portfolio">Sponsors</Link>
                                </div>
                            </li>
                        </Link> */} 
                        <Link
                            to="/services"
                            key='Services'
                            onClick={() => setCurrentPage('Services')}
                        >
                            <li
                                className='nav-item'
                                style={
                                    currentPage === 'Services'
                                        ? currentPageStyle
                                        : { color: 'gray' }
                                }
                            >
                                Services
                            </li>
                        </Link>
                        <Link
                            to="/about"
                            key='About'
                            onClick={() => setCurrentPage('Our Team')}
                        >
                            <li
                                className='nav-item'
                                style={
                                    currentPage === 'Out Team'
                                        ? currentPageStyle
                                        : { color: 'gray' }
                                }
                            >
                                Our Team
                            </li>
                        </Link>
                        <Link
                            to="/contact"
                            key='Contact'
                            onClick={() => setCurrentPage('Contact')}
                        >
                            <li
                                className='nav-item'
                                style={
                                    currentPage === 'Contact'
                                        ? currentPageStyle
                                        : { color: 'gray' }
                                }
                            >
                                Contact Us
                            </li>
                        </Link>
                        <Link to="/hire-us">
                            <button className='nav-button'>
                                Get a Quote
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar