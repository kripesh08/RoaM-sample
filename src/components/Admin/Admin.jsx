import "./Admin.css";
import { Link } from 'react-router-dom';

const Admin = () => {
    return(
        <div className="admin-home">
            <form>
                <div className="admin-container">
                    <div className="admin">
                        <h1>Admin Login</h1>
                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email"/>
                        <br /><br />
                        <input type="password" placeholder="Password"/>
                        <br /><br />
                        <Link to="">
                            <button className="button" type="button">Login</button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Admin;