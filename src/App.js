import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/User/Login'; 
import Signup from './components/User/Signup'; 
import Admin from './components/Admin/Admin'; 
import UserDash from './components/User/UserDash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        
        {/* User routes (Login and Signup) */}
        <Route path="/User/Login" element={<Login />} />  {/* Login route */}
        <Route path="/User/Signup" element={<Signup />} />  {/* Signup route */}
        <Route path="/User/UserDash" element={<UserDash />} />  {/* User Dashboard route */}
        
        {/* Admin route */}
        <Route path="/Admin" element={<Admin />} /> {/* Admin route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
