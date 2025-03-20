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
                <SpotDetailsPageSkeleton />
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

function SpotDetailsPageSkeleton() {
    return (
        <div className="spot-details">
            <div className="sd-header">
                <h1
                    style={{
                        color: 'var(--muted)',
                        backgroundColor: 'var(--muted)',
                        borderRadius: 'var(--radius)',
                        width: 'fit-content',
                    }}
                >
                    Spot Name
                </h1>
                <h3
                    style={{
                        color: 'var(--muted)',
                        backgroundColor: 'var(--muted)',
                        borderRadius: 'var(--radius)',
                        width: 'fit-content',
                    }}
                >
                    New York City, New York, United States
                </h3>
            </div>

            <div
                style={{
                    backgroundColor: 'var(--muted)',
                    borderRadius: 'var(--radius)',
                    height: '333.33px',
                    width: '100%',
                }}
            ></div>

            <div className="sd-main">
                <div className="sd-details">
                    <h2
                        style={{
                            color: 'var(--muted)',
                            backgroundColor: 'var(--muted)',
                            borderRadius: 'var(--radius)',
                            width: 'fit-content',
                        }}
                    >
                        Hosted by First Last
                    </h2>
                    <p
                        style={{
                            color: 'var(--muted)',
                            backgroundColor: 'var(--muted)',
                            borderRadius: 'var(--radius)',
                            width: 'fit-content',
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="sd-price">
                    <div>
                        <span
                            className="sd-price-value"
                            style={{
                                backgroundColor: 'var(--muted)',
                                borderRadius: 'var(--radius)',
                                color: 'var(--muted)',
                            }}
                        >
                            <span
                                className="sd-price-currency"
                                style={{
                                    color: 'var(--muted)',
                                }}
                            >
                                $100.00
                            </span>
                            night
                        </span>

                        <span
                            className="sd-rating"
                            style={{
                                color: 'var(--muted)',
                                backgroundColor: 'var(--muted)',
                                borderRadius: 'var(--radius)',
                            }}
                        >
                            <span className="sd-rating-value">
                                <span
                                    style={{
                                        color: 'var(--muted)',
                                    }}
                                >
                                    2.8
                                </span>
                            </span>
                            <span
                                style={{
                                    color: 'var(--muted)',
                                }}
                            >
                                {' '}
                                -{' '}
                            </span>
                            <span
                                className="sd-review-count"
                                style={{
                                    color: 'var(--muted)',
                                }}
                            >
                                7 reviews
                            </span>
                        </span>
                    </div>

                    <button onClick={() => alert('Feature coming soon!')}>Reserve</button>
                </div>
            </div>
        </div>
    );
}
