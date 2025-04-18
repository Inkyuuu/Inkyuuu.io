import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar(){
  return(
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/work-samples">Work Samples</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </>
    
  );
}
export default Navbar;