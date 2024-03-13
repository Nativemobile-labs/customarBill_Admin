import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import SplashScreen from './src/screen/SplashScreen';
import LoginScreen from './src/screen/LoginScreen';
import DashboardScreen from './src/screen/DashboardScreen';
import BottomScreen from './src/screen/BottomScreen';
import DrawerScreen from './src/screen/DrawerScreen';
import PartyCategory from './src/ExtraScreen/PartyCategory';
import RegisterScreen from './src/screen/RegisterScreen';
import ForgetPassword from './src/screen/ForgetPassword';
import InventoryScreen from './src/BottamMenus/InventoryScreen';
import CategoriesScreen from './src/BottamMenus/CategoriesScreen';
import InventoryModal from './src/Modals/InventoryModal';
import AddCustomer from './src/ExtraScreen/AddCustomer';
import UploadPartyItem from './src/ExtraScreen/UploadPartyItem';
import AddCustomerToBill from './src/ExtraScreen/AddCustomerToBill';
import StaffForm from './src/staff_form/StaffForm';
import InventoryService from './src/Modals/InventoryService';
import OtherPayments from './src/ExtraScreen/OtherPayments';
import AddSupplier from './src/ExtraScreen/AddSupplier';
import CustomerBills from './src/ExtraScreen/CustomerBills';
import SupplierBills from './src/ExtraScreen/SupplierBills';
import AddItemtoBill from './src/ExtraScreen/AddItemtoBill';
import AddNewSale from './src/ExtraScreen/AddNewSale';
import AddTransportDetails from './src/ExtraScreen/AddTransportDetails';
import SaleReturnForm from './src/ExtraScreen/SaleReturnForm';
import AddPurchaseList from './src/ExtraScreen/AddPurchaseList';
import AddPurchaseReturn from './src/ExtraScreen/AddPurchaseReturn';
import AddExpense from './src/ExtraScreen/AddExpense';
import AddMoneyIn from './src/ExtraScreen/AddMoneyIn';
import AddMoneyOut from './src/ExtraScreen/AddMoneyOut';
import ItemReport from './src/ExtraScreen/ItemReport';
import SelectBank from './src/ExtraScreen/SelectBank';
import ViewBills from './src/PrintAndViewBill/ViewBills';

// Business Reports 
import ProfitAndLossStatement from './src/BusinessReport/ProfitAndLossStatement';
import DayBookReport from './src/BusinessReport/DayBookReport';

const Stack = createNativeStackNavigator();
//========================== Main Component =============================
export default function App() {
  return(
    <Provider store={store}>
      <StackHandler />
    </Provider>
  );
}

//================================= Stack Handler =============================
const StackHandler = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={SplashScreen}
          options={{
          headerShown: false, 
          orientation: 'portrait',
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
        <Stack.Screen
          name="Authentication"
          component={Auth}
          options={{
            headerShown: false, 
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerScreen}
          options={{
            headerShown: false, 
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
        <Stack.Screen
          name="Bottam"
          component={BottomScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#008AD0',
            }
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            headerShown: false,
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
        <Stack.Screen
          name="PartyCategory"
          component={PartyCategory}
          options={{
            headerShown: true, 
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
        <Stack.Screen
          name="Inventory"
          component={InventoryScreen}
          options={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
        <Stack.Screen
          name="InventoryModal"
          component={InventoryModal}
          options={{
            animation: 'none',
            headerShown: true,
            headerTitle: 'Inventory/ Item',
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
         <Stack.Screen 
          name='ServiceInventory'
          component={InventoryService}
          options={{
            animation: 'none',
            headerShown: true,
            headerTitle: 'Inventory/ Item', 
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
        <Stack.Screen
          name="AddCustomer"
          component={AddCustomer}
          options={{
            animation: 'none',
            headerShown: true,
            headerTitle: 'Add Customer/ Party',
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
        <Stack.Screen
          name="AddSupplier"
          component={AddSupplier}
          options={{
            animation: 'none',
            headerShown: true,
            headerTitle: 'Add Customer/ Party',
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
        <Stack.Screen 
          name='UploadParty'
          component={UploadPartyItem}
          options={{
            headerShown: true,
            headerTitle: 'Upload Party/Item',
            headerTintColor: 'white',
            headerStyle:{
              backgroundColor: '#008AD0',
            },
          }}
        />
        <Stack.Screen 
        name='ProfitAndLoss' 
        component={ProfitAndLossStatement} 
        options={{
          headerShown: true,
          headerTitle: 'PnL Statement',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#008AD0',
          },
        }}/>
         <Stack.Screen 
        name='DayBook' 
        component={DayBookReport} 
        options={{
          headerShown: true,
          headerTitle: 'Day Book Report', 
          headerTintColor: 'white', 
          headerStyle: {
            backgroundColor: '#008AD0',
          },
        }}/>
        <Stack.Screen 
        name='AddCustomerToBill' 
        component={AddCustomerToBill} 
        options={{
          headerShown: true,
          headerTitle: 'Add Customer To Bill', 
          headerTintColor: 'white',
           headerStyle: {
            backgroundColor: '#008AD0',
          },
        }}/>
        <Stack.Screen 
          name='StaffForm'
          component={StaffForm}
          options={{
            headerShown: true,
            headerTitle: 'Staff Form', 
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
          <Stack.Screen 
          name='OtherPayments'
          component={OtherPayments}
          options={{
            animation: 'none',
            headerShown: true,
            headerTitle: 'Payments',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#008AD8',
            }
          }}
        />
        <Stack.Screen 
          name='CustomerBills'
          component={CustomerBills}
          options={{
            animation: 'none',
            headerShown: true,
            headerTitle: 'Add Customer To Bill',  
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
        <Stack.Screen 
          name='SupplierBills'
          component={SupplierBills}
          options={{
            animation: 'none',
            headerShown: true,
            headerTitle: 'Add Customer To Bill', 
            headerTintColor: 'white', 
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
        <Stack.Screen 
          name='AddItemToBill'
          component={AddItemtoBill}
          options={{
            animation: 'none',
            headerShown: true,
            headerTitle: 'Add Item To Bill',  
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
         <Stack.Screen 
          name='AddNewSale'
          component={AddNewSale}
          options={{
            headerShown: true,
            headerTitle: 'Add New Sale', 
            headerTintColor: 'white', 
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
         <Stack.Screen 
          name='AddTransportDetails'
          component={AddTransportDetails}
          options={{
            headerShown: true,
            headerTitle: 'Add Transported Details', 
            headerTintColor: 'white',
             headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
         <Stack.Screen 
          name='SaleReturnForm'
          component={SaleReturnForm}
          options={{
            headerShown: true,
            headerTitle: 'Sale Return Form',  
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
         <Stack.Screen 
          name='AddPurchaseList'
          component={AddPurchaseList}
          options={{
            headerShown: true,
            headerTitle: 'Add Purchase',  
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
         <Stack.Screen 
          name='AddPurchaseReturn'
          component={AddPurchaseReturn}
          options={{
            headerShown: true,
            headerTitle: 'Add New Purchase Return', 
            headerTintColor: 'white', 
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
          <Stack.Screen 
          name='AddExpense'
          component={AddExpense}
          options={{
            headerShown: true,
            headerTitle: 'Add Expense', 
            headerTintColor: 'white', 
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
         <Stack.Screen 
          name='AddMoneyIn'
          component={AddMoneyIn}
          options={{
            headerShown: true,
            headerTitle: 'Add Money In',  
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
         <Stack.Screen 
          name='AddMoneyOut'
          component={AddMoneyOut}
          options={{
            headerShown: true,
            headerTitle: 'Add Money Out',  
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
         <Stack.Screen 
          name='ItemReport'
          component={ItemReport}
          options={{
            headerShown: true,
            headerTitle: 'Report',  
            headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
          <Stack.Screen 
          name='SelectBank'
          component={SelectBank}
          options={{
            animation: 'none',
            headerShown: true,
            headerTitle: 'Bank', 
            headerTintColor: 'white', 
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />

<Stack.Screen 
          name='ViewBills'
          component={ViewBills}
          options={{
            animation: 'none',
            headerShown: true,
            headerTitle: 'Sale', 
            headerTintColor: 'white', 
            headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );
};


//================================= Authentication Component =============================
const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#008AD0',
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
      />
      <Stack.Screen
        name="Forget Password"
        component={ForgetPassword}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          }}
      />
    </Stack.Navigator>
  );
};
