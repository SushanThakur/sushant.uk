import logo from './logo.svg';
import './App.css';
import './nav.css';
import './css/home.css';
import './css/projects.css';
import './css/contact.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};
