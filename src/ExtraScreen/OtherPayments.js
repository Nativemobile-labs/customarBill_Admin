import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

export default function OtherPayments({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainInnerView}>
          <TouchableOpacity
            style={styles.payoutButton}
            onPress={() => navigation.navigate('Payments')}>
            <Text style={styles.payoutText}>Payouts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.othersButton}
            onPress={() => Alert.alert('Ok Other Payments')}>
            <Text style={styles.othersText}>Others</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  mainInnerView: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
  },
  payoutButton: {
    height: 35,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 25,
  },
  payoutText: {
    alignSelf: 'center',
    marginTop: 8,
    color: '#008AD0',
    fontWeight: '600',
  },
  othersButton: {
    height: 35,
    width: 150,
    backgroundColor: '#008AD0',
    borderRadius: 20,
    marginLeft: 25,
  },
  othersText: {
    alignSelf: 'center',
    marginTop: 8,
    color: 'white',
    fontWeight: '600',
  },
});
