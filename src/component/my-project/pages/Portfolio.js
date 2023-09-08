import React from "react"
import SingleProject from './SingleProject'
import { Link } from 'react-router-dom';
import { datas } from '../Data'


const Portfolio = () => {
  return (
    <div className="port">
      <h1> My portfolio</h1>
      <div className="line"></div>
      <div className="singleport">
        {datas.map((data, index) => {
          const { id, link, name, image, gitlink } = data;
          return (
            <SingleProject key={index} idx={index} {...data} />
          )
        })}
      </div>
    </div>
  )
}


export default Portfolio;