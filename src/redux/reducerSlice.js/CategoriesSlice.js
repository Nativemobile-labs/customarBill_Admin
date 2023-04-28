import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  addCategoryName: '',
};

export const categoriesSlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    categories(state = initialState, action) {
      // console.log('action=========>',action.payload);
      state.addCategoryName = action.payload
    },
  },
});

export const {categories} = categoriesSlice.actions;
export default categoriesSlice.reducer;
