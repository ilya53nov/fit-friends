import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import { store } from './store/store';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-route/history-route';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <React.StrictMode>

      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
      
    </React.StrictMode>
  </Provider>,
);