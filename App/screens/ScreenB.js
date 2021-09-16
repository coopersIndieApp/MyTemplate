import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

function ScreenB({navigation}) {
  return (
    <View style={styles.container}>
      <Text>ScreenB</Text>
      <Button
        title={'Go to ScreenD'}
        onPress={() => navigation.navigate('ScreenD')}
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

export default ScreenB;
