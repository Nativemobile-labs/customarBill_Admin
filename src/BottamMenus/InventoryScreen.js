import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalSelector from 'react-native-modal-selector';

export default function InventoryScreen({navigation}) {
  const data = [
    {key: 1, label: 'Inventory (1)'},
    {key: 2, label: 'Low Stock'},
    {key: 3, label: 'Not In Stock'},
    {key: 4, label: 'In Stock'},
    {key: 5, label: 'Online Shop (1)'},
    {key: 6, label: 'All (1)'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            initValue="Inventory"
            cancelText={'Unselect'}
            // onChange={(option)=>{ alert(`${option.label}`) }}
            supportedOrientations={['portrait']}
            animationType="none"
            backdropPressToClose={true}
            scrollViewAccessible={true}
          />
          <TouchableOpacity
            style={styles.unSelectButton}
            onPress={() => navigation.navigate('Categories')}>
            <Text style={styles.unSelectText}>Categories</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('InventoryModal')}
        style={styles.addItemButton}>
        <Icon
          name="add-circle"
          size={25}
          color="white"
          style={{paddingTop: 12, paddingLeft: 15}}
        />
        <Text style={styles.addItemText}>Add Item</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
  addItemButton: {
    backgroundColor: '#008AD8',
    marginTop: 660,
    alignSelf: 'center',
    height: 50,
    width: 120,
    borderRadius: 30,
    position: 'absolute',
    flexDirection: 'row',
  },
  addItemText: {
    marginTop: 15,
    color: 'white',
    fontWeight: '600',
  },
});
