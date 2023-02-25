import { createStore } from "redux";

const reducer = (state) => {
    return state;
}

const initialStore = {
    phones: [
        {
        id: "1",
        name: "rrrrr",
        number: "4545456",
        home: true,
        work: false,
    },
    {
        id: "2",
        name: "tttt",
        number: "7678768",
        home: true,
        work: true,
    },
    ],
    filter: "",
}

export const store = createStore(reducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

