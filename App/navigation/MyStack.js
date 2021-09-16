import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from './MyTabs';
import {ScreenD} from '../screens';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="ScreenD" component={ScreenD} />
    </Stack.Navigator>
  );
}
export default MyStack;
