import React from 'react'
import { Link } from "react-router-dom";
import "../assets/Css/Navbar.css";

export const TeamsList = () => {
  return (
    <nav className="navbar">
      <h1>Team List</h1>

      <ul className="nav-links">
        <li><Link to="/teams/india">India</Link></li>
        <li><Link to="/teams/australia">Australia</Link></li>
        <li><Link to="/teams/england">England</Link></li>
        <li><Link to="/teams/csk">CSK</Link></li>
        <li><Link to="/teams/rcb">RCB</Link></li>
        <li><Link to="/teams/mi">MI</Link></li>
        <li><Link to="/teams/kkr">KKR</Link></li>
        <li><Link to="/teams/gt">GT</Link></li>
        <li><Link to="/teams/srh">SRH</Link></li>
        <li><Link to="/teams/rr">RR</Link></li>
      </ul>
    </nav>
  );
};
