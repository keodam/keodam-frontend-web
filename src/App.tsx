import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<LandingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
