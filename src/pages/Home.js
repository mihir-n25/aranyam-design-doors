import React, { useEffect, useRef, useState } from "react";
import Main from "../components/Layout/Main";
import "../components/Styles/HomeStyles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlidingImages from "./Secondary/SlidningImages";
import PreLoader from "./Secondary/PreLoader";
import {useInView , motion} from 'framer-motion'
import { animateWithGsap } from "../components/Utils/animation_g";
import { Link } from "react-router-dom";
import Services from "./Secondary/Services";
import Magnetic from "../components/Utils/Magnetic";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const description = useRef(null);
  const isInView = useInView(description)

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    })();
  }, [setIsLoading]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "200px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };


  return (
    <Main>
      <div className="main">
        <img src="Main.jpeg" alt="home1" />
        <div className="sliderContainer">
          <div className="slider">
            <p ref={firstText}>Aranyam Design & Art -</p>
            <p ref={secondText}>Aranyam Design & Art -</p>
          </div>
        </div>
        <div className="location">
          <p>Located In Bhilwara</p>
          <Link to="/contact">
          <i className="fa-solid fa-location-dot" style={{color : "black"}}/>
          </Link>
        </div>
        <div className="home002">
          <ul>
            <li>DOORS</li>
            <li>HARDWARE</li>
            <li>Others</li>
          </ul>
        </div>
      </div>
      <div className="main02" ref={description} >
        <div className="text03">

            <div style={{display : 'flex'}} >
          <p className="para1">
          Step into a world where quality meets affordability & standards in doors effortlessly. Our doors boast superior craftsmanship and security without compromising on price.
          </p>
          <p className="para1">
          Discover premium doors at unbeatable prices. Elevate your space with style and security, without breaking the bank.
          </p>
          </div>
        </div>
      </div>
<div style={{marginTop : "4rem"}}>
      <Magnetic>
          <button className="btn01">Work</button>
        </Magnetic>
        </div>
      
      <div className="service01">
          <h1>Services</h1>
          <Services />
          <hr style={{margin : "auto" , maxWidth : "67%"}}/>
        </div>

        <div className="main02">
        <div className="text03">

            <div style={{display : 'flex' , marginTop : "-4rem" , marginBottom : "4rem"}} >
          <p className="para1">
          Step into a world where quality meets affordability & standards in doors effortlessly. Our doors boast superior craftsmanship and security without compromising on price.
          </p>
          <p className="para1">
          Discover premium doors at unbeatable prices. Elevate your space with style and security, without breaking the bank.
          </p>
          </div>
        </div>
      </div>
      <SlidingImages />

      <div className="text101">
        <h4>FLAWLESS</h4>
        <h4>EXQUISITE</h4>
        <h4>UNIQUE</h4>
        <h1>Quality in every detail</h1>
        <p>
          Each of our employees highly appreciates their work, therefore, each
          stage of our work is carried out according to the highest quality of
          performance. We take care of our product at each of the 30 stages of
          production.
        </p>
      </div>
    </Main>
  );
};

export default Home;
