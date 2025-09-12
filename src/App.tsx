import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import NoticePage from "./pages/Landing/NoticePage";
import SupportPage from "./pages/Landing/SupportPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<LandingPage />}></Route>
        <Route path="notice" element={<NoticePage/>}></Route>
        <Route path="support" element={<SupportPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
