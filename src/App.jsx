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
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
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
<Contact/>
      <Footer/>
    </>
  )
}

export default App
