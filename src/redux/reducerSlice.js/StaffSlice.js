import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  staffName: '',
  staffPhone: '',
  selectedItem: '',
  value: 0
};

export const staffSlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    staff(state = initialState, action) {
      console.log(action.payload);
        state.staffName = action.payload.staffName
        state.staffPhone = action.payload.staffPhone
        state.selectedItem = action.payload.selectedItem
    },
  },
});

export const {staff} = staffSlice.actions;
export default staffSlice.reducer;
