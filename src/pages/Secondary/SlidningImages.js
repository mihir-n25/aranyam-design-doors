import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import '../../components/Styles/SlidingImages.scss'

const slider1 = [
    {
        color: "#e3e5e7",
        src: "service01.png"
    },
    {
        color: "#d6d7dc",
        src: "service02.png"
    },
    {
        color: "#e3e3e3",
        src: "service01.png"
    },
    {
        color: "#d4e3ec",
        src: "mihir2.png"
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "/mihir2.png"
    },
    {
        color: "#e5e0e1",
        src: "service01.png"
    },
    {
        color: "#d7d4cf",
        src: "mihir2.png"
    },
    {
        color: "#e1dad6",
        src: "service02.png"
    }
]

export default function SlidingImages() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className="slidingImages">
            <motion.div style={{x: x1}} className="slider01">
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className="project" style={{backgroundColor: project.color}} >
                                <div className="imageContainer">
                                    <img 
                                    fill={true}
                                    alt={"image"}
                                    src={project.src}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x : x2}} className="slider01">
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className="project" style={{backgroundColor: project.color}} >
                                <div key={index} className="imageContainer">
                                    <img 
                                    // fill={true}
                                    alt="image"
                                    src={project.src}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className="circleContainer">
                    <div className="circle"></div>
                </motion.div>
        </div>
    )
}