import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';

import * as sessionActions from './store/session';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import { Modal, ModalProvider } from './context/modal';
import HomePage from './pages/home';
import SpotDetailsPage from './pages/spot-details';
import CreateSpotPage from './pages/create-spot';
import ManageSpotsPage from './pages/manage-spots';

const store = configureStore();

if (import.meta.env.MODE !== 'production') {
    restoreCSRF();

    window.csrfFetch = csrfFetch;
    window.store = store;
    window.sessionActions = sessionActions;
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/spots/:id',
                element: <SpotDetailsPage />,
            },
            {
                path: '/spots/new',
                element: <CreateSpotPage />,
            },
            {
                path: '/spots/current',
                element: <ManageSpotsPage />,
            },
            {
                path: '*',
                element: <h1>Page not Found</h1>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ModalProvider>
            <Provider store={store}>
                <RouterProvider router={router} />
                <Modal />
            </Provider>
        </ModalProvider>
    </React.StrictMode>,
);
