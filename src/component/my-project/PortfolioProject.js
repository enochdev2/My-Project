import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import DisplayPage from "./pages/DisplayPage";
import './my-project.css'
import Contact from "./Contact";



const PortfolioProject = () => {
  const [sideBar, setSideBar] = useState(false)

  const openSideBar = () => {
    setSideBar(true)
  }
  const closeSideBar = () => {
    setSideBar(false)
  }
  return (
    <div>

      <Router>
        <div className='container'>
          <Navbar openSideBar={openSideBar} />
          <Contact />
          {sideBar && <SideBar sideBar={sideBar} closeSideBar={closeSideBar} />}

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/SingleProject" />
            <Route path="/displayPage/:id" element={<DisplayPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}


export default PortfolioProject;