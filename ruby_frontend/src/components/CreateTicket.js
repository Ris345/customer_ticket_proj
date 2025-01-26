import React, { useState } from 'react';

const CreateTicket = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/v1/tickets', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ title, description, status, priority, user }) 
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="create-ticket">
      <h2>Create a New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </label>
        <label>
          Description:
          <textarea 
            name="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </label>
        <label>
          Status:
          <input 
            type="text" 
            name="status" 
            value={status} 
            onChange={(e) => setStatus(e.target.value)} 
          />
        </label>
        <label>
          Priority:
          <input 
            type="text" 
            name="priority" 
            value={priority} 
            onChange={(e) => setPriority(e.target.value)} 
          />
        </label>
        <label>
          User:
          <input 
            type="text" 
            name="user" 
            value={user} 
            onChange={(e) => setUser(e.target.value)} 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateTicket;