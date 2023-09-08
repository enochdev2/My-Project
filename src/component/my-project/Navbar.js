import React from "react"
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ openSideBar }) => {
    return (
        <div className="navBar">
            <Link to="/">Home</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/portfolio">Portfolio</Link>
            {/* <Link to="/contact">Contact Page</Link> */}
            <FaBars className="menu" onClick={openSideBar} />
        </div>
    );
}


export default Navbar;