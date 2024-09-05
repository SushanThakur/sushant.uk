import { Route } from "react-router-dom";

export default function NavBar() {
  return(
    <div className="nav-container">
      <div><a href="#">Sushant</a></div>
      <ul>
        <a href="#home"><li>Home</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#skills"><li>Skills</li></a>
        <a href="#contact"><li>Contact</li></a>
      </ul>
    </div>
  )
}