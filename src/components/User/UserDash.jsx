import React, { useState } from "react";
import "./UserDash.css";

const UserDash = () => {
    // State to manage readOnly property for each field
    const [isEditable, setIsEditable] = useState(false);

    // Function to toggle between edit and save
    const handleEditClick = () => {
        setIsEditable(!isEditable); // Toggle the edit mode
    };

    return (
        <div>
            <div className="heading">
                <div className="title">
                    <h2>RoaM</h2>
                </div>
                <nav className="navigate">
                    <ul>
                        <a href="./User/Booktrip">Book Trip</a>
                        <button className="logout">Log Out</button>
                    </ul>
                </nav>
            </div>

            <div className="user-dashboard">
                <h2>User Details</h2>
                <br />
                <div className="user-info">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            readOnly={!isEditable}
                        />
                        <br /><br />
                        <input
                            type="tel"
                            placeholder="Phone number"
                            readOnly={!isEditable}
                        />
                        <br /><br />
                        <textarea
                            placeholder="Address"
                            readOnly={!isEditable}
                        ></textarea>
                        <br /><br />
                        <input
                            type="tel"
                            placeholder="Aadhaar number"
                            readOnly={!isEditable}
                        />
                        <br /><br />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="District"
                            readOnly={!isEditable}
                        />
                        <br /><br />
                        <input
                            type="text"
                            placeholder="State"
                            readOnly={!isEditable}
                        />
                        <br /><br />
                        <input
                            type="email"
                            placeholder="Email"
                            readOnly={!isEditable}
                        />
                        <br /><br />
                        <input
                            type="tel"
                            placeholder="Alternate Contact number"
                            readOnly={!isEditable}
                        />
                        <br /><br />
                        <div className="edit-btn-container">
                            <button
                                className="edit-btn"
                                onClick={handleEditClick}
                            >
                                {isEditable ? "Save" : "Edit"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="user-dashboard">
                <h2>My trips</h2>
                <br />
                <div className="user-info">
                    <div>
                        {/* You can display user trips here */}
                    </div>
                    <div>
                        {/* Display any other relevant content */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDash;
