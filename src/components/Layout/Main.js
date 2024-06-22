import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Main = ({children}) => {
  return (
    <div>
              <Header/>
        <div key={children} style={{height : 'full'}}>
        <main style={{minHeight : '100vh'}}>
            {children}
        </main>
        </div>
        <Footer/>
    </div>
  )
}

export default Main