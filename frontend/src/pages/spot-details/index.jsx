import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as spotActions from '../../store/spots';
import * as reviewActions from '../../store/reviews';
import './index.css';
import { useParams } from 'react-router-dom';
import { CiStar } from 'react-icons/ci';

export default function SpotDetailsPage() {
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spots.selectedSpot);

    const { id } = useParams();

    useEffect(() => {
        dispatch(spotActions.getSpotById(id));
    }, [dispatch, id]);

    return (
        <div id="spotDetailsPage">
            {spot !== null ? (
                <div className="spot-details">
                    <div className="sd-header">
                        <h1>{spot.name}</h1>
                        <h3>
                            {spot.city}, {spot.state}, {spot.country}
                        </h3>
                    </div>

                    <Gallery images={spot.SpotImages} />

                    <div className="sd-main">
                        <div className="sd-details">
                            <h2>
                                Hosted by {spot.Owner.firstName} {spot.Owner.lastName}
                            </h2>
                            <p>{spot.description}</p>
                        </div>

                        <div className="sd-price">
                            <div>
                                <span className="sd-price-value">
                                    <span className="sd-price-currency">${spot.price}</span>night
                                </span>

                                <RatingText spot={spot} />
                            </div>

                            <button onClick={() => alert('Feature coming soon!')}>Reserve</button>
                        </div>
                    </div>

                    <div className="sd-footer">
                        <RatingText spot={spot} />
                        <Reviews spotId={id} />
                    </div>
                </div>
            ) : (
                <>Loading...</>
            )}
        </div>
    );
}

// TODO: Post Your Review button

function Reviews({ spotId }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reviewActions.getReviewsBySpotId(spotId));
    }, [dispatch, spotId]);

    const reviews = useSelector(state => state.reviews.reviews);

    return (
        <div className="sd-reviews">
            {reviews !== null ? (
                reviews.length > 0 ? (
                    reviews.map(review => {
                        return <Review key={review.id} review={review} />;
                    })
                ) : (
                    <>No Reviews Yet</>
                )
            ) : (
                <>Loading...</>
            )}
        </div>
    );
}

function Review({ review }) {
    const date = new Date(review.createdAt);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const formattedDate = `${month} ${year}`;

    return (
        <div className="sd-review">
            <h3>{review.User.firstName}</h3>
            <h4>{formattedDate}</h4>
            <p>{review.review}</p>
        </div>
    );
}

function RatingText({ spot }) {
    return (
        <span className="sd-rating">
            <span className="sd-rating-value">
                <CiStar />
                {parseFloat(spot.avgStarRating).toFixed(1)}
            </span>
            <span> - </span>
            <span className="sd-review-count">{spot.numReviews} reviews</span>
        </span>
    );
}

function Gallery({ images }) {
    const previewImage = images.find(image => image.preview);
    const otherImages = images.filter(images => !images.preview);

    return (
        <div className="sd-gallery">
            <div className="sd-gallery-preview">
                <img src={previewImage.url} />
            </div>
            {otherImages.map(image => {
                return (
                    <div key={image.id} className="sd-gallery-image">
                        <img src={image.url} />
                    </div>
                );
            })}
        </div>
    );
}
