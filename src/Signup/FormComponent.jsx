import { useState, useEffect } from 'react';
import './styles.scss';

const FormComponent = () => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();


  };

  return (
    <div className="Form">
      <h1>Alaska Airlines Interview Question</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name"/>
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="text" name="dob"/>
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username"/>
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" />
        </div>
        <button type="submit" className="submitButton">Join</button>
      </form>
    </div>
  );
};

export default FormComponent;
