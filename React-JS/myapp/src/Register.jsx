import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = form;

    if (!name || !password) {
      alert("All fields are required");
    } else {
      navigate("/Dash", { state: { name } });
    }
  };

  return (
    <div>
      <h1 className='display-1 text-center'>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Username:
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </label>
        <br /><br />
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
        <button type="reset" onClick={() => setForm({ name: "", password: "" })}>Reset</button>
      </form>
    </div>
  );
}

export default Register;
