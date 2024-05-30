import React, { useState } from "react";
import Main from "../components/Layout/Main";
import "../components/Styles/WorkStyles.css";

const Work = () => {
  const workImages = [
    {
      src: "/images/Designer (1).jpeg",
      title: "hi",
      price: "₹1299",
      description: "hello gates",
    },
    {
      src: "/images/Designer (3).jpeg",
      title: "hi",
      price: "₹1299",
      description: "hello gates",
    },
    {
      src: "/images/Designer (4).jpeg",
      title: "hi",
      price: "₹1299",
      description: "hello gates",
    },
    {
      src: "/images/Designer (5).jpeg",
      title: "hi",
      price: "₹1299",
      description: "hello gates",
    },
    {
      src: "/images/Designer (6).jpeg",
      title: "hi",
      price: "₹1299",
      description: "hello gates",
    },
    {
      src: "/images/Designer (7).jpeg",
      title: "hi",
      price: "₹1299",
      description: "hello gates",
    },
  ];

  const workImages2 = [
    {
      src: "/images/Designer (1).jpeg",
      title: "hi",
      price: "₹1299",
      description: "hello gates",
    },
    {
      src: "/images/Designer (3).jpeg",
      title: "hi",
      price: "₹1299",
      description: "hello gates",
    },
    {
      src: "/images/Designer (4).jpeg",
      title: "hi",
      price: "₹1299",
      description: "hello gates",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (imgSrc) => {
    return setSelectedImage(imgSrc);
  };
  const handleClose = () => {
    return setSelectedImage(null);
  };

  return (
    <Main>
      <div className="initialHeadings">
        <p>
          NOTE : Prices are indicated for the single-leaf version in the initial
          configuration. To calculate a different execution, additional options
          and delivery, please contact the manager - Tel: +381691788177
          Whatsapp, Telegram
        </p>
        <h3>Models</h3>
        <h1>External Doors Catalog</h1>
        <h2>Innovative Technology and Craftsmenship at Peak</h2>
      </div>
      <div className="imageComponents">
        {workImages.map((workImage, index) => {
          return (
            <>
              <div className="image01" key={index}>
                <img
                  alt="work-image"
                  src={workImage.src}
                  onClick={() => handleClick(workImage.src)}
                />
                <h1>{workImage.title}</h1>
                <h3>{workImage.price}</h3>
                <p>{workImage.description}</p>
              </div>
            </>
          );
        })}
        {selectedImage && (
          <div className="modal">
            <span onClick={handleClose}>close</span>
            <img
              alt="image-full"
              src={selectedImage}
              onClick={() => handleClose}
            />
          </div>
        )}
      </div>
      <div className="imageComponents2">
        {workImages2.map((workImage, index) => {
          return (
            <>
              <div className="image01" key={index}>
                <img
                  alt="work-image"
                  src={workImage.src}
                  onClick={() => handleClick(workImage.src)}
                />
                <h1>{workImage.title}</h1>
                <h3>{workImage.price}</h3>
                <p>{workImage.description}</p>
              </div>
            </>
          );
        })}
        {selectedImage && (
          <div className="modal">
            <span onClick={handleClose}>close</span>
            <img
              alt="image-full"
              src={selectedImage}
              onClick={() => handleClose}
            />
          </div>
        )}
      </div>
      <div className="imageComponents3">
        <img
          alt="image-door"
          src="/images/Designer (3).jpeg"
          className="image03"
        />
        <h1>doors 003</h1>
        <h3>from ₹1299</h3>
        <p>descripton of door</p>
      </div>
      <div className="imageComponents2">
        {workImages2.map((workImage, index) => {
          return (
            <>
              <div className="image01" key={index}>
                <img
                  alt="work-image"
                  src={workImage.src}
                  onClick={() => handleClick(workImage.src)}
                />
                <h1>{workImage.title}</h1>
                <h3>{workImage.price}</h3>
                <p>{workImage.description}</p>
              </div>
            </>
          );
        })}
        {selectedImage && (
          <div className="modal">
            <span onClick={handleClose}>close</span>
            <img
              alt="image-full"
              src={selectedImage}
              onClick={() => handleClose}
            />
          </div>
        )}
      </div>
      <div className="3DPart">
        <div className="3dImage">
          <img
          alt="3dImage"
          src=""
          />
        </div>
        <div className="Gcolors">
          <img 
          alt="colors-image"
          src=""/>
          <img 
          alt="doors-image"
          src=""/>
          <img 
          alt="construction-image"
          src=""/>
        </div>
        <div className="3dDetails">
          <h1>Originals 3D models for designers and architects</h1>
          <p>.max format, version 2024</p>
          <div className="hr"></div>
          {/* <a href="/pdf/Dip.pdf" download="Dip.pdf">Link to Download</a> */}
        </div>
      </div>
    </Main>
  );
};

export default Work;
