import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/footer";
import Services from "./Services/Services";
import Home from "./Home/Home";
import Contact from "./Contact/ContactPage";
import Projects from "./Projects/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/projects' element={<Projects/>}/>

          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;