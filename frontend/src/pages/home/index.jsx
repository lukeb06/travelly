import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as spotActions from '../../store/spots';
import SpotCard, { SpotCardSkeleton } from '../../components/spot-card';
import './index.css';

export default function HomePage() {
    const dispatch = useDispatch();
    const spots = useSelector(state => state.spots.allSpots);

    useEffect(() => {
        dispatch(spotActions.getSpots());
    }, [dispatch]);

    return (
        <div id="homePage">
            {spots !== null ? (
                spots.length > 0 ? (
                    spots.map(spot => {
                        return <SpotCard key={spot.id} spot={spot} />;
                    })
                ) : (
                    <h1>No Spots Yet</h1>
                )
            ) : (
                new Array(7).fill(null).map((_, i) => {
                    return <SpotCardSkeleton key={i} />;
                })
            )}
        </div>
    );
}
