import React, { useRef } from "react";
import Main from "../components/Layout/Main";
import "../components/Styles/AboutStyles.scss";
import CountUp from "react-countup";
import Services from "./Secondary/Services";
import Magnetic from "../components/Utils/Magnetic";
import { slideUp, opacity } from "./Secondary/anim2";
import { useInView, motion } from "framer-motion";
import Curve from "../components/Animation/Curve";

const About = () => {
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <Main>
      <h1 className="text01">About Us</h1>
      <hr />
      <div className="about22">
        <div className="reactCount">
          <div className="count1">
            <CountUp start={0} end={14} duration={5} />+
            <h1>Year of Experience</h1>
          </div>
          <div className="count1">
            <CountUp start={0} end={280} duration={5} />+
            <h1>Happy Customers</h1>
          </div>
          <div className="count1">
            <CountUp start={0} end={125} duration={5} />+<h1>Doors SetUps</h1>
          </div>
        </div>
        <div className="reactCount2">
          <p>
            Our doors promise to safeguard your home while elevating its
            aesthetic appeal, making every entrance a grand welcome .
          </p>
        </div>
      </div>
      <div ref={description}>
        <motion.div
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="text1"
          style={{ margin: "7rem" }}
        >
          Open the door to elegance and security
        </motion.div>
        <div className="text002">
          <p>
            Ensuring quality craftsmanship, our doors are not just entrances,
            but statements of security and style, inviting you to step into a
            world of reliability . Crafted with precision and durability in
            mind.
          </p>
          <p>
            Our doors promise to safeguard your home while elevating its
            aesthetic appeal, making every entrance a grand welcome
          </p>
        </div>
      </div>
      <Magnetic>
        <button className="btn01">Contact</button>
      </Magnetic>

      <h1 className="abtFactory">Our Factory : Near Suchna Kendra , Bhilwara</h1>
      <div className="shop">
        <img src="shop1.png" alt="shop1" />
        <img src="shop2.png" alt="shop2" />
      </div>

      <div className="owner">
        <h1>About The Owner</h1>
        <hr style={{ marginBottom: "5rem" }} />
        <div className="owner01">
          <img src="mihir.png" />
          <p>
            Inspired by a lifelong passion for <span>craftsmanship</span> and <span>innovation</span>, our
            founder envisioned a world where every <span>doorway</span> tells a story of
            <span> quality</span> and <span>sophistication</span>. With a relentless dedication to
            excellence, our owner leads by example, shaping the <span>future of door </span>
            design and security with unwavering commitment and <span>vision</span>.
          </p>
        </div>
        <Magnetic>
          <button className="btn02">9079011955</button>
        </Magnetic>
      </div>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="last.png" alt="last" className="last" />
      </div>
    </Main>
  );
};

export default About;
