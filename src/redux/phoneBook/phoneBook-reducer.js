import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    changeFilter
} from "./phoneBook-actions";

const items = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [payload, ...state],

    [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload)
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,

    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const error = createReducer(null, {
    [fetchContactError]: () => alert('Ошибка добтупа к данным!'),
    [addContactError]: () => alert('Ошибка добавления контакта!'),
    [deleteContactError]: () => alert('Ошибка удаления контакта!'),
});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});