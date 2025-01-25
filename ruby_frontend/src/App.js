// filepath: /Users/rishavacharya/Desktop/customer_ticket_proj/ruby_frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Tickets  from './components/Ticket';
import CreateTicket from './components/CreateTicket';
import Header from './components/Header';
import Footer from './components/Footer'; 


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/create-ticket" element={<CreateTicket />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};


export default App;
