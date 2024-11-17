import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/User/Login'; 
import Signup from './components/User/Signup'; 
import Admin from './components/Admin/Admin'; 

function App() {
  return (
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        
        {/* User routes (Login and Signup) */}
        <Route path="/User/Login" element={<Login />} />  {/* Login route */}
        <Route path="/User/Signup" element={<Signup />} />  {/* Signup route */}
        <Route path="/Admin/Admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
