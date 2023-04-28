import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalSelector from 'react-native-modal-selector';

export default function PartyScreen({navigation}) {
  const data = [
    {key: 1, label: 'All'},
    {key: 2, label: 'Receivable'},
    {key: 3, label: 'Payable'},
    {key: 4, label: 'Customer'},
    {key: 5, label: 'Supplier'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dropdownView}>
        {/* dropdown modal selector */}
        <ModalSelector
          selectStyle={styles.unselectButton}
          selectTextStyle={{color: 'white', fontWeight: '600'}}
          selectedItemTextStyle={{color: 'black'}}
          optionTextStyle={{color: '#008AD8'}}
          optionContainerStyle={{backgroundColor: 'white'}}
          cancelTextStyle={{color: 'black'}}
          initValueTextStyle={{color: 'white', fontWeight: '600'}}
          data={data}
          touchableActiveOpacity={0.2}
          initValue="Select"
          cancelText={'Unselect'}
          // onChange={(option)=>{ alert(`${option.label}`) }}
          supportedOrientations={['portrait']}
          animationType="none"
          backdropPressToClose={true}
          scrollViewAccessible={true}
        />
        <TouchableOpacity
          style={styles.selectedButton}
          onPress={() => navigation.navigate('PartyCategory')}>
          <Text style={styles.unselectText}>Party Tags</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddCustomer')}
        style={styles.addCustomerButton}>
        <Icon
          name="add-circle"
          size={25}
          color="white"
          style={{paddingTop: 12, paddingLeft: 17}}
        />
        <Text style={styles.addCustomerText}>Add Customer/Party</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  dropdownView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  unselectText: {
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
    paddingTop: 9,
  },
  unselectButton: {
    backgroundColor: '#008AD8',
    marginTop: 20,
    height: 40,
    width: 170,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 15,
  },
  selectedButton: {
    backgroundColor: 'white',
    marginTop: 20,
    height: 40,
    width: 170,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 15,
  },
  addCustomerButton: {
    backgroundColor: '#008AD8',
    marginTop: 660,
    alignSelf: 'center',
    height: 50,
    width: 200,
    borderRadius: 30,
    position: 'absolute',
    flexDirection: 'row',
  },
  addCustomerText: {
    marginTop: 15,
    color: 'white',
    fontWeight: '600',
  },
});
