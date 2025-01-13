import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../utils/userContext';

const Header = () => {
    const { loggedInUser } = useContext(UserContext);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="w-50 p-4 m-4 text-lg">
                <h1>Ract App</h1>
            </div>
            <div className="flex">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contactus">Contact Us </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <h1>User : {loggedInUser}</h1>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;