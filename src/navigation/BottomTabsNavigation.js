import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PrimaryDark, PrimaryWhite} from '../constants/colors';
import Create from '../screens/create';
import Favourate from '../screens/favourate';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Search from '../screens/search';

const Tab = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={() => styles.screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            let name = 'home';
            return <AntDesign name={name} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            let name = 'search1';
            return <AntDesign name={name} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="create"
        component={Create}
        options={{
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            let name = 'plussquareo';
            return <AntDesign name={name} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="favourate"
        component={Favourate}
        options={{
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            let name = 'hearto';
            return <AntDesign name={name} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            let name = 'person';
            return <Ionicons name={name} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;

const styles = StyleSheet.create({
  screenOptions: {
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarActiveTintColor: PrimaryWhite,
    tabBarInactiveTintColor: PrimaryWhite,
    tabBarStyle: {
      backgroundColor: PrimaryDark,
    },
  },
});
