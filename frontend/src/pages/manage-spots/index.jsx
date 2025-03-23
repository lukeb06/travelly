import { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMySpots } from '../../store/spots';
import SpotCard, { SpotCardSkeleton } from '../../components/spot-card';
import { NavLink } from 'react-router-dom';

export default function ManageSpotsPage() {
    const dispatch = useDispatch();
    const spots = useSelector(state => state.spots.mySpots);

    useEffect(() => {
        dispatch(getMySpots());
    }, [dispatch]);

    return (
        <div id="manageSpotsPage">
            <h1>Manage Your Spots</h1>
            <NavLink to="/spots/new">Create a New Spot</NavLink>
            <div className="spot-card-grid">
                {spots !== null ? (
                    spots.length > 0 ? (
                        spots.map(spot => {
                            return <SpotCard key={spot.id} spot={spot} managed={true} />;
                        })
                    ) : (
                        <h1>No Spots Yet</h1>
                    )
                ) : (
                    new Array(4).fill(null).map((_, i) => <SpotCardSkeleton key={i} />)
                )}
            </div>
        </div>
    );
}
