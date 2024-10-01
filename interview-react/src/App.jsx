import { useState } from 'react';
import './styles.scss';

function App() {
  const handleChange = (e) => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="App">
      <h1>Interview Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Firstname</label>
          <input type="text" name="firstname" onChange={handleChange} />
        </div>
        <div>
          <label>Lastname</label>
          <input type="text" name="lastname"  onChange={handleChange} />
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" name="dob"onChange={handleChange} />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" onChange={handleChange} />
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password"  onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;