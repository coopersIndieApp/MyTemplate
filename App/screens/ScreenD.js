import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

function ScreenD({navigation}) {
  return (
    <View style={styles.container}>
      <Text>ScreenD</Text>
      <Button
        title={'Go to ScreenC'}
        onPress={() => navigation.navigate('ScreenC')}
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

export default ScreenD;
