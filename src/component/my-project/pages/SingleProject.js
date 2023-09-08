import React from "react"
import { Link, useNavigate } from 'react-router-dom';


const SingleProject = ({ id, image, name, link, gitlink, idx }) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="card" onClick={() => navigate(`/displayPage/${idx}`)}>
        <img src={image} alt="source" className="project-img" />
        <div className="name"><h3>{name}</h3></div>
      </div>
    </div>
  )
}

export default SingleProject;