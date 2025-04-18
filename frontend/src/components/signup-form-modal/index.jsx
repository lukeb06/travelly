import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './index.css';
import { useModal } from '../../context/modal';

export default function SignupFormModal() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const { closeModal } = useModal();

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email')?.toString() || null;
        const username = formData.get('username')?.toString() || null;
        const firstName = formData.get('firstName')?.toString() || null;
        const lastName = formData.get('lastName')?.toString() || null;
        const password = formData.get('password')?.toString() || null;
        const confirmPassword = formData.get('confirmPassword')?.toString() || null;

        if (password !== confirmPassword) return setErrors(['Passwords do not match']);

        if (!email) return setErrors(['Email must not be blank']);
        if (!username) return setErrors(['Username must not be blank']);
        if (!firstName) return setErrors(['First name must not be blank']);
        if (!lastName) return setErrors(['Last name must not be blank']);
        if (!password) return setErrors(['Password must not be blank']);

        return dispatch(sessionActions.signup({ email, username, firstName, lastName, password }))
            .then(closeModal)
            .catch(async res => {
                const { message } = await res.json();
                setErrors([message]);
            });
    };

    return (
        <div id="signupPage">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <div className="section">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>

                <div className="section">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" />
                </div>

                <div className="section">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" />
                </div>

                <div className="section">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" />
                </div>

                <div className="section">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>

                <div className="section">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" />
                </div>

                <p className="errors">{errors.length > 0 ? errors[0] : <br />}</p>

                <div>
                    <button type="submit">Signup</button>
                </div>
            </form>
            <div></div>
        </div>
    );
}
