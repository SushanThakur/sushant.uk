import { Route } from "react-router-dom";
import menu from '../assets/menu.png';
import close from '../assets/close.png';

export default function NavBar() {
  return(
    <div className="nav-container">
      <div className="nav-name"><a href="#">Sushant Thakur</a></div>
      <ul className="desktop-view-nav">
        <a href="#"><li>Home</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#skills"><li>Skills</li></a>
        <a href="#contact"><li>Contact</li></a>
      </ul>
      <div className="mobile-view-nav">
      <div className="mobile-view-options" id="menu">
          <img className="mobile-nav-options" src={menu} alt="menu"/>
          <img className="mobile-nav-options" id="close" src={close} alt="close"/>
        </div>
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
      </div>
    </div>
  )
}

const mobileNavDiv = document.getElementsByClassName("mobile-view-nav");
const menuOption = document.getElementById("menu");
const closeOption = document.getElementById("close");
