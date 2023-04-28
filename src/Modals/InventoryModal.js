import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useState, createRef} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {addProduct} from '../redux/reducerSlice.js/ProductInventorySlice';

export default function InventoryModal({navigation}) {
  const [ProductName, setProductName] = useState('');
  const [SalePrice, setSalePrice] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [onlineDelivery, setOnlineDelivery] = useState('');
  const [acSellPrice, setACSellPrice] = useState('');
  const [NonACSellPrice, setNonACSellPrice] = useState('');
  const [onlineSellPrice, setOnlineSellPrice] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [lowStockAlert, setLowStockAlert] = useState(false);
  const [moreIsVisible, setMoreIsVisible] = useState(false);
  const [InventoryIsVisible, setInventoryIsVisible] = useState(false);
  const [productIsVisible, setProductIsVisible] = useState(false);

  const dispatch = useDispatch();

  const salePriceRef = createRef();
  const onlineDeliveryRef = createRef();
  const acSellRef = createRef();
  const nonACSellRef = createRef();
  const onlineSellRef = createRef();
  const purchaseSellRef = createRef();

  const UnitData = [
    'Unit',
    'Add Unit',
    'Pieces',
    'Box',
    'Kilograms',
    'Litre',
    'Units',
    'Bags',
    'BALE',
    'Billion of Unit',
    'Bottles',
    'Buckles',
    'Bunches',
    'Bundels',
    'Cans',
    'Cartons',
    'Centimeters',
    'Cubic Centimeters',
    'Cubic Meters',
    'Days',
    'Dozens',
    'Drums',
    'Grammes',
    'Great Gross',
    'Gross Yards',
    'Kilolitre',
    'Kilometer',
    'Meters',
    'Metric Ton',
    'MilliGram',
    'Millilitre',
    'Numbers',
    'Others',
    'Packs',
    'Pairs',
    'Quintal',
    'Rolls',
    'Sets',
    'Sq. Feet',
    'Sq. Yards',
    'Sq. Meters',
    'tablets',
    'Ten gross',
    'Thousand',
    'Tonnes',
    'Tubes',
    'US Gallons',
    'Yards',
  ];
  // handle Save Button
  const handleSaveButton = () => {
    // console.log('Product Data =>', ProductName, SalePrice + selectedItem, onlineDelivery, acSellPrice, NonACSellPrice,
    //                                 onlineSellPrice, purchasePrice, lowStockAlert);
    dispatch(
      addProduct({
        ProductName,
        SalePrice,
        selectedItem,
        onlineDelivery,
        acSellPrice,
        NonACSellPrice,
        onlineSellPrice,
        purchasePrice,
        lowStockAlert,
      }),
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => navigation.navigate('UploadParty')}>
          <Text style={styles.uploadText}>Upload Excel File</Text>
        </TouchableOpacity>
        {/* show file name and size */}
        {/* <View>
          {multipleFile.map((item, key)=> (
            <View key={key}>
              <Text>
                File Name: {item.name ? item.name : ''}
                File Size: {item.size ? item.size : ''}
              </Text>
            </View>
          ))}
        </View> */}
        <View style={styles.lineView}>
          <View style={styles.lineViewInner} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.lineViewInner} />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.productButton}>
            <Text style={styles.productText}>Product</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.productButton}
            onPress={() => navigation.navigate('ServiceInventory')}>
            <Text style={styles.serviceText}>Service</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Product Name"
            autoCapitalize="sentences"
            keyboardType="email-address"
            value={ProductName}
            onChangeText={text => setProductName(text)}
            onSubmitEditing={() =>
              salePriceRef.current && salePriceRef.current.focus()
            }
          />
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.salePriceInputText}
              placeholder={`Sale Price/ ${selectedItem}`}
              autoCapitalize="sentences"
              keyboardType="decimal-pad"
              value={SalePrice}
              onChangeText={text => setSalePrice(text)}
              onSubmitEditing={() =>
                onlineDeliveryRef.current && onlineDeliveryRef.current.focus()
              }
              ref={salePriceRef}
            />
            <SelectDropdown
              buttonStyle={{
                backgroundColor: 'white',
                height: 45,
                marginTop: 15,
                width: '38%',
                borderRadius: 5,
              }}
              buttonTextStyle={{
                textAlign: 'justify',
                fontSize: 15,
                color: 'black',
              }}
              rowStyle={{backgroundColor: 'white', borderBottomColor: 'silver'}}
              rowTextStyle={{
                color: 'black',
                textAlign: 'justify',
                fontSize: 15,
              }}
              data={UnitData}
              defaultButtonText={'Unit'}
              dropdownIconPosition={'right'}
              renderDropdownIcon={isOpened => {
                return (
                  <Icons
                    name={isOpened ? 'caret-down-outline' : 'caret-up-outline'}
                    color={'#444'}
                    size={14}
                  />
                );
              }}
              onSelect={item => {
                setSelectedItem(item);
              }}
            />
          </View>
          <TextInput
            style={styles.inputText}
            placeholder="Online Delivery Sell Price"
            autoCapitalize="sentences"
            keyboardType="decimal-pad"
            value={onlineDelivery}
            onChangeText={text => setOnlineDelivery(text)}
            onSubmitEditing={() =>
              acSellRef.current && acSellRef.current.focus()
            }
            ref={onlineDeliveryRef}
          />
          <TextInput
            style={styles.inputText}
            placeholder="AC Sell Price"
            autoCapitalize="sentences"
            keyboardType="decimal-pad"
            value={acSellPrice}
            onChangeText={text => setACSellPrice(text)}
            onSubmitEditing={() =>
              nonACSellRef.current && nonACSellRef.current.focus()
            }
            ref={acSellRef}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Non AC Sell Price"
            autoCapitalize="sentences"
            keyboardType="decimal-pad"
            value={NonACSellPrice}
            onChangeText={text => setNonACSellPrice(text)}
            onSubmitEditing={() =>
              onlineSellRef.current && onlineSellRef.current.focus()
            }
            ref={nonACSellRef}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Online Sell Price"
            autoCapitalize="sentences"
            keyboardType="decimal-pad"
            value={onlineSellPrice}
            onChangeText={text => setOnlineSellPrice(text)}
            onSubmitEditing={() =>
              purchaseSellRef.current && purchaseSellRef.current.focus()
            }
            ref={onlineSellRef}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Purchase Price"
            autoCapitalize="sentences"
            keyboardType="decimal-pad"
            value={purchasePrice}
            onChangeText={text => setPurchasePrice(text)}
            onSubmitEditing={() => Keyboard.dismiss}
            ref={purchaseSellRef}
          />
        </View>

        {/* More */}
        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginHorizontal: 30, marginTop: 15}}
          onPress={() => setMoreIsVisible(!moreIsVisible)}>
          <Text style={{fontWeight: 'bold', color: '#008AD0'}}>More</Text>
        </TouchableOpacity>

        {!moreIsVisible ? null : (
          <View style={{marginBottom: 200}}>
            {/* Inventory Details */}
            <TouchableOpacity
              style={styles.showInventoryButton}
              onPress={() => setInventoryIsVisible(!InventoryIsVisible)}>
              <Text style={styles.showInventoryText}>Inventory Details</Text>
              <Icons
                name={
                  InventoryIsVisible ? 'caret-down-outline' : 'caret-up-outline'
                }
                color="#008AD0"
                size={15}
                style={{marginLeft: 215}}
              />
            </TouchableOpacity>
            {!InventoryIsVisible ? null : (
              <View style={{marginHorizontal: 20}}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Low Stock Alert"
                  autoCapitalize="sentences"
                  keyboardType="email-address"
                  value={lowStockAlert}
                  onChangeText={text => setLowStockAlert(text)}
                />
              </View>
            )}

            {/* Product Display */}
            <TouchableOpacity
              style={styles.showInventoryButton}
              onPress={() => setProductIsVisible(!productIsVisible)}>
              <Text style={styles.showInventoryText}>Product Display</Text>
              <Icons
                name={
                  productIsVisible ? 'caret-down-outline' : 'caret-up-outline'
                }
                color="#008AD0"
                size={15}
                style={{marginLeft: 215}}
              />
            </TouchableOpacity>
            {!productIsVisible ? null : (
              <View style={{marginHorizontal: 20}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '900',
                    fontSize: 20,
                    marginTop: 10,
                    marginLeft: 10,
                  }}>
                  Product Images
                </Text>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 100,
                    borderRadius: 5,
                    marginTop: 15,
                  }}>
                  <Text style={{color: 'black'}}>show product images</Text>
                </View>
              </View>
            )}
          </View>
        )}
      </ScrollView>
      <View style={styles.saveButtonView}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => alert('Save & new')}>
          <Text style={styles.saveText}>Save & New</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => handleSaveButton()}>
          <Text style={styles.saveText}>Save</Text>
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
  uploadButton: {
    marginTop: 15,
    alignSelf: 'center',
    width: '90%',
    height: 45,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#008AD8',
    backgroundColor: 'white',
  },
  uploadText: {
    color: '#008AD8',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 12,
  },
  lineView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  lineViewInner: {
    flex: 1,
    height: 1,
    backgroundColor: 'silver',
  },
  orText: {
    width: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  productButton: {
    width: 90,
    height: 25,
    borderRadius: 15,
    marginLeft: 10,
    backgroundColor: '#D9E4',
  },
  productText: {
    alignSelf: 'center',
    marginTop: 2,
    color: '#008AD8',
    fontWeight: 'bold',
  },
  serviceText: {
    alignSelf: 'center',
    marginTop: 2,
    color: 'white',
    fontWeight: 'bold',
  },
  focusButton: {
    width: 90,
    height: 25,
    borderRadius: 15,
    marginLeft: 10,
    backgroundColor: 'silver',
  },
  focusText: {
    alignSelf: 'center',
    marginTop: 2,
    color: 'white',
  },
  inputView: {
    flex: 15,
    width: '90%',
    alignSelf: 'center',
  },
  inputText: {
    backgroundColor: 'white',
    marginTop: 15,
    height: 45,
    paddingLeft: 25,
    borderRadius: 5,
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
  saveText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
  showInventoryButton: {
    flexDirection: 'row',
    height: 45,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 5,
    paddingLeft: 25,
    paddingTop: 13,
  },
  showInventoryText: {
    color: '#008AD0',
    fontWeight: '400',
  },
  salePriceInputText: {
    backgroundColor: 'white',
    marginTop: 15,
    height: 45,
    paddingLeft: 25,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
  },
});
