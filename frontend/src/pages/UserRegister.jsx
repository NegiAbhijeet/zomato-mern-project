// pages/UserRegister.jsx
// import "../styles/auth-shared.css";

export default function UserRegister() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>User Register</h1>
        <p>Create your account</p>

        <div className="auth-group">
          <label>Name</label>
          <input type="text" placeholder="John Doe" />
        </div>

        <div className="auth-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="auth-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <button className="auth-button">Register</button>

        <div className="auth-footer">
          Already have an account? Login
        </div>
      </div>
    </div>
  );
}
