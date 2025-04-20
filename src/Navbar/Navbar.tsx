import { Outlet, Link } from "react-router-dom";
import './Navbar.css'
function Navbar(){
  return(
    <>
      <nav>
        <ul>
          <li><Link to="/"><p>Home</p></Link></li>
          <li><Link to="/resume"><p>Resume</p></Link></li>
          <li><Link to="/work-samples"><p>Work Samples</p></Link></li>
        </ul>
      </nav>
      <div className="main">
        <Outlet/>
      </div>
    </>
  );
}
export default Navbar;