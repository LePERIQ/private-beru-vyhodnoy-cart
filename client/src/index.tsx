import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/redux/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
);

