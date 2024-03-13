import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(auth().currentUser ? 'Drawer' : 'Authentication');
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/pack.jpeg')}
        style={styles.imageContainer}
      />
      <ActivityIndicator
        animating={true}
        size="large"
        color="#008AD0"
        style={styles.activity}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageContainer: {
    height: hp('23%'),
    width: wp('40%'),
  },
  activity: {
    marginTop: '20%',
  },
});
