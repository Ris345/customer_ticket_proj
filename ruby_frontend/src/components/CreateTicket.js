const CreateTicket = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/v1/tickets', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ ticket: { title, description, status } }) 
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="create-ticket">
    <h2>Create a New Ticket</h2>
    <form>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Description:
        <textarea name="description"></textarea>
      </label>
      <label>
        Status:
        <input type="text" name="title" />
      </label>
      <label>
        Priority:
        <input type="text" name="title" />
      </label>
      <label>
        User:
        <input type="text" name="title" />
      </label>
    </form>
    <button onClick={handleSubmit}>Submit</button>
  </div>


  ) 
  
};
  
  export default CreateTicket; 