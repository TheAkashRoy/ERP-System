import "./App.css";
import { Routes, Route } from "react-router-dom";
import QuestionForm from "./components/Question";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Studashboard from "./pages/Studashborad";
import { StudCalendar } from "./pages/Calendar";
import GiveExam from "./components/GiveExam";
import Stuprofile from "./pages/Stuprofile";
import Teaprofile from "./pages/Teaprofile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Dashboard />} />
        <Route path="/student" element={<Studashboard />} />
        <Route path="/update-question" element={<QuestionForm />} />
        <Route path="/calendar" element={<StudCalendar />} />
        <Route path="/give-exam" element={<GiveExam />} />
        <Route path="/student-profile" element={<Stuprofile />} />
        <Route path="/teacher-profile" element={<Teaprofile />} />
      </Routes>
    </>
  );
}

export default App;
