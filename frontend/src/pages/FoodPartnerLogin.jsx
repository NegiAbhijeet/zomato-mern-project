// pages/PartnerLogin.jsx
// import "../styles/auth-shared.css";

export default function PartnerLogin() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Partner Login</h1>
        <p>Access your restaurant dashboard</p>

        <div className="auth-group">
          <label>Email</label>
          <input type="email" placeholder="partner@example.com" />
        </div>

        <div className="auth-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <button className="auth-button">Login</button>

        <div className="auth-footer">
          New partner? Register
        </div>
      </div>
    </div>
  );
}
