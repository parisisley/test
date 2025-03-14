import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/footer";
import Services from "./Services/Services";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Footer/>
          <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
