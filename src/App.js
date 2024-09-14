import React from "react";
import Hero from "./Hero";
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/*' element = {<Hero/>}/>
      </Routes>
    </Router>
    
  )
}

export default App

