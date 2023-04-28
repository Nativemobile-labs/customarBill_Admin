import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  CustomerName: '',
  phoneNumber: '',
  gstNumber: '',
  selectedBillingType: '',
  billingAddress: '',
  selectedState: '',
  billingPinCode: '',
  openingBalance: '',
  selectedBalance: '',
  selectedPayment: '',
  value: 0,
};

export const addCustomerSlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    addCustomer(state = initialState, action) {
      console.log(action.payload);
        state.CustomerName = action.payload.CustomerName
        state.phoneNumber = action.payload.phoneNumber
        state.gstNumber = action.payload.gstNumber
        state.selectedBillingType = action.payload.selectedBillingType
        state.billingAddress = action.payload.billingAddress
        state.selectedState = action.payload.selectedState
        state.billingPinCode = action.payload.billingPinCode
        state.openingBalance = action.payload.openingBalance
        state.selectedBalance = action.payload.selectedBalance
        state.selectedPayment = action.payload.selectedPayment
    },
  },
});

export const {addCustomer} = addCustomerSlice.actions;
export default addCustomerSlice.reducer;
