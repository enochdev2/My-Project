import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import {Link} from 'react-router-dom'
const SideBar = ({closeSideBar}) => {
  return (
    <>
 <div className="sideBar">
    <div className="sideBar_wrapper">
        <Link to="/"onClick={closeSideBar} >Home</Link>
        <Link to="/skills" onClick={closeSideBar}>Skills</Link>
        <Link to="/portfolio" onClick={closeSideBar}>Portfolio</Link>
        <FaRegTimesCircle className="closeMenu" onClick={closeSideBar}/>
    </div>
    </div>
 </>
  )
}

export default SideBar