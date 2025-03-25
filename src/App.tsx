import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/Admin/LoginPage";
import DashBoradPage from "./pages/Admin/DashBoradPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dash" element={<DashBoradPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
