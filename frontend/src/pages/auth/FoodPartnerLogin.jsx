// pages/PartnerLogin.jsx
import "../../styles/auth-shared.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function FoodPartnerLogin() {
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value; 
    const response= await axios.post("http://localhost:3000/api/auth/food-partner/login",{
      email,
      password
    },
    {
      withCredentials:true,
    }
  );

    console.log( response.data);
    navigate("/create-food");
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
