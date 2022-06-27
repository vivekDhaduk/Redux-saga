import { createSlice } from '@reduxjs/toolkit'
export const catSlice = createSlice({
    name:'cats',
    initialState: {
        cats: [],
        isLoading: false
    },
    reducers: {
        getcatsfetch: (state) => {
            state.isLoading = true;
        },
        getCatsSuccess: (state, action) => {
            state.cats = action.payload;
            state.isLoading = false;
        },
        getCatFailurs: (state) => {
            state.isLoading = false;
        }
    }
});

export const { getcatsfetch, getCatsSuccess, getCatFailurs } = catSlice.actions;

export default catSlice.reducer