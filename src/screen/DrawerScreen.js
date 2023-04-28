import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import ExpenseList from '../menusScreen/ExpenseList';
import MoneyList from '../menusScreen/MoneyList';
import MoneyOutList from '../menusScreen/MoneyOutList';
import OrderScreen from '../menusScreen/OrderScreen';
import Payments from '../menusScreen/Payments';
import PurchaseList from '../menusScreen/PurchaseList';
import ReportScreen from '../menusScreen/ReportScreen';
import SaleListScreen from '../menusScreen/SaleListScreen';
import StaffList from '../menusScreen/StaffList';
import InventoryScreen from '../BottamMenus/InventoryScreen';
import Setting from '../menusScreen/Settings';
import BottamScreen from '../screen/BottomScreen';
import SaleReturnList from '../menusScreen/SaleReturnList';
import PurchaseReturnList from '../menusScreen/PurchaseReturnList';
import PartyScreen from '../BottamMenus/PartyScreen';
import Bank from '../menusScreen/Bank';
import CashBook from '../menusScreen/CashBook';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={BottamScreen}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="home"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Report"
        component={ReportScreen}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="stats-chart"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Sale List"
        component={SaleListScreen}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="bar-chart"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Sale Return List"
        component={SaleReturnList}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="bar-chart"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Order/Quotation/Estimate"
        component={OrderScreen}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="cart"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Purchase List"
        component={PurchaseList}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="reader"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Purchase Return List"
        component={PurchaseReturnList}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="reader"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Expense List"
        component={ExpenseList}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="layers"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Money In List"
        component={MoneyList}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="cash"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Money Out List"
        component={MoneyOutList}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="cash"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{
          animation: 'none',
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="wallet"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Party List"
        component={PartyScreen}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="person"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Staff List"
        component={StaffList}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="people"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Inventory/Item List"
        component={InventoryScreen}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="cube"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Setting}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="cog"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Bank"
        component={Bank}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="business"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
      <Drawer.Screen
        name="Cash Book"
        component={CashBook}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="book"
              size={25}
              color={focused ? '#307ecc' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD8',
          },
          headerTintColor: 'white',
        }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
 const userSlice = useSelector((state) => state.registerUserSlice)
//  console.log(dataSlice,"+++++++++++++++++++++")
  return (
    <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 20,
            color: 'white',
          }}>
          OP: mobile Number
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 10,
            color: 'white',
          }}>
          Profile: {userSlice.firstName+' '+userSlice.lastName}
        </Text>
        <Text style={{fontSize: 15, marginLeft: 15, color: 'white'}}>
          {}
        </Text>
        <TouchableOpacity style={styles.touchButton}>
          <Text style={{marginTop: 2, alignSelf: 'center', fontWeight: 'bold'}}>
            {userSlice.titleName}
          </Text>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        // options={{
        //   drawerIcon: ({focused, size}) => (
        //     <Ionicons
        //       name="business"
        //       size={25}
        //       color={focused ? '#307ecc' : '#A9A9A9'}
        //     />
        //   ),
        // }}
        label="Log out"
        onPress={() => {
          alert('user logout');
        }}
        style={{marginLeft: 70}}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008AD8',
    marginTop: -4,
    height: 150,
  },
  touchButton: {
    width: 100,
    height: 25,
    marginLeft: 15,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: 'white',
  },
});
