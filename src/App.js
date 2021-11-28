import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import {Routes,Route } from 'react-router-dom';
import Notfound from './components/pages/Notfound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
      <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Notfound/>} />
        <Route path="/users/add" element={<AddUser/>} />
        <Route path="/users/edit/:id" element={<EditUser/>} />
        <Route path="/users/:id" element={<User/>} />
      </Routes>
    </div>
  );
};

export default App;
