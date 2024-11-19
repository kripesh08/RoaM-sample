import "./Signup.css";

const Signup = () => {

    return(
        <div className="signup-home">
            <img src="/signup_image.jpg" className="signup-image" alt="Not supported" />
            <form>
                <div className="signup-container">
                    <div className="signup">
                        <input type="text" pattern="^[a-zA-Z\s]+$" placeholder="Full Name" required/>
                        <br /><br />
                        <input type="tel" pattern="^\d{10}$" placeholder="Phone number" required/>
                        <br /><br />
                        <textarea placeholder="Address" required></textarea>
                        <br /><br />
                        <input type="text" placeholder="District" required/>
                        <br /><br />
                        <input type="text" placeholder="State" required/>
                        <br /><br />
                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" required />
                        <br /><br />
                        <input type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$" placeholder="Password" required />
                        <br /><br />
                        <input type="tel" pattern="^\d{10}$" placeholder="Alternate Contact number"/>
                        <br /><br />
                        <input type="tel" pattern="^\d{12}$" placeholder="Aadhaar number" required />
                        <br /><br />
                        <button className="button">Create Account</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup;