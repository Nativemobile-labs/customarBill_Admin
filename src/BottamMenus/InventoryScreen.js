import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalSelector from 'react-native-modal-selector';


export default function InventoryScreen({navigation}) {
  // INVENTORY RENDER ITEM LIST
  const renderItems = ({item}) => {
    return (
      <TouchableOpacity style={styles.touchList}>
        <Text style={{color: 'black'}}>{item.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black'}}>Sale Price: {item.SalePrice}</Text>
          <Text style={{color: 'black'}}>(Purchase: {item.Purchase})</Text>
        </View>
        <Text style={{color: 'black'}}>Current Stock: {item.CurrentStock}</Text>
        <TouchableOpacity
          onPress={() => alert('Adjust quantity')}
          style={styles.adjust}>
          <Text style={styles.adjustText}>Adjust Quantity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{position: 'absolute', right: 10, top: 20}}
          onPress={() => alert('share')}>
          <Icon name="share-social-sharp" size={25} color={'#ec9006'} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <View style={{marginTop: 15, marginBottom: 200}}>
          <FlatList
            data={inventoryDataList}
            renderItem={renderItems}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>

      {/* ADD ITEM BUTTON */}
      <TouchableOpacity
        onPress={() => navigation.navigate('InventoryModal')}
        style={styles.addItemButton}>
        <Icon
          name="add-circle"
          size={25}
          color="white"
          style={{paddingTop: 7, paddingLeft: 15}}
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
    // marginTop: 660,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    height: 40,
    width: 120,
    borderRadius: 30,
    position: 'absolute',
    flexDirection: 'row',
  },
  addItemText: {
    marginTop: 10,
    color: 'white',
    fontWeight: '600',
  },
  touchList: {
    marginHorizontal: 15,
    backgroundColor: 'silver',
    padding: 10,
    borderRadius: 5,
    height: 110,
    marginTop: 8,
  },
  adjust: {
    backgroundColor: '#008AD0',
    height: 30,
    width: 120,
    alignItems: 'center',
    borderRadius: 5,
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  adjustText: {
    color: 'white',
    fontWeight: '600',
    marginTop: 4,
  },
});

const inventoryDataList = [
  {
    id: 1,
    name: 'List_1',
    SalePrice: 200,
    Purchase: 100,
    CurrentStock: 21212,
  },
  {
    id: 2,
    name: 'List_2',
    SalePrice: 200,
    Purchase: 100,
    CurrentStock: 21212,
  },
  {
    id: 3,
    name: 'List_3',
    SalePrice: 200,
    Purchase: 100,
    CurrentStock: 21212,
  },
  {
    id: 4,
    name: 'List_4',
    SalePrice: 200,
    Purchase: 100,
    CurrentStock: 21212,
  },
  {
    id: 5,
    name: 'List_5',
    SalePrice: 200,
    Purchase: 100,
    CurrentStock: 21212,
  },
  {
    id: 6,
    name: 'List_6',
    SalePrice: 200,
    Purchase: 100,
    CurrentStock: 21212,
  },
];

const data = [
  {key: 1, label: 'Inventory (1)'},
  {key: 2, label: 'Low Stock'},
  {key: 3, label: 'Not In Stock'},
  {key: 4, label: 'In Stock'},
  {key: 5, label: 'Online Shop (1)'},
  {key: 6, label: 'All (1)'},
  {key: 7, label: 'Mohit'},
];
