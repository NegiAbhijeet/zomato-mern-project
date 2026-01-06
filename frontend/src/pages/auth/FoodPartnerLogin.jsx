// pages/PartnerLogin.jsx
import "../../styles/auth-shared.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function FoodPartnerLogin() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    console.log("Partner Login Data:", loginData);

    // Example API call (use later)
    // await axios.post("http://localhost:5000/api/food-partner/login", loginData);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Partner Login</h1>
        <p>Access your restaurant dashboard</p>

        {/* FORM START */}
        <form onSubmit={handleSubmit}>
          <div className="auth-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="partner@example.com"
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
            New partner?{" "}
            <Link to="/food-partner/register">Register</Link>
          </p>
          <p>
            Login as user?{" "}
            <Link to="/user/login">User Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
