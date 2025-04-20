import { Outlet, Link } from "react-router-dom";
import './Navbar.css'
function Navbar(){
  return(
    <>
      <nav>
        <ul>
          <li><Link to="/"><a className="text-ul">Home</a></Link></li>
          <li><Link to="/resume"><a className="text-ul">Resume</a></Link></li>
          <li><Link to="/work-samples"><a className="text-ul">Work Samples</a></Link></li>
        </ul>
      </nav>
      <div className="main">
        <Outlet/>
      </div>
    </>
  );
}
export default Navbar;