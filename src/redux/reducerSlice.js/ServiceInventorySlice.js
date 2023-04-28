import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  serviceName: '',
  SalePrice: '',
  selectedItem: '',
  onlineDelivery: '',
  acSellPrice: '',
  NonACSellPrice: '',
  onlineSellPrice: '',
  purchasePrice: '',
  value: 0
};

export const serviceInventorySlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    addService(state = initialState, action) {
      console.log(action.payload);
      state.serviceName = action.payload.serviceName
      state.SalePrice = action.payload.SalePrice
      state.selectedItem = action.payload.selectedItem
      state.onlineDelivery = action.payload.onlineDelivery
      state.acSellPrice = action.payload.acSellPrice
      state.NonACSellPrice = action.payload.NonACSellPrice
      state.onlineSellPrice = action.payload.onlineSellPrice
      state.purchasePrice = action.payload.purchasePrice
    },
  },
});

export const {addService} = serviceInventorySlice.actions;
export default serviceInventorySlice.reducer;
