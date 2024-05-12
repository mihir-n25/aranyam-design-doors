import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const Magnetic = ({children}) => {

    const magnetic = useRef(null)
    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current , 'x' , {duration : 1 , ease : 'elastic.out(1,0.3)'});
        const yTo = gsap.quickTo(magnetic.current , 'y' , {duration : 1 , ease : 'elastic.out(1,0.3)'});

        magnetic.current.addEventListener("mousemove" , (e) => {
            const {clientX , clientY} = e;

            const {width , height , top , left} = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width/2);
            const y = clientY - (top + height/2)
            xTo(x*0.7);
            yTo(y*0.7)
        })
        magnetic.current.addEventListener("mouseleave" , (e) => {
            xTo(0);
            yTo(0); 
        })

    })
  return (
    React.cloneElement(children , {ref : magnetic})
  )
}

export default Magnetic