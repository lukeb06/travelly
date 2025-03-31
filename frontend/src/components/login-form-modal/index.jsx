import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './index.css';
import { useModal } from '../../context/modal';

export default function LoginFormModal() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const btnRef = useRef(null);

    const { closeModal } = useModal();

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const emailUsername = formData.get('emailUsername')?.toString() || null;
        const password = formData.get('password')?.toString() || null;

        if (!emailUsername) return setErrors(['Email or Username must not be blank']);
        if (!password) return setErrors(['Password must not be blank']);

        return dispatch(sessionActions.login({ credential: emailUsername, password }))
            .then(closeModal)
            .catch(async res => {
                const { message } = await res.json();
                setErrors([message]);
            });
    };

    const [emailUsernameS, setEmailUsernameS] = useState('');
    const [passwordS, setPasswordS] = useState('');

    useEffect(() => {
        if (!btnRef.current) return;
        btnRef.current.disabled = false;
        if (emailUsernameS.length < 4) btnRef.current.disabled = true;
        if (passwordS.length < 6) btnRef.current.disabled = true;
    }, [emailUsernameS, passwordS]);

    const demoLogin = () => {
        return dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' }))
            .then(closeModal)
            .catch(async res => {
                const { message } = await res.json();
                setErrors([message]);
            });
    };

    return (
        <div id="loginPage">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="section">
                    <label htmlFor="emailUsername">Email or Username</label>
                    <input
                        onInput={e => setEmailUsernameS(e.target.value)}
                        type="text"
                        name="emailUsername"
                    />
                </div>

                <div className="section">
                    <label htmlFor="password">Password</label>
                    <input
                        onInput={e => setPasswordS(e.target.value)}
                        type="password"
                        name="password"
                    />
                </div>

                <p className="errors">{errors.length > 0 ? errors[0] : <br />}</p>

                <div>
                    <button ref={btnRef} disabled type="submit">
                        Login
                    </button>
                </div>
            </form>
            <div>
                <button onClick={demoLogin}>Demo Login</button>
            </div>
        </div>
    );
}
