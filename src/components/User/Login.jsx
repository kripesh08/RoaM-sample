import "./Login.css";


const Login = () => {
    return(
        <div className="login-home">
            <img src="/login_image.jpg" className="login-image" alt="Not supported" />
            <form>
                <div className="login-container">
                    <div className="login">
                        <h1>LOGIN</h1>
                        <br />
                        <input type="tel" pattern="^\d{10}$" placeholder="Contact No"/>
                        <br />
                        <input type="password" placeholder="Password"/>
                        <p>Don't have an account?<a href="/User/Signup"> Sign up</a></p>
                        <br />
                        <button className="button" type="button">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;