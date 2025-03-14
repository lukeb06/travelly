import { csrfFetch } from './csrf';

const UPDATE = 'sesh/update';
const DELETE = 'sesh/delete';
const LOGOUT = 'sesh/logout';

const defaultState = {
    user: null,
};

export default function sessionReducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                },
            };
        case DELETE:
            return { ...defaultState };
        case LOGOUT:
            return {
                ...state,
                user: defaultState.user,
            };
        default:
            return state;
    }
}

export const updateSession = user => {
    if (!user) return { type: null };
    const { id, email, username, firstName, lastName } = user;
    const payload = {};

    if (id) payload['id'] = id;
    if (email) payload['email'] = email;
    if (username) payload['username'] = username;
    if (firstName) payload['firstName'] = firstName;
    if (lastName) payload['lastName'] = lastName;

    return {
        type: UPDATE,
        payload,
    };
};

export const deleteSession = () => {
    return {
        type: DELETE,
    };
};

export const login = user => async dispatch => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });

    const { user: userData } = await response.json();

    dispatch(updateSession(userData));

    return response;
};

export const signup = user => async dispatch => {
    const { firstName, lastName, username, email, password } = user;
    const response = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            firstName,
            lastName,
            username,
            email,
            password,
        }),
    });

    const { user: userData } = await response.json();

    dispatch(updateSession(userData));

    return response;
};

export const logout = () => async dispatch => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    dispatch({ type: LOGOUT });
    return response;
};

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const { user: userData } = await response.json();
    dispatch(updateSession(userData));
    return response;
};
