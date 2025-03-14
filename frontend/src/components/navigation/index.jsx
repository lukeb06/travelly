import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './profile-button';
import './index.css';

export default function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <ul id="navigation">
            <div className="nav-items">
                <Link to="/">Home</Link>
            </div>
            {isLoaded ? (
                <div className="nav-items">
                    <ProfileButton user={sessionUser} />
                </div>
            ) : (
                <></>
            )}
        </ul>
    );
}

function Link({ to, children }) {
    return (
        <li>
            <NavLink to={to}>{children}</NavLink>
        </li>
    );
}
