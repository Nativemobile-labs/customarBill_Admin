import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  receiptNo: '',
  moneyInDate: '',
  selectedState: '',
  totalAmount: '',
  chequeNo: '',
  chequeAmount: '',
  transactionNo: '',
  transactionAmount: '',
  invoiceNotes: '',
  value: 0,
};

export const moneyInSlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    moneyIn(state = initialState, action) {
      console.log(action.payload);
        state.receiptNo = action.payload.receiptNo
        state.moneyInDate = action.payload.moneyInDate
        state.selectedState = action.payload.selectedState
        state.totalAmount = action.payload.totalAmount
        state.chequeNo = action.payload.chequeNo
        state.chequeAmount = action.payload.chequeAmount
        state.transactionNo = action.payload.transactionNo
        state.transactionAmount = action.payload.transactionAmount
        state.invoiceNotes = action.payload.invoiceNotes
    },
  },
});

export const {moneyIn} = moneyInSlice.actions;
export default moneyInSlice.reducer;
