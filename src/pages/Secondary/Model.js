import React, { useEffect, useRef } from 'react'
import "../../components/Styles/ServiceStyles.scss"
import {motion} from 'framer-motion'
import gsap from 'gsap'

const scaleAnimation = {
  initial : {scale : 0 , x : "-50%" , y : "-50%"},
  open : {scale : 1 , x : "-50%" , y : "-50%" , transition : {duration : 0.4 , ease : [0.76 , 0 , 0.24 ,1]}},
  close : {scale : 0 , x : "-50%" , y : "-50%" , transition : {duration : 0.4 , ease : [0.32 , 0 , 0.67 ,0]}}
}

const Model = ({projects , modal}) => {

  const {active , index} = modal;

  const container = useRef(null)

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current , "left" , {duration : 0.8 , ease : "power3"})
    const moveContainerY = gsap.quickTo(container.current , "top" , {duration : 0.8 , ease : "power3"})
  window.addEventListener("mousemove" , (e) => {
    const {clientX , clientY} = e;
    moveContainerX(clientX);
    moveContainerY(clientY);
  })
  }, [])
  
  return (
    <>
    <motion.div ref={container} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "closed"} className='modalContainer'>
        <div style={{top : index * -100 + "%"}} className='modalSlider'>
          {
            projects.map((project,index) => {
              const {src , color} = project;
              return <div className='modalAbout' key={`modal_${index}`} style={{backgroundColor : color}}>
                <img
                src={src}
                width={100}
                height={0}
                alt='Image'
                />
              </div>
            })
          }
        </div>
    </motion.div>
    <div className='cursorAbout'></div>
    <div className='cursorLabel'>View</div>
   </>
  )
}

export default Model