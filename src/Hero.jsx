import styled from "styled-components";
import './Hero.css';
import { Routes,Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Tools from "./components/Tools";
import Skills from "./components/Skills";
import About from "./components/About";
import Works from "./components/Works";

const Hero = () => {
    const location = useLocation();
      return (
       
        <Content>
        
          <Header></Header>
          <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index element = {<About/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/works' element={<Works/>} />
            <Route path='/tools' element={<Tools/>} />
          </Routes>
          <Footer></Footer>
          </AnimatePresence>
        </Content>
         
      );
    };
    
    const Content = styled.section ` 
      min-height: 100%;
      padding: 0 2.5vw ;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-flow: column;
      position: relative;
    ` ;
    export default Hero;