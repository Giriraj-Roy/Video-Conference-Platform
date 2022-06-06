import React from 'react'
// import Navbar from './components/Navbar'
import './App.css'
import SideMenu from './components/SideMenu'

const App = () => {
  return (
    <div className='appWhole'>
      <SideMenu/>
      <div className='app-body'>
        This is App Body
      </div>
    </div>
  )
}

export default App
