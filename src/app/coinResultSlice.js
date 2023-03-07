import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const coinResultReducer = createSlice({
    name: 'coinResult',
    initialState,
    reducers: {
        addCoinResult: (state, action) => {
            if (action.payload.type === "start") {
                return []
            }
            return [...state, action.payload]
        },
    },
});

export const { addCoinResult } = coinResultReducer.actions;

export default coinResultReducer.reducer;
