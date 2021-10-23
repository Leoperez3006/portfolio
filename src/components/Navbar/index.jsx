import React from 'react'
// import { NavLink } from 'react-router-dom'

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                {/* <NavLink to ="/">
                <img src='../../images/pinguin.png'/>
                </NavLink> */}
                <Bars/>
                <NavMenu>
                    <NavLink to="/">
                        About me
                    </NavLink>
                    <NavLink to="/projects">
                        Major Projects
                    </NavLink>
                    <NavLink to="/all-projects">
                        All Projects
                    </NavLink>
                    <NavLink to="/contact-me">
                        Contact Me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
