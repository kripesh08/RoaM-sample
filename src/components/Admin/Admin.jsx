import "./Admin.css";

const Admin = () => {
    return(
        <div className="admin-home">
            <form>
                <div className="admin-container">
                    <div className="admin">
                        <h1>Admin Login</h1>
                        <br />
                        <input type="tel" pattern="^\d{10}$" placeholder="Contact No"/>
                        <br />
                        <input type="password" placeholder="Password"/>
                        <br />
                            <button className="button" type="button">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Admin;