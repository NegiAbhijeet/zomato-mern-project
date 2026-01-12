import "../../styles/auth-shared.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function FoodPartnerRegister() {
  const navigate=useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    const businessName=e.target.businessName.value;
    const contactName=e.target.contactName.value;
    const phone=e.target.phone.value;
    const address=e.target.address.value;
    const email=e.target.email.value;
    const password=e.target.password.value;

    const response=await axios.post("http://localhost:3000/api/auth/food-partner/register",{
      name:businessName,
      contactName,
      phone,
      address,
      email,
      password
    },
    {
      withCredentials:true,
    }
  );

    console.log(response.data);
    navigate("/create-food");
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
              required
            />
          </div>

          <div className="auth-group">
            <label>Contact Name</label>
            <input
              type="text"
              name="contactName"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="auth-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              required
            />
          </div>

          <div className="auth-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Restaurant address"
              required
            />
          </div>

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
