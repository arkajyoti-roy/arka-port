// import "./App.css";
import React, { useState, useEffect } from 'react';
import Nav from "./Components/Nav";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Edu from "./Components/Edu";
import Loader from "./Components/Loader";

function App() {

  const [showFirstDiv, setShowFirstDiv] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstDiv(false);
    }, 2900); 

    return () => clearTimeout(timer); 
  }, []);


  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black'
  };

  return (
    <>
    <div>
     {showFirstDiv ? (
    <div style={containerStyle}>
    <Loader/>
    </div>
    ) : (
    <div>
      <Nav />

      <Home />
      <br />
      {/* <br />
      <br />
      <br /> */}
      <About />
      <br />
      <br />
      {/* <br /> */}
      {/* <Edu/> */}
      <Skills />
      <br />
      <br />
      <br />
      <br />
      <Services />
      <Projects />
      {/* <br /> */}
      <br />
      <br />
      <Contact />

      <Footer />
      </div>
    )}
      </div>
    </>
  );
}

export default App;
