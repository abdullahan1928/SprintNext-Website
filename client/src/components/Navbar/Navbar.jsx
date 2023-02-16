import React, { useState } from 'react'
import './Navbar.scss'
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../assets/newLogo.png'

const NAV_MENU = ["Services", "Portfolio", "About", "Contact"];

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState('')

    return (
        <>
            <div className='navbar-container'>
                <div className='nav-logo'>
                    <Link to="/" onClick={() => setCurrentPage('Home')}>
                        {/* <h1>
                            SPrintNext
                        </h1> */}
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="nav-links-container">
                    <ul className='nav-list'>
                        {NAV_MENU.map((menu, index) => {
                            return (
                                <Link
                                    to={
                                        menu === "" ?
                                            "/" :
                                            `/${menu.toLowerCase()}`
                                    }
                                    key={index}
                                    style={{
                                        borderBottom: menu === currentPage ?
                                            "1px solid black" :
                                            "",
                                    }}
                                    onClick={() => setCurrentPage(menu)}
                                >
                                    <li className='nav-item'>
                                        {menu.replace("-", " ")}
                                    </li>
                                </Link>
                            )
                        })}
                        <Link to="/hire-us">
                            <li className='nav-item nav-button'>
                                Hire Us
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar