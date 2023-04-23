import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.error(error) })
    }
    return (

        <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
            {
                user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
            }
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
            {
                user ?
                    <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
                    </> :
                    <>
                        <Link to='/login'><button className="btn btn-sm">Login</button> </Link>
                    </>


            }
        </div>

    );
};

export default Header;