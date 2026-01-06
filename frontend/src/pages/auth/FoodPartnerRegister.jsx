import "../../styles/auth-shared.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function FoodPartnerRegister() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 🔴 stops page reload
    console.log("Food Partner Register Data:", formData);

    // later: send data to backend using fetch / axios
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Food Partner Register</h1>
        <p>Join us as a food partner</p>

        <form onSubmit={handleSubmit}>
          <div className="auth-group">
            <label>Business Name</label>
            <input
              type="text"
              name="businessName"
              placeholder="Food Hub Pvt Ltd"
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>

          <div className="auth-group">
            <label>Contact Name</label>
            <input
              type="text"
              name="contactName"
              placeholder="John Doe"
              value={formData.contactName}
              onChange={handleChange}
            />
          </div>

          <div className="auth-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="auth-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Restaurant address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="auth-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="partner@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="auth-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="auth-button">
            Register
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already a partner? <Link to="/food-partner/login">Login</Link>
          </p>
          <p>
            Register as a user? <Link to="/user/register">User Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
