import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  expenseNo: '',
  expenseDate: '',
  billingTerms: '',
  totalAmount: '',
  amountPaid: '',
  invoiceNotes: '',
  value: 0,
};

export const expenseSlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    expense(state = initialState, action) {
      console.log(action.payload);
         state.expenseNo = action.payload.expenseNo
        state.expenseDate = action.payload.expenseDate
        state.billingTerms = action.payload.billingTerms
        state.totalAmount = action.payload.totalAmount
        state.amountPaid = action.payload.amountPaid
        state.invoiceNotes = action.payload.invoiceNotes
    },
  },
});

export const {expense} = expenseSlice.actions;
export default expenseSlice.reducer;
