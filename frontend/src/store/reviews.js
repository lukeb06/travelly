import { csrfFetch } from './csrf';

const UPDATE = 'reviews/update';

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
