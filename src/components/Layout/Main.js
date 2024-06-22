import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Curve from '../Animation/Curve'

const Main = ({children}) => {
  return (
    <Curve>
              <Header/>
        <div key={children} style={{height : 'full'}}>
        <main style={{minHeight : '100vh'}}>
            {children}
        </main>
        </div>
        <Footer/>
    </Curve>
  )
}

export default Main