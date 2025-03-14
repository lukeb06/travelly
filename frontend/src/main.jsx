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
                element: <h1>Welcome</h1>,
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
