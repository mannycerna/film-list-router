import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Films from "./pages/Films"
import FilmDetail from "./pages/FilmDetail"
import "./server"  //used mirage api to simulate a server serving the data api --data source is here
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/films">Films</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<FilmDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
