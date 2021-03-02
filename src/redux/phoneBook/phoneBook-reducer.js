import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./phoneBook-actions";

const items = createReducer([], {
    addContactSuccess: (state, { payload }) => [payload, ...state],

    [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload)
});

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
});