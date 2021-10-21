import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({focused, color, size}) => {
        var iconName;
        if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
      },
    })}
    tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
        }}
    >
       <Tab.Screen name="Home" component={HomeScreen}/>
       <Tab.Screen name="Settings" component={SettingScreen}/>
    </Tab.Navigator>
  );
}