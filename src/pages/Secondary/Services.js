import React, { useState } from 'react'
import Project from './Project'
import Model from './Model'
import '../../components/Styles/ServiceStyles.scss'

const projects = [
    {
        title : "External Doors",
        description : "good quality doors",
        src : "service01.png",
        color : "#000000"
    },
    {
        title : "Internal Doors",
        description : "good quality doors",
        src : "/service01.png",
        color : "#8C8C8C"
    },
    {
        title : "Hardware",
        description : "good quality door",
        src : "/service01.png",
        color : "#EFE8D3"
    },
    {
        title : "Others",
        description : "good quality doors",
        src : "/service01.png",
        color : "#706D63"
    },
]

const Services = () => {

    const [modal, setModal] = useState({active : false , index : 0})
  return (
    <>
    <div className='main'>
    <div className='body'>
        {projects.map((project , index) => {
            return <Project key={index} index={index} title = {project.title} description = {project.description} setModal = {setModal}/>
        })}
    </div>
    <Model modal={modal} projects={projects}/>
    </div>
    </>
  )
}

export default Services


