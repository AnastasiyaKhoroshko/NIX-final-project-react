import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    doors: 0,
    num: 0,
    coins: 0,
};

export const gameResultReducer = createSlice({
    name: 'gameResult',
    initialState,
    reducers: {
        addDoorMain: (state, action) => {
            if (action.payload.type === "start") {
                return {}
            }
            return { ...state, ...action.payload }
        },
        addNumberMain: (state, action) => {
            if (action.payload.type === "start") {
                return {}
            }
            return { ...state, ...action.payload }
        },
        addCoinMain: (state, action) => {
            if (action.payload.type === "start") {
                return {}
            }
            return { ...state, ...action.payload }
        },
    },
});

export const { addDoorMain, addNumberMain, addCoinMain } = gameResultReducer.actions;

export default gameResultReducer.reducer;
