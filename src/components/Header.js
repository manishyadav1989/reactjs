import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1>Ract App</h1>
            </div>
            <div className="nav">
                <ul className="nav-items">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us </Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact Us </Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;