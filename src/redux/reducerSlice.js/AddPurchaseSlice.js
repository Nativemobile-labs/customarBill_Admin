import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  purchaseBill: '',
  purchaseDate: '',
  invoiceNo: '',
  cashDiscountPer: '',
  cashDiscountRupee: '',
  totalAmount: '',
  amountPaid: '',
  noteInput: '',
  value: 0,
};

export const addPurchaseSlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    purchase(state = initialState, action) {
      console.log(action.payload);
        state.purchaseBill = action.payload.purchaseBill
        state.purchaseDate = action.payload.purchaseDate
        state.invoiceNo = action.payload.invoiceNo
        state.cashDiscountPer = action.payload.cashDiscountPer
        state.cashDiscountRupee = action.payload.cashDiscountRupee
        state.totalAmount = action.payload.totalAmount
        state.amountPaid = action.payload.amountPaid
        state.noteInput = action.payload.noteInput
    },
  },
});

export const {purchase} = addPurchaseSlice.actions;
export default addPurchaseSlice.reducer;
