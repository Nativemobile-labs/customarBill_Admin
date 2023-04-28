import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  invoiceNo: '',
  billDate: '',
  billingTerms: '',
  billDueDate: '',
  selectedState: '',
  discountInPercentage: '',
  discountInCash: '',
  totalAmount: '',
  receivedAmount: '',
  invoiceNotes: '',
  value: 0,
};

export const addNewSaleSlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    addNewSale(state = initialState, action) {
      console.log(action.payload);
        state.invoiceNo = action.payload.invoiceNo
        state.billDate = action.payload.billDate
        state.billingTerms = action.payload.billingTerms
        state.billDueDate = action.payload.billDueDate
        state.selectedState = action.payload.selectedState
        state.discountInPercentage = action.payload.discountInPercentage
        state.discountInCash = action.payload.discountInCash
        state.totalAmount = action.payload.totalAmount
        state.receivedAmount = action.payload.receivedAmount
        state.invoiceNotes = action.payload.invoiceNotes
    },
  },
});

export const {addNewSale} = addNewSaleSlice.actions;
export default addNewSaleSlice.reducer;
