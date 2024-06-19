import React from 'react'
import "../../components/Styles/ServiceStyles.scss"


const Project = ({index , title , description , setModal}) => {
  return (
    <div className='project' onMouseEnter={() => {setModal({active : true , index : index})}} onMouseLeave={() => {setModal({active : false , index : index})}}>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    
  )
}

export default Project