import { Outlet, Link } from "react-router-dom";
import './Navbar.css'
function Navbar(){
  return(
    <nav>
      <ul className = "nav-items">
        <li className = "nav-item"><Link to="/">Home</Link></li>
        <li className = "nav-item"><Link to="/resume">Resume</Link></li>
        <li className = "nav-item"><Link to="/work-samples">Work Samples</Link></li>
      </ul>
      <Outlet/>
    </nav>
    
  );
}
export default Navbar;