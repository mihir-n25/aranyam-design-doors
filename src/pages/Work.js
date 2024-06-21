import React, { useEffect, useRef, useState } from "react";
import Main from "../components/Layout/Main";
import "../components/Styles/WorkStyles.scss";
import {motion} from "framer-motion"
import gsap from "gsap";

const Work = () => {
  const workImages = [
    {
      src: "/images/Designer (1).jpeg",
      title: "DarkSide",
      price: "From ₹1299",
      description:
        "This model can be made in a combination of veneer and enamel of these colors",
    },
    {
      src: "/images/Designer (3).jpeg",
      title: "DarkSide",
      price: "From ₹1299",
      description:
        "This model can be made in a combination of veneer and enamel of these colors",
    },
    {
      src: "/images/Designer (4).jpeg",
      title: "DarkSide",
      price: "From ₹1299",
      description:
        "This model can be made in a combination of veneer and enamel of these colors",
    },
    {
      src: "/images/Designer (5).jpeg",
      title: "DarkSide",
      price: "From ₹1299",
      description:
        "This model can be made in a combination of veneer and enamel of these colors",
    },
    {
      src: "/images/Designer (6).jpeg",
      title: "DarkSide",
      price: "From ₹1299",
      description:
        "This model can be made in a combination of veneer and enamel of these colors",
    },
    {
      src: "/images/Designer (7).jpeg",
      title: "DarkSide",
      price: "From ₹1299",
      description:
        "This model can be made in a combination of veneer and enamel of these colors",
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

  const enterMouseAnimation = {
    initial : {scale : 0 , x : "-50%" , y : "-50%"},
    open : {scale : 1 , x : "-50%" , y : "-50%" , transition : {duration : 0.4 , ease : [0.76 , 0 , 0.24 ,1]}},
    close : {scale : 0 , x : "-50%" , y : "-50%" , transition : {duration : 0.4 ,ease : [0.32 , 0 , 0.67 ,0]}},
  }

  const cursorWork = useRef(null)
  const cursorWorkLabel = useRef(null)

  const [active, setActive] = useState(false)

  useEffect(() => {

    const moveCursorAboutX = gsap.quickTo(cursorWork.current , "left" , {duration : 0.5 , ease : "power3"})
    const moveCursorAboutY = gsap.quickTo(cursorWork.current , "top" , {duration : 0.5 , ease : "power3"})

    const moveCursorLabelX = gsap.quickTo(cursorWorkLabel.current , "left" , {duration : 0.45 , ease : "power3"})
    const moveCursorLabelY = gsap.quickTo(cursorWorkLabel.current , "top" , {duration : 0.45 , ease : "power3"})

  window.addEventListener("mousemove" , (e) => {
    const {clientX , clientY} = e;

    moveCursorAboutX(clientX);
    moveCursorAboutY(clientY);
    
    moveCursorLabelX(clientX);
    moveCursorLabelY(clientY);
  })
  }, [])

  return (
    <Main>
      <div className="initialHeadings">
        <h3>Models</h3>
        <h1>External Doors Catalog</h1>
        <h2>Innovative Technology and Craftsmenship at Peak</h2>
        <p>
          NOTE : Prices are indicated for the single-leaf version in the initial
          configuration. To calculate a different execution, additional options
          and delivery, please contact the manager - Tel: +381691788177
        </p>
      </div>
      <div className="imageComponents" onMouseEnter={() => {setActive(true)}} onMouseLeave={() => {setActive(false)}} >
      {workImages.map((workImage, index) => (
        <div 
          className="image01" 
          key={index}
        >
          <img alt="image" src={workImage.src} />
          <h1>{workImage.title}</h1>
          <h3>{workImage.price}</h3>
          <p>{workImage.description}</p>
        </div>
      ))}
      </div>
      <motion.div ref={cursorWork} variants={enterMouseAnimation} initial={"initial"} animate={active ? "open" : "close"} className="workCursor"></motion.div>
      <motion.div ref={cursorWorkLabel} variants={enterMouseAnimation} initial={"initial"} animate={active ? "open" : "close"} className="workCursorLabel">View</motion.div>

      <div className="imageComponents2">
        {workImages2.map((workImage, index) => {
          return (
            <>
              <div className="image01" key={index}>
                <img
                  alt="work"
                  src={workImage.src}
                />
                <h1>{workImage.title}</h1>
                <h3>{workImage.price}</h3>
                <p>{workImage.description}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="imageComponents3">
        <img alt="door" src="/images/Designer (3).jpeg" />
        <h1>doors 003</h1>
        <h3>From ₹1299</h3>
        <p>
          This model can be made in a combination of veneer and enamel of these
          colors
        </p>
      </div>
      <div className="imageComponents2">
        {workImages2.map((workImage, index) => {
          return (
            <>
              <div className="image01" key={index}>
                <img
                  alt="work"
                  src={workImage.src}
                />
                <h1>{workImage.title}</h1>
                <h3>{workImage.price}</h3>
                <p>{workImage.description}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="Gcolors">
        <img alt="colors" src="/images/Enamel.jpg" />
        <h3>
          This model can be made in different versions according to your sizes.
          Our engineers and designers will help you choose the best option!
        </h3>
        <img alt="doors" src="/images/view-desktop.svg" />
        <h3>
          The unique construction technology of BURKOVSKY entrance doors is a
          barrier against all irritants that can disturb your comfort and
          harmony.
        </h3>
        <img alt="construction" src="/images/slice2.jpg" />
      </div>
      <hr />
      <div className="threeDPart">
        <div className="threeDImage">
          <img
            alt="3dImage"
            src="https://optim.tildacdn.com/tild6537-3561-4066-b064-306431623962/-/format/webp/10000.png"
          />
        </div>
        <div className="threeDetails">
          <h1>Originals 3D models for designers and architects</h1>
          <p>.max format, version 2024</p>
          <div className="hr"></div>
          <a href="https://disk.yandex.ru/d/hiYLeapXzqSe8Q" target="_blank" rel="noreferrer">
            Link to Download
          </a>
        </div>
      </div>
    </Main>
  );
};

export default Work;
