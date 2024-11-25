import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/User/Login'; 
import Signup from './components/User/Signup'; 
import Admin from './components/Admin/Admin'; 
import UserDash from './components/User/UserDash';
import AdminDash from './components/Admin/AdminDash';
import AdminGuide from './components/Admin/AdminGuide';
import AdminHome from './components/Admin/AdminHome';
import AdminLocation from './components/Admin/AdminLocation';
import AdminTrips from './components/Admin/AdminTrips';
import AdminUsers from './components/Admin/AdminUsers';

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
        <Route path="/Admin/Admin" element={<Admin />} /> {/* Admin route */}
        <Route path="/Admin/AdminDash" element={<AdminDash />} />
        <Route path="/Admin/AdminGuide" element={<AdminGuide />} />
        <Route path="/Admin/AdminHome" element={<AdminHome />} />
        <Route path="/Admin/AdminLocation" element={<AdminLocation />} />
        <Route path="/Admin/AdminTrips" element={<AdminTrips />} />
        <Route path="/Admin/AdminUsers" element={<AdminUsers />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
