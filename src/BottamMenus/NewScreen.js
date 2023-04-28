import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function NewScreen({navigation}) {
  return (
    <SafeAreaView style={styles.centeredView}>
      <View
        style={{
          backgroundColor: '#008AD0',
          height: 350,
          borderRadius: 10,
          width: '95%',
          alignSelf: 'center',
          marginTop: 365,
        }}>
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.rightView}>
              <TouchableOpacity
                style={styles.touchButton}
                onPress={() => navigation.navigate('Sale List')}>
                <Text style={styles.touchText}>Create Sale</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchButton}
                onPress={() => navigation.navigate('Money In List')}>
                <Text style={styles.touchText}>Create MoneyIn</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchButton}
                onPress={() => navigation.navigate('Purchase List')}>
                <Text style={styles.touchText}>Create Purchase</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchButton}
                onPress={() => navigation.navigate('Sale Return List')}>
                <Text style={styles.touchTextTwo}>
                  Create Sale Return/ {'\n'}Credit Note
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.leftView}>
              <TouchableOpacity
                style={styles.touchButton}
                onPress={() => navigation.navigate('Order/Quotation/Estimate')}>
                <Text style={styles.touchText}>Create Estimate</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchButton}
                onPress={() => navigation.navigate('Money Out List')}>
                <Text style={styles.touchText}>Create MoneyOut</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchButton}
                onPress={() => navigation.navigate('Expense List')}>
                <Text style={styles.touchText}>Create Expense</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchButton}
                onPress={() => navigation.navigate('Purchase Return List')}>
                <Text style={styles.touchTextTwo}>
                  Create Purchase {'\n'}Return/Debit Note
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#D9E4EC',
  },
  rightView: {
    flex: 1,
    width: '50%',
    height: '100%',
  },
  leftView: {
    flex: 1,
    width: '50%',
    height: '100%',
  },
  touchButton: {
    height: 60,
    borderColor: 'silver',
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  touchText: {
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: 20,
  },
  touchTextTwo: {
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: 10,
  },
});
