import React, { useEffect, useState } from 'react';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  // ticket descriptipon should be editable 
  // ticket status should be ediatble 
  // ticket should be editable 
  // 
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/tickets', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      if(Array.isArray(data)){
        setTickets(data)
      } else {
        console.log('API response is not an array');
      }
    })
    .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>All Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>Status: {ticket.status}</p>
            <p>Priority: {ticket.priority}</p>
            <p>User ID: {ticket.user_id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tickets;