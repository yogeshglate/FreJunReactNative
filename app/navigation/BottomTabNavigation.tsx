import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Icon } from '../components';
import { appConstants, colors, navigationStrings } from '../constants';
import { Bridging, ListOperations, RandomUsers } from '../screens';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}>
        <Tab.Screen
          name={navigationStrings.randomUsers}
          component={RandomUsers}
          options={{
            tabBarIcon: () => (
              <Icon
                name={appConstants.usersIcon}
                size={25}
                color={colors.black}
              />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.ListOperations}
          component={ListOperations}
          options={{
            tabBarIcon: () => (
              <Icon
                name={appConstants.listIcon}
                size={25}
                color={colors.black}
              />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.Bridging}
          component={Bridging}
          options={{
            tabBarIcon: () => (
              <Icon
                name={appConstants.bridgeIcon}
                size={25}
                color={colors.black}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
