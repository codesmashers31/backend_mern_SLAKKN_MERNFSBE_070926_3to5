import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const name = form.name.trim();
    const email = form.email.trim().toLowerCase();
    const password = form.password;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;

    // Required validation
    if (!name || !email || !password) {
      return setError("All fields are required");
    }

    // Name validation
    if (name.length < 3 || name.length > 50) {
      return setError("Name must contain 3 to 50 characters");
    }

    // Email validation
    if (!emailRegex.test(email)) {
      return setError("Enter a valid email");
    }

    // Password validation
    if (!passwordRegex.test(password)) {
      return setError(
        "Password needs uppercase, lowercase, number and special character (8-64 characters)"
      );
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,
        { name, email, password }
      );

      alert(response.data.message);
      navigate("/login");

    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Registration failed"
      );
    }
  };

  return (
    <>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>

      {error && <p role="alert">{error}</p>}

      <Link to="/login">Already registered? Login</Link>
    </>
  );
};

export default Register;