// pages/UserRegister.jsx
import "../../styles/auth-shared.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UserRegister() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post(
      "http://localhost:3000/api/auth/user/register",
      {
        fullName:firstName+" "+lastName,
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    console.log(response.data);
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>User Register</h1>
        <p>Create your account</p>

        {/* FORM START */}
        <form onSubmit={handleSubmit}>
          <div className="auth-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              required
            />
          </div>

          <div className="auth-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              required
            />
          </div>

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
            Register
          </button>
        </form>
        {/* FORM END */}

        <div className="auth-footer">
          <p>
            Already a user? <Link to="/user/login">Login</Link>
          </p>
          <p>
            Register as a food partner?{" "}
            <Link to="/food-partner/register">Food Partner Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
