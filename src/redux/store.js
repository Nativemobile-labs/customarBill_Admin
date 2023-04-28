import {configureStore} from '@reduxjs/toolkit';
import registerUserSlice from './reducerSlice.js/RegisterUserSlice';
import addCustomerSlice from './reducerSlice.js/AddCustomerSlice';
import AddSupplierSlice from './reducerSlice.js/AddSupplierSlice';
import partyCategoriesSlice from './reducerSlice.js/PartyCategoriesSlice';
import productInventorySlice from './reducerSlice.js/ProductInventorySlice';
import serviceInventorySlice from './reducerSlice.js/ServiceInventorySlice';
import categoriesSlice from './reducerSlice.js/CategoriesSlice';
import addNewSaleSlice from './reducerSlice.js/AddNewSaleSlice';
import transportDetailsSlice from './reducerSlice.js/TransportDetailsSlice';
import addSaleReturnSlice from './reducerSlice.js/AddSaleReturnSlice';
import addPurchaseSlice from './reducerSlice.js/AddPurchaseSlice';
import addPurchaseReturnSlice from './reducerSlice.js/AddNewPurchaseReturnSlice';
import expenseSlice from './reducerSlice.js/ExpenceSlice';
import moneyInSlice from './reducerSlice.js/MoneyInSlice';
import moneyOutSlice from './reducerSlice.js/MoneyOutSlice';
import staffSlice from './reducerSlice.js/StaffSlice';

export const store = configureStore({
  reducer: {
    registerUserSlice,
      addCustomerSlice,
      AddSupplierSlice,
      partyCategoriesSlice,
      productInventorySlice,
      serviceInventorySlice,
      categoriesSlice,
      addNewSaleSlice,
      transportDetailsSlice,
      addSaleReturnSlice,
      addPurchaseSlice,
      addPurchaseReturnSlice,
      expenseSlice,
      moneyInSlice,
      moneyOutSlice,
      staffSlice,
  },
});
