import React, { useState } from 'react'
import './Navbar.scss'
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../assets/newLogo.png'

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState('Home')

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
                                        ? { color: 'black' }
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
                                        ? { color: 'black' }
                                        : { color: 'gray' }
                                }
                            >
                                About Us
                            </li>
                        </Link>
                        <Link
                            to="/portfolio"
                            key='Portfolio'
                            onClick={() => setCurrentPage('Portfolio')}
                        >
                            <li
                                className='nav-item dropdown'
                                style={
                                    currentPage === 'Portfolio'
                                        ? { color: 'black' }
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
                                        ? { color: 'black' }
                                        : { color: 'gray' }
                                }
                            >
                                Contact
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