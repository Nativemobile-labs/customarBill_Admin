import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  ProductName: '',
  SalePrice: '',
  selectedItem: '',
  onlineDelivery: '',
  acSellPrice: '',
  NonACSellPrice: '',
  onlineSellPrice: '',
  purchasePrice: '',
  lowStockAlert: '',
  value: 0
};

export const productInventorySlice = createSlice({
  name: 'reducerState',
  initialState,
  reducers: {
    addProduct(state = initialState, action) {
      console.log(action.payload);
        state.ProductName = action.payload.ProductName
        state.SalePrice = action.payload.SalePrice
        state.selectedItem = action.payload.selectedItem
        state.onlineDelivery = action.payload.onlineDelivery
        state.acSellPrice = action.payload.acSellPrice
        state.NonACSellPrice = action.payload.NonACSellPrice;
        state.onlineSellPrice = action.payload.onlineSellPrice;
        state.purchasePrice = action.payload.purchasePrice;
        state.lowStockAlert = action.payload.lowStockAlert;
    },
  },
});

export const {addProduct} = productInventorySlice.actions;
export default productInventorySlice.reducer;
