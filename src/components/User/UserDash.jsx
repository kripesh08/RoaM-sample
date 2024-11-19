import "./UserDash.css";

const UserDash = () => {
    return(
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
                            <input type="text" placeholder="Full Name" readOnly/>
                            <br /><br />
                            <input type="tel" placeholder="Phone number" readOnly/>
                            <br /><br />
                            <textarea placeholder="Address" readOnly></textarea>
                            <br /><br />
                            <input type="tel" placeholder="Aadhaar number" readOnly />
                            <br /><br />
                        </div>
                        <div>
                            <input type="text" placeholder="District" readOnly/>
                            <br /><br />
                            <input type="text" placeholder="State" readOnly/>
                            <br /><br />
                            <input type="email" placeholder="Email" readOnly />
                            <br /><br />
                            <input type="tel" placeholder="Alternate Contact number" readOnly/>
                            <br /><br />
                            <div className="edit-btn-container">
                                <button className="edit-btn">Edit</button>
                            </div>
                        </div>
                        
                </div>
            </div>

            <div className="user-dashboard">
                <h2>My trips</h2>
                <br />
                <div className="user-info">
                        <div>
                            
                        </div>
                        <div>
                           
                        </div>
                        
                </div>
            </div>
        </div>
    )
}

export default UserDash;