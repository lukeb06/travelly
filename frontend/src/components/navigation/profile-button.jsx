import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import OpenModalButton from '../open-modal-button';
import LoginFormModal from '../login-form-modal';
import SignupFormModal from '../signup-form-modal';
import * as sessionActions from '../../store/session';
import './profile-button.css';
import { NavLink } from 'react-router-dom';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();

    const toggleMenu = e => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = e => {
            if (!ulRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const closeMenu = () => setShowMenu(false);

    const logout = e => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        closeMenu();
    };

    return (
        <>
            {user ? (
                <li id="createSpotButton">
                    <NavLink to="/spots/new">Create a New Spot</NavLink>
                </li>
            ) : (
                <></>
            )}
            <li id="profileButton">
                <button onClick={toggleMenu}>
                    <FaUserCircle />
                </button>
                <ul className={`profile-dropdown ${showMenu ? '' : 'hidden'}`} ref={ulRef}>
                    {user ? (
                        <>
                            <li>{user.username}</li>
                            <li>
                                {user.firstName} {user.lastName}
                            </li>
                            <li>{user.email}</li>
                            <li>
                                <NavLink to="/spots/current">Manage Spots</NavLink>
                            </li>
                            <li>
                                <button onClick={logout}>Log Out</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <OpenModalButton
                                buttonText="Log In"
                                onButtonClick={closeMenu}
                                modalComponent={<LoginFormModal />}
                                className="modal-button"
                            />
                            <OpenModalButton
                                buttonText="Sign Up"
                                onButtonClick={closeMenu}
                                modalComponent={<SignupFormModal />}
                                className="modal-button"
                            />
                        </>
                    )}
                </ul>
            </li>
        </>
    );
}

export default ProfileButton;
