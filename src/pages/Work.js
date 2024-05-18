import React, { useState } from 'react'
import Main from '../components/Layout/Main';
import "../components/Styles/WorkStyles.css";

const Work = () => {
  const workImages = [
    {
      src : "/images/Designer (1).jpeg"
    },
    {
      src : "/images/Designer (3).jpeg"
    },
  ]

  const [selectedImage, setSelectedImage] = useState(null)

  const handleClick = (imgSrc) => {
    return setSelectedImage(imgSrc);
  }
  const handleClose = () => {
    return setSelectedImage(null);
  }


  return (
    <Main>
      <div className='initialHeadings'>
        <p>NOTE : Prices are indicated for the single-leaf version in the initial configuration. To calculate a different execution, additional options and delivery, please contact the manager -
Tel: +381691788177 Whatsapp, Telegram</p>
      <h3>Models</h3>
      <h1>External Doors Catalog</h1>
      <h2>Innovative Technology and Craftsmenship at Peak</h2>
      </div>
      <div className='imageComponents'>
        {
        workImages.map((workImage , index) => {
          return(
            <div className='image01' key={index}>
            <img 
            alt='work-image'
            src={workImage.src}
            onClick={() => handleClick(workImage.src)}
            />
            </div>
          )
        })
}
{
  selectedImage && (
    <div className='modal'>
      <span onClick={handleClose}>close</span>
      <img
      alt='image-full'
      src={selectedImage}
      onClick={() => handleClose}
      />
    </div>
  )
}

      </div>
    </Main>
  )
}

export default Work