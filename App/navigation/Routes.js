import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './MyDrawer';

export default function Routes() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
