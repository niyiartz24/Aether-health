import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function Register() {

  const navigate = useNavigate();

  const [name,setName] =
  useState("");

  const [email,setEmail] =
  useState("");

  const [password,setPassword] =
  useState("");

  const handleRegister =
  async(e)=>{

    e.preventDefault();

    try{

      await api.post(
        "/auth/register",
        {
          name,
          email,
          password
        }
      );

      alert(
        "Registration Successful"
      );

      navigate("/");

    }catch(err){

      alert(
       err.response?.data?.message
      );

    }

  };

  return (

  <div className="auth-layout">

    <div className="auth-left">

      <div className="auth-brand">

        <h1>Aether Health</h1>

        <p>
          Unified healthcare operations,
          emergency response and patient flow
          management platform.
        </p>

      </div>

      <div className="auth-features">

        <div className="feature">
          AI Symptom Triage
        </div>

        <div className="feature">
          Smart Queue Tracking
        </div>

        <div className="feature">
          Emergency SOS System
        </div>

        <div className="feature">
          OPay Payment Integration
        </div>

      </div>

    </div>

    <div className="auth-right">

      <form
        className="auth-card"
        onSubmit={handleRegister}
      >

        <span className="form-tag">
          Create Account
        </span>

        <h2>
          Join Aether Health
        </h2>

        <p>
          Create your healthcare account.
        </p>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e)=>
            setName(e.target.value)
          }
        />

        <input
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
          Create Account
        </button>

        <p className="auth-link">

          Already have an account?

          <Link to="/login">
            Sign In
          </Link>

        </p>

      </form>

    </div>

  </div>

);

}