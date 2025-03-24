import { csrfFetch } from './csrf';

const UPDATE = 'reviews/update';
const ADD = 'reviews/add';
const REMOVE = 'reviews/remove';

const defaultState = {
    reviews: null,
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
        case REMOVE:
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.id),
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

function removeReview(id) {
    return {
        type: REMOVE,
        id,
    };
}

export const getReviewsBySpotId = id => async dispatch => {
    dispatch(updateReviews(defaultState.reviews));

    const response = await csrfFetch(`/api/spots/${id}/reviews`);
    const { Reviews } = await response.json();

    dispatch(updateReviews(Reviews));

    return Reviews;
};

export const deleteReview = id => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE',
    });

    dispatch(removeReview(id));
};
