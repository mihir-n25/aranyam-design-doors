import { motion } from "framer-motion";
import "./Curve.css";
import { useState } from "react";
import { useEffect } from "react";

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children }) {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page curve">
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background"
      />

      {dimensions.width != null && <SVG {...dimensions} />}

      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `

        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0

    `;

  const targetPath = `

        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0

    `;

    const curve = {
        initial: {
          d: initialPath,
        },
    
        enter: {
          d: targetPath,
    
          transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
        },
    
        exit: {
          d: initialPath,
    
          transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
        },
      };
    
    
     const slide = {
      initial: {
        top: "-300px",
      },
    
      enter: {
        top: "-100vh",
    
        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    
        transitionEnd: {
          top: "100vh",
        },
      },
    
      exit: {
        top: "-300px",
    
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      },
    };
    

  return (
    <motion.svg {...anim(slide)}>
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  );
};
