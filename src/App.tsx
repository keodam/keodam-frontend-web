import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/Admin/login/LoginPage";
import DashBoradPage from "./pages/Admin/dash/DashBoradPage";
import UserPage from "./pages/Admin/user/UserPage";
import SupportPage from "./pages/Admin/SupportPage";
import NoticePage from "./pages/Admin/NoticePage";
import EventPage from "./pages/Admin/EventPage";
import PayPage from "./pages/Admin/PayPage";
import HistoryPage from "./pages/Admin/history/HistoryPage";
import MatchingPage from "./pages/Admin/MatchingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dash" element={<DashBoradPage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/matching" element={<MatchingPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
        <Route path="/notice" element={<NoticePage />}></Route>
        <Route path="/event" element={<EventPage />}></Route>
        <Route path="/pay" element={<PayPage />}></Route>
        <Route path="/history" element={<HistoryPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
