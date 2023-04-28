import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DashboardScreen from './DashboardScreen';
import PartyScreen from '../BottamMenus/PartyScreen';
import NewScreen from '../BottamMenus/NewScreen';
import InventoryScreen from '../BottamMenus/InventoryScreen';
import CategoriesScreen from '../BottamMenus/CategoriesScreen';

const Tab = createBottomTabNavigator();
export default function BottomScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Party List') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'New') {
            iconName = focused ? 'duplicate' : 'duplicate-outline';
          } else if (route.name === 'Inventory') {
            iconName = focused ? 'cube' : 'cube-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'grid' : 'grid-outline';
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: '#307ecc',
        tabBarInactiveTintColor: '#A9A9A9',
      })}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name="Party List"
        component={PartyScreen}
        options={{
          headerShown: false,
          headerTitle: 'Customer/Party List',
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name="New"
        component={NewScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
    </Tab.Navigator>
  );
}
