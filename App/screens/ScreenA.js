import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setNumberSuccess} from '../redux/actions';

function ScreenA(props) {
  const dispatch = useDispatch();
  const setNumber = num => dispatch(setNumberSuccess(num));
  const number = useSelector(state => state.exampleReducer.number);

  return (
    <View style={styles.container}>
      <Text> Test Redux</Text>
      <Button title={'Add Number'} onPress={() => setNumber(number + 1)} />
      <Button title={'Reset Number'} onPress={() => setNumber(0)} />
      <Button title={'Minus Number'} onPress={() => setNumber(number - 1)} />
      <Text>{number}</Text>
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

export default ScreenA;
