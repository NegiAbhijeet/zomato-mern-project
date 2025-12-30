// pages/UserLogin.jsx
// import "../styles/auth-shared.css";

export default function UserLogin() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>User Login</h1>
        <p>Welcome back, please sign in</p>

        <div className="auth-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="auth-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <button className="auth-button">Login</button>

        <div className="auth-footer">
          Don’t have an account? Register
        </div>
      </div>
    </div>
  );
}
