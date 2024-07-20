import { useState } from 'react'

import './App.css'


import Nav from './Components/Nav'
import SideSocial from './Components/SideSocial'
import About from './Components/About'
import Skills from './Components/Skills'
import Services from './Components/Services'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Projects from './Components/Projects'




function App() {


  return (
    <>
      <Nav/>
      {/* <SideSocial/> */}
      <Home/>
      <br />
      <br />
      <br />
      <br />
      <About/>
      <br />
      <br />
      <br />
      <Skills/>
      <br />                  
      <br />                  
      <br />                  
      <br />                  
      <Services/>
      <Projects/>
      <br />
      <br />
      <br />
<Contact/>
      <Footer/>
    </>
  )
}

export default App
