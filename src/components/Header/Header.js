import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut, loginWithEmailPassword } = useAuth();
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-start py-12 bg-blue-900">
            <div>
                <h1 className="mx-10 sm: text-xl lg:text-4xl font-extrabold text-white">Learner Edge E-Learning </h1>
            </div>
            <div className="navbar text-yellow-400 font-bold">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Courses</NavLink>
                <NavLink to="/appointment">Appointment</NavLink>


                {user.email && <small className="text-white pl-1"> {user.displayName}</small>}
                {user.email ?
                    <button onClick={logOut} class=" mx-2 hover:bg-gray-400 font-bold text-red-700 px-1 rounded">
                        Logout
                    </button>
                    :
                    <NavLink to="/login">Login</NavLink>

                }

            </div>
        </div>
    );
};

export default Header;