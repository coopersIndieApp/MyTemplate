import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {ScreenC, ScreenD} from '../screens';
import MyStack from './MyStack';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="MyStack" component={MyStack} />
      <Drawer.Screen name="ScreenC" component={ScreenC} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
