import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/dashboard");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Login failed"
      );

    }

  };

  return (

  <div className="auth-layout">

    <div className="auth-left">

      <div className="auth-brand">

        <h1>Aether Health</h1>

        <p>
          Healthcare operations,
          emergency response,
          smart queue management,
          and AI-powered patient care.
        </p>

      </div>

      <div className="auth-stats">

  <div>
    <h3>24/7</h3>
    <span>Emergency Response</span>
  </div>

  <div>
    <h3>AI</h3>
    <span>Patient Triage</span>
  </div>

  <div>
    <h3>100%</h3>
    <span>Digital Workflow</span>
  </div>

</div>

      <div className="auth-features">

        <div className="feature">
          AI Symptom Triage
        </div>

        <div className="feature">
          Smart Appointment Scheduling
        </div>

        <div className="feature">
          Live Queue Tracking
        </div>

        <div className="feature">
          Emergency SOS Response
        </div>

      </div>

    </div>

    <div className="auth-right">

      <form
        className="auth-card"
        onSubmit={handleLogin}
      >

        <span className="form-tag">
          Welcome Back
        </span>

        <h2>
          Sign In
        </h2>

        <p className="auth-subtitle">
          Access your healthcare dashboard.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Sign In
        </button>

        <p className="auth-link">

          Don't have an account?

          <Link to="/register">
            Create Account
          </Link>

        </p>

      </form>

    </div>

  </div>

);
}