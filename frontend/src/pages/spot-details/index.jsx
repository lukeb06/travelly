import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as spotActions from '../../store/spots';
import './index.css';
import { useParams } from 'react-router-dom';
import { CiStar } from 'react-icons/ci';

export default function SpotDetailsPage() {
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spots.byId);

    const { id } = useParams();

    useEffect(() => {
        dispatch(spotActions.getSpotById(id));
    }, [dispatch, id]);

    useEffect(() => {
        console.log(spot);
    }, [spot]);

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

                                <span className="sd-rating">
                                    <span className="sd-rating-value">
                                        <CiStar />
                                        {parseFloat(spot.avgStarRating).toFixed(1)}
                                    </span>
                                    <span> - </span>
                                    <span className="sd-review-count">
                                        {spot.numReviews} reviews
                                    </span>
                                </span>
                            </div>

                            <button>Reserve</button>
                        </div>
                    </div>

                    <div className="sd-footer">
                        <div className="sd-reviews"></div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

function Gallery({ images }) {
    const previewImage = images.find(image => image.preview);
    const otherImages = images.filter(images => !images.preview);

    const allImages = [previewImage, ...otherImages];

    return (
        <div className="sd-gallery">
            {allImages.map(image => {
                return (
                    <div key={image.id} className="sd-gallery-image">
                        <img src={image.url} />
                    </div>
                );
            })}
        </div>
    );

    // return (
    //     <div className="sd-gallery">
    //         <div className="sd-gallery-preview">
    //             <img src={previewImage.url} />
    //         </div>
    //         <div className="sd-gallery-others">
    //             {otherImages.map(image => {
    //                 return (
    //                     <div key={image.id} className="sd-gallery-image">
    //                         <img src={image.url} />
    //                     </div>
    //                 );
    //             })}
    //         </div>
    //     </div>
    // );
}
