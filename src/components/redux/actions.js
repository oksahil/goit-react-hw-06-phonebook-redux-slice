import { nanoid } from "nanoid";
import { ADD_PHONE, DELETE_PHONE } from "./types";

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