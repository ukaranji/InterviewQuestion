import { useState } from 'react';
import './styles.scss';

function App() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    phoneNumber: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
        </div>
        <div>
          <label>Lastname</label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;