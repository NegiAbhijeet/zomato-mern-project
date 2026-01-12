// pages/UserLogin.jsx
import "../../styles/auth-shared.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email= e.target.email.value;
    const password= e.target.password.value;
    const response=await axios.post("http://localhost:3000/api/auth/user/login",{
      email,
      password
    },{
      withcredentials:true
    });

    console.log( response.data);
    navigate("/")
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
