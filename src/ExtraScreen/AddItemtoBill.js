import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  BackHandler,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function AddItemtoBill({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Create New Item */}
      <ScrollView>
        <TouchableOpacity
          style={styles.addItemButton}
          onPress={() => navigation.navigate('InventoryModal')}>
          <Text style={styles.addItemText}> Create New Item + </Text>
        </TouchableOpacity>
      </ScrollView>
      {/* Save and Print Button */}
      <View style={styles.saveButtonView}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate('AddNewSale')}>
          <Text style={styles.DueButtonText}>
            {'      '}Bill & Due Date {'\n'} Transport, Discount
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => alert('save Data')}>
          <Text style={styles.saveText}>Save and Print</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  addItemButton: {
    borderColor: '#008AD0',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 10,
    height: 40,
    backgroundColor: 'white',
  },
  addItemText: {
    color: '#008AD0',
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: '600',
  },
  saveButtonView: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    marginTop: '173%',
  },
  saveButton: {
    backgroundColor: '#008AD8',
    height: 40,
    marginLeft: 32,
    width: '40%',
    borderRadius: 5,
  },
  DueButtonText: {
    color: 'silver',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 2,
  },
  saveText: {
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 10,
  },
});
