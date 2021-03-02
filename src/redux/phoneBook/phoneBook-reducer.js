import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./phoneBook-actions";

console.log(actions.addContact.type);

const items = createReducer([], {
    [actions.addContact]: (state, { payload }) => [payload, ...state],

    [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload)
});

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
});