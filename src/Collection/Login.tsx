import { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: form.username,
            password: form.password,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed");
      } else {
        localStorage.setItem("token", data.token);
        window.location.href = "/home";
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
        <h2 className="auth-title">Login</h2>
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
          Login
        </button>
        {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}

        <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
          No account yet?{" "}
          <Link
            to="/register"
            style={{
              textDecoration: "underline",
              fontWeight: 600,
              color: "#2563eb",
              cursor: "pointer",
            }}
          >
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
