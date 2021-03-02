import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from "redux-logger";
import phoneBookReducer from "./phoneBook-reducer";
import {
  //persistStore,
 // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

const myMiddleware = store => next => action => {
    console.log('Моя прослойка!', action);

    next(action);
};

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),
    myMiddleware,
    logger,
];
/*
const contactsPersistConfig = {
    key: "contacts",
    storage,
    blacklist: ['filter']
}; 
*/
const store = configureStore({
    reducer: { contacts:  phoneBookReducer },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

//const persistor = persistStore(store);

export default  store ;//, persistor };