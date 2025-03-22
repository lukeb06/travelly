import { csrfFetch } from './csrf';

const UPDATE = 'reviews/update';
const ADD = 'reviews/add';

const defaultState = {
    reviews: [],
};

export default function reviewsReducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                reviews: action.reviews,
            };
        case ADD:
            return {
                ...state,
                reviews: [...state.reviews, action.review],
            };
        default:
            return state;
    }
}

function updateReviews(reviews) {
    return {
        type: UPDATE,
        reviews,
    };
}

export const getReviewsBySpotId = id => async dispatch => {
    dispatch(updateReviews(defaultState.reviews));

    const response = await csrfFetch(`/api/spots/${id}/reviews`);
    const { Reviews } = await response.json();

    dispatch(updateReviews(Reviews));

    return Reviews;
};
