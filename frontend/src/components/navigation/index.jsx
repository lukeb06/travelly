import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './profile-button';
import './index.css';

export default function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <ul id="navigation">
            <div className="nav-items">
                <HomeLink />
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
        <li style={{ height: '100%', userSelect: 'none' }}>
            <NavLink to={to}>{children}</NavLink>
        </li>
    );
}

function HomeLink() {
    return (
        <Link to="/">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '0.5rem',
                    height: '100%',
                    alignItems: 'center',
                }}
            >
                <img width="auto" height="100%" src="logo.png" />
                <span
                    style={{
                        color: 'var(--primary)',
                        textShadow: '0 0 var(--unit) rgba(0, 0, 0, 0.3)',
                    }}
                >
                    Travelly
                </span>
            </div>
        </Link>
    );
}
