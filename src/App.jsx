import React from 'react'
import { Footer, Header} from './components'  
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className=''>
      <Header/> 
       <Outlet/>
      <Footer/>
    </div>
  )
}

export default App