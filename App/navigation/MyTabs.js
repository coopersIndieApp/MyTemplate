import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenA, ScreenB} from '../screens';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ScreenA"
        component={ScreenA}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Ionicons
              name={focused ? 'ios-grid' : 'ios-grid-outline'}
              color={COLORS.primary}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScreenB"
        component={ScreenB}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Ionicons
              name={focused ? 'list' : 'list-outline'}
              color={COLORS.primary}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
