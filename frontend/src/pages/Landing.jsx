import { Link } from "react-router-dom";

export default function Landing(){

  return(
    <div className="landing-page">

  <div className="hero-bg"></div>

  <div className="hero-content">

    <div className="hero-badge">
      Smart Healthcare Infrastructure
    </div>

    <h1>

      Healthcare Operations.
      Emergency Response.
      Unified.

    </h1>

    <p>

      Aether Health combines
      appointment management,
      emergency response,
      queue optimization,
      AI triage and digital payments
      into a single healthcare platform.

    </p>

    <div className="orb orb1"></div>
<div className="orb orb2"></div>
<div className="orb orb3"></div>

    <div className="hero-buttons">

      <Link
        className="primary-btn"
        to="/register"
      >
        Get Started
      </Link>

      <Link
        className="secondary-btn"
        to="/login"
      >
        Sign In
      </Link>

    </div>

  </div>

</div>
  );
}