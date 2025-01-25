import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



const Header = () => (
  <header className="header">
    <h1>Customer Ticket Management</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tickets">Tickets</Link></li>
        <li><Link to="/create-ticket">Create Ticket</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header; 
