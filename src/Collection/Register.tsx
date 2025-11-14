import { useState } from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Registration failed");
      } else {
        setSuccess("Registration successful! Please login.");
        setForm({ username: "", password: "" });
      }
    } catch (err) {
      setError(`Server error-${err}`);
    }
  };

  return (
    <div className="auth-container">
      <form
        className="auth-form"
        onSubmit={handleSubmit}
        style={{ textAlign: "left" }}
      >
        <h2 className="auth-title">Register</h2>
        <label>
          Username
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            className="auth-input"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            className="auth-input"
          />
        </label>
        <button type="submit" className="auth-btn">
          Register
        </button>
        {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
        {success && (
          <div style={{ color: "green", marginTop: 8 }}>{success}</div>
        )}

        <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
          Already have account?{" "}
          <Link
            to="/login"
            style={{
              textDecoration: "underline",
              fontWeight: 600,
              color: "#2563eb",
              cursor: "pointer",
            }}
          >
            Login now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
