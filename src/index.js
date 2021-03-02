import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from './components/App';
import store from "./redux/phoneBook/store";
import './stylesheets/main.css';
import './stylesheets/normalize.css';

ReactDOM.render(
     <Provider store={store.store}>
          <PersistGate loader={null} persistor={store.persistor}>
               <App />
          </PersistGate>
    </Provider>,
    document.querySelector('#root'));