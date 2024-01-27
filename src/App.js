import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./pages/landing/landing";
import GamePage from "./pages/game/game";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage navigate={navigate} />} />
        <Route path="/play" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
