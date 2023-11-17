import './App.css';
import {Routes,Route} from "react-router-dom"
import QuestionForm from './components/Question'
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
function App() {
  return (
    <>
    
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/teacher" element={<Dashboard/>}/>
       <Route path="/update-question" element={<QuestionForm/>}/>
       </Routes>
 
     </>
         

      
  );
}

export default App;
