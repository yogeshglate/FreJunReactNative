import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, navigationStrings } from '../constants';
import { Bridging, ListOperations, RandomUsers } from '../screens';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={navigationStrings.randomUsers}
          component={RandomUsers}
          options={{
            tabBarIcon: () => (
              <Icon name="account-group" size={25} color={colors.black} />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.ListOperations}
          component={ListOperations}
          options={{
            tabBarIcon: () => (
              <Icon name="view-list" size={25} color={colors.black} />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.Bridging}
          component={Bridging}
          options={{
            tabBarIcon: () => (
              <Icon name="bridge" size={25} color={colors.black} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
