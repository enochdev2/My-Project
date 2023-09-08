import React from 'react'
import { useParams } from 'react-router-dom'
import { datas } from '../Data'


const DisplayPage = () => {
  const { id } = useParams()
  const { image, details, name, link, gitlink } = datas[id]
  return (
    <>
      <div className='displayPage'>
        <img src={image} className='displayimg' alt="imgage" />
        <div className="textdisplay">
          <p className='names'>{name}</p>
          <p className='name'>{details}</p>
          <a href={link} className='link' target='_blank'><button type="button" className='lin'>webapp</button></a>
          <a href={gitlink} className='link' target='_blank' ><button type="button" className='lin'>Repo</button></a>
        </div>
      </div>
    </>
  )
}

export default DisplayPage