import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  saleReturn: '',
  returnDate: '',
  saleBillNo: '',
  billDate: '',
  totalAmount: '',
  amountPaid: '',
  noteInput: '',
  value: 0,
};

export const addSaleReturnSlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    salesReturn(state = initialState, action) {
      console.log(action.payload);
        state.saleReturn = action.payload.saleReturn
        state.returnDate = action.payload.returnDate
        state.saleBillNo = action.payload.saleBillNo
        state.billDate = action.payload.billDate
        state.totalAmount = action.payload.totalAmount
        state.amountPaid = action.payload.amountPaid
        state.noteInput = action.payload.noteInput
    },
  },
});

export const {salesReturn} = addSaleReturnSlice.actions;
export default addSaleReturnSlice.reducer;
