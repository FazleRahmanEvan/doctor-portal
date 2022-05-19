
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className="px-10">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="about" element={<About/>} />
        <Route path="appointment" element={<Appointment/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
