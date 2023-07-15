import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Student from "./components/Student";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Manage from "./components/Manage";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Test from "./components/Test";
import BlogDetail from './components/BlogDetail';


function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/creators" element={<Student/>} />
         <Route path="/manage" element={<Manage/>} />
         <Route path="/blog" element={<Blog/>} />
         <Route path="/blogs/:userId" element={<BlogDetail/>} />
       </Routes>
       <Footer/>
    </BrowserRouter>
    
  );
}

export default App;