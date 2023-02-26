import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const phonesSlice = createSlice({
    name: "phones",
    initialState: [],
    reducers: {
        addPhone: {
            reducer: (state, {payload}) =>  {
                state.push(payload);
            },
            prepare: data => {
                return {
                    payload: {
                        id: nanoid(),
                        ...data,
                    }
                }
            }
        },
        deletePhone: (state, {payload}) => state.filter(({id}) => id !== payload),
    }
})

export const {addPhone, deletePhone} = phonesSlice.actions;
export default phonesSlice.reducer;