import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import React from 'react';

export default function Bank({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Image
              source={require('../assets/bankImage.jpeg')}
              style={styles.image}
            />
            <Text style={styles.linkText}>Link Current Account</Text>
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => navigation}>
              <Text style={styles.buttonText}>Link Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.createAccount}>
            <Text style={styles.currentAccount}>
              Don't have Current Account?
            </Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://www.hdfcbank.com/sme/save/accounts/current-accounts',
                )
              }>
              <Text style={styles.accountText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 70,
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  linkText: {
    color: 'black',
    alignSelf: 'center',
    marginTop: 15,
    fontWeight: '400',
  },
  linkButton: {
    backgroundColor: '#008AD0',
    height: 40,
    borderRadius: 5,
    width: 300,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 10,
  },
  createAccount: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  currentAccount: {
    color: 'black',
    fontWeight: '400',
  },
  accountText: {
    color: '#008AD0',
    fontWeight: '600',
    marginLeft: 10,
  },
});
