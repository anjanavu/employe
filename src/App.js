import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Employee from './components/Employee';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/employee_form' element={<Employee/>}></Route>
        
        </Routes>
    </div>
  );
}

export default App;
