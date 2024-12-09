import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UserTrips.css';

const UserTrips = () => {
    const navigate = useNavigate();
    const { userId } = useParams(); // Get userId from URL parameter

    // Sample data for the user's trips
    const userTrips = [
        {
            tripName: 'Trip to Goa',
            location: 'Goa',
            ticketRate: 2000,
            duration: '3 Days',
            foodCost: 500,
            totalCost: 2500,
            guide: 'John Doe',
        },
        {
            tripName: 'Trip to Kerala',
            location: 'Kerala',
            ticketRate: 2500,
            duration: '4 Days',
            foodCost: 600,
            totalCost: 3100,
            guide: 'Jane Doe',
        },
    ];

    // Handle Back button click to navigate to AdminDash/Users
    const handleBackClick = () => {
        navigate('/Admin/AdminDash/#');
    };

    return (
        <div className="user-trips-container">
            <button className="back-btn" onClick={handleBackClick}>
                Back to Home
            </button>

            <h3>Trip Details for User {userId}</h3>

            {userTrips.map((trip, index) => (
                <div key={index} className="trip-summary">
                    <h4>{trip.tripName}</h4>

                    {/* Table for Trip Details */}
                    <table className="trip-table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Location</th>
                                <th>Ticket Rate</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{trip.location}</td>
                                <td>{trip.ticketRate}</td>
                                <td>{trip.duration}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Table for Cost Details */}
                    <table className="cost-table">
                        <thead>
                            <tr>
                                <th>Food Cost</th>
                                <th>Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{trip.foodCost}</td>
                                <td>{trip.totalCost}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Box for Guide Details */}
                    <div className="guide-box">
                        <strong>Guide: </strong> {trip.guide}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserTrips;
