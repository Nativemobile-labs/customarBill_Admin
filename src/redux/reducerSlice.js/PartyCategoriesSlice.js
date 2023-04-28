import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  userName: '',
  sirName: '',
  titleName: '',
};

export const partyCategoriesSlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    addCategory(state = initialState, action) {
      console.log(action.payload);
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.userName = action.payload.userName
        state.sirName = action.payload.sirName
        state.titleName = action.payload.titleName
    },
  },
});

export const {addCategory} = partyCategoriesSlice.actions;
export default partyCategoriesSlice.reducer;
