import {motion} from "framer-motion"
import './Curve.css';

export default function Curve({children}){
    const anim = (variants) => {
        return {
            initial : "initial",
            animate : "enter",
            exit : "exit",
            variants
        }
    }

    return (
        <div className="page curve">
            {children}
        </div>
    )
}

const SVG = () => {
    return (
        <svg>
            <path d=''></path>
        </svg>
    )
}