import {StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';

export default function Settings({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>here is machine and bill setting</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9E4EC',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
