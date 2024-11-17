import "./Home.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <div className="home-page">
            <div className="heading">
                <div className="title">
                    <h2>RoaM</h2>
                </div>
                <nav className="navigate">
                    <ul>
                        <li><Link to="/User/Login">Book</Link></li>
                        <li><a href="#contact-info"><FontAwesomeIcon icon={faPhone} className="phone-icon" />Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div>
               <img src="home.jpg" className="home-image" alt="Not supported" />
               <p className="home-text-image">Plan.<br />Pack.<br />Prism.</p>
            </div>
            <div className="contact-info"></div>
        </div>
    )
}

export default Home;