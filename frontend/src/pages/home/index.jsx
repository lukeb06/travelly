import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as spotActions from '../../store/spots';
import SpotCard from '../../components/spot-card';
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
                    <>No Spots Yet</>
                )
            ) : (
                <>Loading...</>
            )}
        </div>
    );
}
