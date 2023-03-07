import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const numberResultReducer = createSlice({
    name: 'numberResult',
    initialState,
    reducers: {
        addNumberResult: (state, action) => {
            if (action.payload.type === "start") {
                return []
            }
            return [...state, action.payload]
        },
    },
});

export const { addNumberResult } = numberResultReducer.actions;

export default numberResultReducer.reducer;
