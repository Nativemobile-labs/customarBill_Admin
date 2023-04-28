import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  SupplierName: '',
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

export const addSupplierSlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    addSupplier(state = initialState, action) {
      console.log(action.payload);
        state.SupplierName = action.payload.SupplierName
        state.phoneNumber = action.payload.phoneNumber
        state.gstNumber = action.payload.gstNumber
        state.selectedBillingType = action.payload.selectedBillingType
        state.billingAddress = action.payload.billingAddress
        state.selectedState = action.payload.selectedState;
        state.billingPinCode = action.payload.billingPinCode;
        state.openingBalance = action.payload.openingBalance;
        state.selectedBalance = action.payload.selectedBalance;
        state.selectedPayment = action.payload.selectedPayment;
    },
  },
});

export const {addSupplier} = addSupplierSlice.actions;
export default addSupplierSlice.reducer;
