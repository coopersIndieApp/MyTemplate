import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setNumberSuccess} from '../redux/actions';

function ScreenC({navigation}) {
  const dispatch = useDispatch();
  const setNumber = num => dispatch(setNumberSuccess(num));
  const number = useSelector(state => state.exampleReducer.number);
  return (
    <View style={styles.container}>
      <Text>Redux - Gloable Value</Text>
      <Text>{number}</Text>
      <Button
        title={'Go to ScreenA'}
        onPress={() => navigation.navigate('ScreenA')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenC;
