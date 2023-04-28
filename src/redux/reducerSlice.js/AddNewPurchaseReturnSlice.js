import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  returnInvoice: '',
  billDate: '',
  billingTerms: '',
  billDueDate: '',
  purchaseBillNo: '',
  purchaseBillDueDate: '',
  discountInPercentage: '',
  discountInCash: '',
  totalAmount: '',
  receivedAmount: '',
  invoiceNotes: '',
  value: 0,
};

export const addPurchaseReturnSlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    purchaseReturnSl(state = initialState, action) {
      console.log(action.payload);
        state.returnInvoice = action.payload.returnInvoice
        state.billDate = action.payload.billDate
        state.billingTerms = action.payload.billingTerms
        state.billDueDate = action.payload.billDueDate
        state.purchaseBillNo = action.payload.purchaseBillNo
        state.purchaseBillDueDate = action.payload.purchaseBillDueDate
        state.discountInPercentage = action.payload.discountInPercentage
        state.discountInCash = action.payload.discountInCash
        state.totalAmount = action.payload.totalAmount
        state.receivedAmount = action.payload.receivedAmount
        state.invoiceNotes = action.payload.invoiceNotes
    },
  },
});

export const {purchaseReturnSl} = addPurchaseReturnSlice.actions;
export default addPurchaseReturnSlice.reducer;
