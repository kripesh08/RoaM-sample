import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className="login-home">
            <img src="/login_image.jpg" className="login-image" alt="Not supported" />
            <form>
                <div className="login-container">
                    <div className="login">
                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email"/>
                        <br /><br />
                        <input type="password" placeholder="Password"/>
                        <p>Don't have an account?<Link to="/User/Signup"> Sign up</Link></p>
                        <Link to="">
                            <button className="button" type="button">Login</button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;