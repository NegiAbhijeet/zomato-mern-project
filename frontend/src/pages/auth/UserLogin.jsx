// pages/UserLogin.jsx
import "../../styles/auth-shared.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserLogin() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    console.log("User Login Data:", loginData);

    // Example API call (enable later)
    // await axios.post("http://localhost:5000/api/user/login", loginData);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>User Login</h1>
        <p>Welcome back, please sign in</p>

        {/* FORM START */}
        <form onSubmit={handleSubmit}>
          <div className="auth-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="auth-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        {/* FORM END */}

        <div className="auth-footer">
          <p>
            Don’t have an account?{" "}
            <Link to="/user/register">Register</Link>
          </p>
          <p>
            Login as food partner?{" "}
            <Link to="/food-partner/login">Partner Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
