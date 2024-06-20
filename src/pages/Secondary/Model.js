import React from 'react'
import "../../components/Styles/ServiceStyles.scss"


const Model = ({projects , modal}) => {
  return (
    <div className='modalContainer'>
        <div className='modalSlider'>
          {
            projects.map((project,index) => {
              const {src , color} = project;
              return <div key={`modal_${index}`} style={{backgroundColor : color}} className='modal'>
                <img
                src={src}
                width={300}
                height={0}
                alt='Image'
                />
              </div>
            })
          }
        </div>
    </div>
  )
}

export default Model