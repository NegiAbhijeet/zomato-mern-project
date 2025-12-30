// pages/PartnerRegister.jsx
// import "../styles/auth-shared.css";

export default function PartnerRegister() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Partner Register</h1>
        <p>Join us as a food partner</p>

        <div className="auth-group">
          <label>Restaurant Name</label>
          <input type="text" placeholder="Food Hub" />
        </div>

        <div className="auth-group">
          <label>Email</label>
          <input type="email" placeholder="partner@example.com" />
        </div>

        <div className="auth-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <button className="auth-button">Register</button>

        <div className="auth-footer">
          Already registered? Login
        </div>
      </div>
    </div>
  );
}
