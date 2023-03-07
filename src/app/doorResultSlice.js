import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const doorResultReducer = createSlice({
    name: 'doorResult',
    initialState,
    reducers: {
        addDoorResult: (state, action) => {
            if (action.payload.type === "start") {
                return []
            }
            return [...state, action.payload]
        },
    },
});

export const { addDoorResult } = doorResultReducer.actions;

export default doorResultReducer.reducer;
