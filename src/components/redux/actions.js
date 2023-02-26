import { nanoid } from "nanoid";
import { ADD_PHONE, DELETE_PHONE, SET_FILTER } from "./types";

export const addContact = payload => {
    return {
        type: ADD_PHONE,
        payload: {
            id: nanoid(),
            ...payload,
        },
    }
}

export const deleteContact = payload => {
    return {
        type: DELETE_PHONE,
        payload,
    }
}

export const setFilter = payload => {
    return {
        type: SET_FILTER,
        payload,
    }
}