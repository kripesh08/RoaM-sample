import "./Login.css";


const Login = () => {
    return(
        <div className="login-home">
            <img src="/login_image.jpg" className="login-image" alt="Not supported" />
            <form>
                <div className="login-container">
                    <div className="login">
                        <input type="tel" pattern="^\d{10}$" placeholder="Contact No"/>
                        <br /><br />
                        <input type="password" placeholder="Password"/>
                        <p>Don't have an account?<a href="/User/Signup"> Sign up</a></p>
                        <button className="button" type="button">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;