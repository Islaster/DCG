import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to Abyssal Realms</h1>
      <Link to="/play">Begin Your Journey</Link>
    </div>
  );
}
