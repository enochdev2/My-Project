import React from "react"
import { FaNode, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from 'react-icons/bi'
import { SiHtml5, SiExpress, SiMongodb } from 'react-icons/si'
import { IoLogoCss3 } from 'react-icons/io'
import { BsGit } from 'react-icons/bs'



const FrontEnd = () => (
  <div className="front-End">
    <h3 className="titleIcons">Front-End & Back-End</h3>
    <div className="frontend-wrapper">
      <div>
        <SiHtml5 className="skillIcon html" />
        <h5>HTML</h5>
      </div>
      <div>
        <IoLogoCss3 className="skillIcon css" />
        <h5>CSS</h5>
      </div>
      <div>
        <BiLogoJavascript className="skillIcon js" />
        <h5>JAVASCRIPT</h5>
      </div>
      <div>
        <FaReact className="skillIcon react" />
        <h5>REACT</h5>
      </div>
      <div>
        <BsGit className="skillIcon react" />
        <h5>Git</h5>
      </div>
      <div>
        <FaNode className="skillIcon" />
        <h5>NODE JS</h5>
      </div>
      <div>
        <SiExpress className="skillIcon" />
        <h5>EXPRESS JS</h5>
      </div>
      <div>
        <SiMongodb className="skillIcon db" />
        <h5>MONGO DB</h5>
      </div>


    </div>
    {/* </div> */}

  </div>
)


export default FrontEnd;