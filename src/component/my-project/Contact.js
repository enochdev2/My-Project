import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { BiSolidContact, BiLogoGmail} from "react-icons/bi";
import {TfiEmail} from "react-icons/tfi";

const Contact = () => {
  return (
    <div className="contact">

    <a href="https://github.com/enochdev2"><FaGithub className='git'/></a>
     <a href="https://enochpromise.va@gmail.com"><BiLogoGmail  className='git'/></a>
     <a href="http://linkedin.com/in/enoch-akhabue-01b991269"><BiSolidContact  className="git"/></a>
     </div>
  )
}

export default Contact