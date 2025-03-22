import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { useEffect, useRef, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { csrfFetch } from '../../store/csrf';
import { getReviewsBySpotId } from '../../store/reviews';
import { useModal } from '../../context/modal';
import { getSpotById } from '../../store/spots';

export default function ReviewFormModal() {
    const { setModalContent } = useModal();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const spotId = useSelector(state => state.spots.selectedSpot.id);

    const [errors, setErrors] = useState([]);
    const [rating, setRating] = useState(0);
    const [reviewValid, setReviewValid] = useState(false);
    const [ratingValid, setRatingValid] = useState(false);

    const btnRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();

        setErrors([]);
        btnRef.current.disabled = true;

        const formData = new FormData(e.target);

        const review = formData.get('review')?.toString() || null;
        const rating = formData.get('rating') || null;

        if (!rating || +rating < 1 || +rating > 5)
            return setErrors(['Rating must be between 1 and 5']);
        if (!review) return setErrors(['Review is required']);

        (async () => {
            try {
                const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
                    method: 'POST',
                    body: JSON.stringify({
                        review,
                        stars: +rating,
                    }),
                });

                if (!response.ok) {
                    const { message } = await response.json();
                    btnRef.current.disabled = false;
                    return setErrors([message]);
                }

                dispatch(getReviewsBySpotId(spotId));
                dispatch(getSpotById(spotId));
                setModalContent(null);
            } catch (res) {
                const { message } = await res.json();
                btnRef.current.disabled = false;
                return setErrors([message]);
            }
        })();
    };

    useEffect(() => {
        if (reviewValid && ratingValid) btnRef.current.disabled = false;
        else btnRef.current.disabled = true;
    }, [ratingValid, reviewValid]);

    function _setRating(_rating) {
        setRating(_rating);
        setRatingValid(_rating >= 1 && _rating <= 5);
    }

    return (
        <div id="reviewFormModal">
            <h1>How was your stay?</h1>
            <form onSubmit={handleSubmit}>
                <p className="errors">{errors.length > 0 ? errors[0] : <br />}</p>
                <textarea
                    onInput={e => setReviewValid(e.target.value.length >= 10)}
                    name="review"
                    placeholder="Leave your review here..."
                />
                <StarsInput rating={rating} setRating={_setRating} />
                <button disabled type="submit" ref={btnRef}>
                    Submit Your Review
                </button>
            </form>
        </div>
    );
}

function StarsInput({ rating, setRating }) {
    return (
        <div className="stars-input">
            <Star rating={rating} setRating={setRating} value={1} />
            <Star rating={rating} setRating={setRating} value={2} />
            <Star rating={rating} setRating={setRating} value={3} />
            <Star rating={rating} setRating={setRating} value={4} />
            <Star rating={rating} setRating={setRating} value={5} />
        </div>
    );
}

function Star({ rating, setRating, value }) {
    const handleInput = e => {
        setRating(value);
    };

    const isFilled = rating >= value;

    return (
        <>
            <label htmlFor={`star-${value}`}>{isFilled ? <StarIcon /> : <EmptyStarIcon />}</label>
            <input
                id={`star-${value}`}
                type="radio"
                name="rating"
                value={value}
                onChange={handleInput}
                checked={value === rating}
                style={{ display: 'none' }}
            />
        </>
    );
}

function EmptyStarIcon() {
    return <FaRegStar />;
}

function StarIcon() {
    return <FaStar />;
}
