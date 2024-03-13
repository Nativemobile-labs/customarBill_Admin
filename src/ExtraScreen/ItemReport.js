import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalSelector from 'react-native-modal-selector';

const data = [
  {key: 1, label: 'Inventory (1)'},
  {key: 2, label: 'Low Stock'},
  {key: 3, label: 'Not In Stock'},
  {key: 4, label: 'In Stock'},
  {key: 5, label: 'Online Shop (1)'},
  {key: 6, label: 'All (1)'},
];
export default function ItemReport({navigation}) {
 
  return (
    <View style={styles.container}>
      <View style={styles.dropdownView}>
        {/* dropdown modal selector */}
        <ModalSelector 
          selectStyle={styles.selectedButton}
          selectTextStyle={{color: 'white', fontWeight: '600'}}
          selectedItemTextStyle={{color: 'black'}}
          optionTextStyle={{color: '#008AD0'}}
          optionContainerStyle={{backgroundColor: 'white'}}
          cancelTextStyle={{color: 'black'}}
          initValueTextStyle={{color: 'white', fontWeight: '600'}}
          data={data}
          touchableActiveOpacity={0.2}
          initValue='Inventory'
          cancelText={'Unselect'}
          // onChange={(option)=>{ alert(`${option.label}`) }}
          supportedOrientations={['portrait']}
          animationType='none'
          backdropPressToClose={true}
          scrollViewAccessible={true}   
        />
        <TouchableOpacity
          style={styles.unSelectButton}
          onPress={() => navigation.navigate('Categories')}>
          <Text style={styles.unSelectText}>Categories</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 200}}>
        {/* <Text>Margin Bottom</Text> */}
      </View>
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
  selectedButton: {
    backgroundColor: '#008AD8',
    marginTop: 20,
    height: 40,
    width: 140,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginLeft: 22,
    marginRight: 22,
  },
  unSelectButton: {
    backgroundColor: 'white',
    marginTop: 20,
    height: 40,
    width: 140,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginLeft: 22,
    marginRight: 22,
  },
  unSelectText: {
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
    paddingTop: 9,
  },
});
