import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation';
import * as sessionActions from './store/session';

export default function Layout() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => {
            setIsLoaded(true);
        });
    }, [dispatch]);

    return (
        <>
            <Navigation isLoaded={isLoaded} />
            <main>
                <div className="container">{isLoaded && <Outlet />}</div>
            </main>
        </>
    );
}
