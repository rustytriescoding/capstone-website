import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import LogBookPage from "./pages/logBookPage";
import TeamPage from "./pages/teamPage";
import BuildLogPage from "./pages/buildLogPage";
import MainPage from "./pages/mainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/capstone-website" element={<MainPage />} />
        <Route path="/log-book" element={<LogBookPage />} />
        <Route path="/build-log" element={<BuildLogPage />} />
        <Route path="/team-page" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
