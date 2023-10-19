import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {Routes,Route} from "react-router-dom"
import Teacher from './components/Teacher';
function App() {
  return (
    <>
    
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/teacher" element={<Teacher/>}/>
      </Routes>

    </>
        

      
  );
}

export default App;
