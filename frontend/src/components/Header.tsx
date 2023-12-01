import React from 'react';
import {Link} from "react-router-dom";
import {FaSignInAlt} from "@react-icons/all-files/fa/FaSignInAlt";
import {FaUser} from "@react-icons/all-files/fa/FaUser";

const Header: React.FC = () => {
    return (
        <header className={'header'}>
            <div className="logo">
                <Link to={'/'}>GoalSetter</Link>
            </div>
            <ul>
                <li><Link to={'/login'}><FaSignInAlt />Login</Link></li>
                <li><Link to={'/register'}><FaUser />Register</Link></li>
            </ul>
        </header>
    );
};

export default Header;
