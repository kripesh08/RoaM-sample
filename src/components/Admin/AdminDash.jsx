import React, { useState } from "react";  // Import React and useState
import "./AdminDash.css";

// Import the separate page components
import AdminGuide from './AdminGuide';
import AdminHome from './AdminHome';
import AdminLocation from './AdminLocation';
import AdminTrips from './AdminTrips';
import AdminUsers from './AdminUsers';

const AdminDash = () => {
    // State to manage the current page
    const [currentPage, setCurrentPage] = useState("Home");

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="home-page-admin">
            <div className="heading-admin">
                <div className="title">
                    <h2>RoaM</h2>
                </div>
                <div className="hiadmin">
                    <p>Hi, Admin</p>
                </div>
            </div>

            <div className="admindash-content">
                <div className="left-admindash">
                    {/* Navigation Links */}
                    <a href="#" onClick={() => handlePageChange("Home")}>Home</a>
                    <a href="#" onClick={() => handlePageChange("Guide")}>Guide</a>
                    <a href="#" onClick={() => handlePageChange("Trips")}>Trips</a>
                    <a href="#" onClick={() => handlePageChange("Locations")}>Locations</a>
                    <a href="#" onClick={() => handlePageChange("Users")}>Users</a>
                    <a href="./Admin">LogOut</a>
                </div>

                <div className="right-admindash">
                    {/* Conditional rendering of the page components */}
                    {currentPage === "Home" && <AdminHome />}
                    {currentPage === "Guide" && <AdminGuide />}
                    {currentPage === "Trips" && <AdminTrips />}
                    {currentPage === "Locations" && <AdminLocation />}
                    {currentPage === "Users" && <AdminUsers />}
                </div>
            </div>
        </div>
    );
};

export default AdminDash;
