import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  labourTransport: '',
  purchaseOrder: '',
  challanNumber: '',
  eBillNumber: '',
  eBillDate: '',
  transporterName: '',
  vehicleNumber: '',
  transportDistance: '',
  deliveryLocation: '',
  deliveryBillDate: '',
  notesInputText: '',
  value: 0
};

export const transportDetailsSlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    transport(state = initialState, action) {
      console.log(action.payload);
        state.labourTransport = action.payload.labourTransport
        state.purchaseOrder = action.payload.purchaseOrder
        state.challanNumber = action.payload.challanNumber
        state.eBillNumber = action.payload.eBillNumber
        state.eBillDate = action.payload.eBillDate
        state.transporterName = action.payload.transporterName
        state.vehicleNumber = action.payload.vehicleNumber
        state.transportDistance = action.payload.transportDistance
        state.deliveryLocation = action.payload.deliveryLocation
        state.deliveryBillDate = action.payload.deliveryBillDate
        state.notesInputText = action.payload.notesInputText
    },
  },
});

export const {transport} = transportDetailsSlice.actions;
export default transportDetailsSlice.reducer;
