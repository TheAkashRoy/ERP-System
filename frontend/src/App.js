import './App.css';
import {Routes,Route} from "react-router-dom"
import QuestionForm from './components/Question'
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Studashboard from './pages/Studashborad';
function App() {
  return (
    <>
    
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/teacher" element={<Dashboard/>}/>
       <Route path="/student" element={<Studashboard/>}/>
       <Route path="/update-question" element={<QuestionForm/>}/>
       </Routes>
 
     </>
         

      
  );
}

export default App;
