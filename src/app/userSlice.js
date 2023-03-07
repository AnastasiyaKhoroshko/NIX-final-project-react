import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    deposit: 0,
    balance: 0,
};

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            return { ...action.payload }
        },
        updateBalance: (state, action) => {
            return { ...state, balance: action.payload.balance }
        }
    },
});

export const { addUser, updateBalance } = userReducer.actions;

export default userReducer.reducer;
