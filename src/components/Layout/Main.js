import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {AnimatePresence , motion} from 'framer-motion'
import Transition from './LesGoTransition'

const Main = ({children}) => {
  return (
    <div>
              <Header/>
      <AnimatePresence mode='wait'>
        <motion.div key={children} style={{height : 'full'}}>
          <Transition/>
        <main style={{minHeight : '100vh'}}>
            {children}
        </main>

        </motion.div>
        </AnimatePresence>
        <Footer/>
    </div>
  )
}

export default Main