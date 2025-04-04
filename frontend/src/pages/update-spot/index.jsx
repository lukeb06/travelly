import * as spotActions from '../../store/spots';
import { useEffect, useRef, useState } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { csrfFetch } from '../../store/csrf';
import { useNavigate, useParams } from 'react-router-dom';

const DEFAULT_ERROR_STATE = {
    country: null,
    streetAddress: null,
    city: null,
    state: null,
    latitude: null,
    longitude: null,
    description: null,
    title: null,
    price: null,
    previewImageUrl: null,
    image1Url: null,
    image2Url: null,
    image3Url: null,
    image4Url: null,
    response: null,
};

export default function UpdateSpotPage() {
    const navigate = useNavigate();

    const { id } = useParams();

    const dispatch = useDispatch();
    const currentSpot = useSelector(state => state.spots.selectedSpot);

    useEffect(() => {
        dispatch(spotActions.getSpotById(id));
    }, [dispatch, id]);

    const [errors, setErrors] = useState(DEFAULT_ERROR_STATE);

    const submitBtnRef = useRef(null);

    const deleteSpot = () => {
        dispatch(spotActions.deleteSpot(id));
    };

    const handleSubmit = e => {
        e.preventDefault();

        (async () => {
            submitBtnRef.current.disabled = true;

            const formData = new FormData(e.target);

            const country = formData.get('country')?.toString() || null;
            const streetAddress = formData.get('streetAddress')?.toString() || null;
            const city = formData.get('city')?.toString() || null;
            const state = formData.get('state')?.toString() || null;
            const latitude = formData.get('latitude')?.toString() || null;
            const longitude = formData.get('longitude')?.toString() || null;
            const description = formData.get('description')?.toString() || null;
            const title = formData.get('title')?.toString() || null;
            const price = formData.get('price')?.toString() || null;
            const previewImageUrl = formData.get('previewImageUrl')?.toString() || null;
            const image1Url = formData.get('image1Url')?.toString() || null;
            const image2Url = formData.get('image2Url')?.toString() || null;
            const image3Url = formData.get('image3Url')?.toString() || null;
            const image4Url = formData.get('image4Url')?.toString() || null;

            const _errors = { ...DEFAULT_ERROR_STATE };
            let hasErrors = false;

            function setError(key, value) {
                _errors[key] = value;
                hasErrors = true;
            }

            if (!country) setError('country', 'Country is required');
            if (!streetAddress) setError('streetAddress', 'Address is required');
            if (!city) setError('city', 'City is required');
            if (!state) setError('state', 'State is required');
            if (!latitude) setError('latitude', 'Latitude is required');
            if (!longitude) setError('longitude', 'Longitude is required');
            if (!description || description.length < 30)
                setError('description', 'Description needs a minimum of 30 characters');
            if (!title) setError('title', 'Name is required');
            if (!price) setError('price', 'Price is required');
            if (!previewImageUrl) setError('previewImageUrl', 'Preview image is required');

            if (hasErrors) {
                submitBtnRef.current.disabled = false;
                return setErrors(_errors);
            }

            try {
                const response = await csrfFetch(`/api/spots/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        country,
                        address: streetAddress,
                        city,
                        state,
                        lat: parseFloat(latitude),
                        long: parseFloat(longitude),
                        description,
                        name: title,
                        price: parseFloat(price),
                    }),
                });

                if (!response.ok) {
                    submitBtnRef.current.disabled = false;
                    const { errors: rErrors } = await response.json();
                    return setErrors({
                        ...DEFAULT_ERROR_STATE,
                        response: Object.values(rErrors).join(', '),
                    });
                }

                const newSpot = await response.json();

                try {
                    async function uploadImage(url, preview = false) {
                        if (!url) return;
                        await csrfFetch(`/api/spots/${id}/images`, {
                            method: 'POST',
                            body: JSON.stringify({
                                url,
                                preview,
                            }),
                        });
                    }

                    await csrfFetch(`/api/spots/${id}/images`, {
                        method: 'DELETE',
                    });

                    await Promise.all([
                        uploadImage(previewImageUrl, true),
                        uploadImage(image1Url),
                        uploadImage(image2Url),
                        uploadImage(image3Url),
                        uploadImage(image4Url),
                    ]);
                } catch {}

                submitBtnRef.current.disabled = false;

                navigate(`/spots/${id}`);
            } catch (res) {
                submitBtnRef.current.disabled = false;
                const { errors: rErrors } = await res.json();
                return setErrors({
                    ...DEFAULT_ERROR_STATE,
                    response: Object.values(rErrors).join(', '),
                });
            }
        })();
    };

    const previewImageUrl = currentSpot?.SpotImages.find(image => image.preview)?.url || '';
    const otherImages = currentSpot?.SpotImages.filter(image => !image.preview) || [];

    return (
        <div id="updateSpotPage">
            <form onSubmit={handleSubmit}>
                <h1>Update Spot</h1>

                <div className="form-group">
                    <h2>Where&apos;s your place located?</h2>
                    <h3>
                        Guests will only get your exact address once they&apos;ve booked a
                        reservation.
                    </h3>

                    <div className="section">
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" defaultValue={currentSpot?.country} />
                        <p className="errors">{errors.country ? errors.country : ''}</p>
                    </div>

                    <div className="section">
                        <label htmlFor="streetAddress">Street Address</label>
                        <input
                            type="text"
                            name="streetAddress"
                            defaultValue={currentSpot?.address}
                        />
                        <p className="errors">{errors.streetAddress ? errors.streetAddress : ''}</p>
                    </div>

                    <div className="section double-section">
                        <div className="section">
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" defaultValue={currentSpot?.city} />
                            <p className="errors">{errors.city ? errors.city : ''}</p>
                        </div>

                        <div className="section">
                            <label htmlFor="state">State</label>
                            <input type="text" name="state" defaultValue={currentSpot?.state} />
                            <p className="errors">{errors.state ? errors.state : ''}</p>
                        </div>
                    </div>

                    <div className="section double-section">
                        <div className="section">
                            <label htmlFor="latitude">Latitude</label>
                            <input type="text" name="latitude" defaultValue={currentSpot?.lat} />
                            <p className="errors">{errors.latitude ? errors.latitude : ''}</p>
                        </div>

                        <div className="section">
                            <label htmlFor="longitude">Longitude</label>
                            <input type="text" name="longitude" defaultValue={currentSpot?.lng} />
                            <p className="errors">{errors.longitude ? errors.longitude : ''}</p>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <h2>Describe your place to guests</h2>
                    <h3>
                        Mention the best features of your space, any special amentities like fast
                        wifi or parking, and what you love about the neighborhood.
                    </h3>

                    <div className="section">
                        <textarea
                            name="description"
                            placeholder="Please write at least 30 characters"
                            defaultValue={currentSpot?.description}
                        ></textarea>
                        <p className="errors">{errors.description ? errors.description : ''}</p>
                    </div>
                </div>

                <div className="form-group">
                    <h2>Create a title for your spot</h2>
                    <h3>
                        Catch guests&apos; attention with a spot title that highlights what makes
                        your place special.
                    </h3>

                    <div className="section">
                        <input
                            type="text"
                            name="title"
                            placeholder="Name of your spot"
                            defaultValue={currentSpot?.name}
                        />
                        <p className="errors">{errors.title ? errors.title : ''}</p>
                    </div>
                </div>

                <div className="form-group">
                    <h2>Set a base price for your spot</h2>
                    <h3>
                        Competitive pricing can help your listing stand out and rank higher in
                        search results.
                    </h3>

                    <div className="section pricing-section">
                        <label htmlFor="price">$</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Price per night (USD)"
                            defaultValue={currentSpot?.price}
                        />
                        <p className="errors">{errors.price ? errors.price : ''}</p>
                    </div>
                </div>

                <div className="form-group">
                    <h2>Liven up your spot with photos</h2>
                    <h3>Submit a link to at least one photo to publish your spot.</h3>

                    <div className="section">
                        <input
                            type="text"
                            name="previewImageUrl"
                            placeholder="Preview Image URL"
                            defaultValue={previewImageUrl}
                        />
                        <p className="errors">
                            {errors.previewImageUrl ? errors.previewImageUrl : ''}
                        </p>
                        <input
                            type="text"
                            name="image1Url"
                            placeholder="Image URL"
                            defaultValue={otherImages[0]?.url}
                        />
                        <p className="errors">{errors.image1Url ? errors.image1Url : ''}</p>
                        <input
                            type="text"
                            name="image2Url"
                            placeholder="Image URL"
                            defaultValue={otherImages[1]?.url}
                        />
                        <p className="errors">{errors.image2Url ? errors.image2Url : ''}</p>
                        <input
                            type="text"
                            name="image3Url"
                            placeholder="Image URL"
                            defaultValue={otherImages[2]?.url}
                        />
                        <p className="errors">{errors.image3Url ? errors.image3Url : ''}</p>
                        <input
                            type="text"
                            name="image4Url"
                            placeholder="Image URL"
                            defaultValue={otherImages[3]?.url}
                        />
                        <p className="errors">{errors.image4Url ? errors.image4Url : ''}</p>
                    </div>
                </div>

                <p className="errors">{errors.response ? errors.response : ''}</p>

                <button ref={submitBtnRef} type="submit">
                    Update Spot
                </button>
            </form>
        </div>
    );
}
