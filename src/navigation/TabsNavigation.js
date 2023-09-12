import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeTabNavigation from '../screens/profile/HomeTabNavigation';
import {GreyColor, PrimaryDark, PrimaryWhite} from '../constants/colors';
import {StyleSheet} from 'react-native';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={() => styles.screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeTabNavigation}
        options={{
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({color}) => {
            let name = 'home';
            return <AntDesign name={name} size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Home2"
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            let name = 'home';
            return <AntDesign name={name} size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Home3"
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            let name = 'home';
            return <AntDesign name={name} size={20} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screenOptions: {
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarActiveTintColor: PrimaryWhite,
    tabBarInactiveTintColor: PrimaryWhite,
    tabBarIndicatorStyle: {
      height: 2,
      alignSelf: 'center',
      backgroundColor: GreyColor,
    },
    tabBarStyle: {
      backgroundColor: PrimaryDark,
      borderWidth: 1,
      borderTopColor: GreyColor,
    },
  },
});
export default MyTabs;
