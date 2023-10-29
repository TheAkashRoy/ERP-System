import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {Routes,Route} from "react-router-dom"
import Teacher from './components/Teacher';
import Question from './components/Question';
function App() {
  return (
    <>
    
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/teacher" element={<Teacher/>}/>
      <Route path="/update-question" element={<Question/>}/>
      </Routes>

    </>
        

      
  );
}

export default App;
