import { ADD_PHONE, DELETE_PHONE } from "./types";

const inititalState = {
    phones: [],
    filter: "",
}

const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case ADD_PHONE:
            const newPhones = [...state.phones, action.payload];
            return { ...state, phones: newPhones };
        case DELETE_PHONE:
            const delPhones = state.phones.filter(item => item.id !== action.payload);
            return { ...state, phones: delPhones };
        default:
            return state;
    }
}

export default reducer;