import { useState } from 'react';
import './styles.scss';

const FormComponent = () => {
  
  const handleChange = (e) => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="Form">
      <h1>Create Your Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Firstname</label>
          <input type="text" name="firstname"/>
        </div>
        <div>
          <label>Lastname</label>
          <input type="text" name="lastname" />
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="text" name="dob"/>
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" name="phoneNumber"/>
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username"/>
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" />
        </div>
        <button className="submitButton" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default FormComponent;