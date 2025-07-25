import React from 'react'
import { Route, Routes } from 'react-router'
import  Home from "./pages/Home"
import  Contact from "./pages/Contact"
import  About from "./pages/About"
import  Destinations from "./pages/Destinations"
import MainLayout from "./Layouts/MainLayout"


const App = () => {
  return (
    <MainLayout>
     
      <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/About' element={<About />} />
     <Route path='/Contact' element={<Contact />} />
     <Route path='/Destinations' element={<Destinations />} />
     <Route path='/' element={<Home />} />
      </Routes>
  
   
    </MainLayout>
  );
  
};

export default App

