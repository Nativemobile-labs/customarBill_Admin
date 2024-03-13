import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect, createRef} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import {useDispatch} from 'react-redux';
import {addNewSale} from '../redux/reducerSlice.js/AddNewSaleSlice';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function AddNewSale({navigation}) {
  const [invoiceNo, setInvoiceNo] = useState(null);
  const [billDate, setBillDate] = useState(null);
  const [billingTerms, setBillingTerms] = useState('');
  const [billDueDate, setBillDueDate] = useState(null);
  const [selectedState, setSelectedState] = useState('');
  const [discountInPercentage, setDiscountInPercentage] = useState('');
  const [discountInCash, setDiscountInCash] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [receivedAmount, setReceivedAmount] = useState(getPDiscount);
  const [invoiceNotes, setInvoiceNotes] = useState('');
  const [isVisibleInvoice, setIsVisibleInvoice] = useState(false);
  const [deliveryStateIsVisible, setDeliveryStateIsVisible] = useState(false);

  const [filePath, setFilePath] = useState({});

  const discountInPercentageRef = createRef();
  const discountInCashRef = createRef();
  const totalAmountRef = createRef();
  var getPDiscount;
  var finalDiscount;
  const dispatch = useDispatch();

  const BillingTermsData = [
    'Select',
    'Net 0',
    'Net 1',
    'Net 7',
    'Net 15',
    'Net 30',
    'Net 90',
  ];
  const StateData = [
    'Billing State',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra & Nagar Haveli and Daman & Diu',
    'Delhi',
    'Jammu and Kashmir',
    'Lakshadweep',
    'Puducherry',
    'Ladakh',
  ];

  // Show Date
  useEffect(() => {
    let today = new Date();
    let date =
      today.getDate() + '/' + today.getMonth()  + '/' + today.getFullYear();
    setBillDate(date);
    setBillDueDate(date);
    let invId = 'INV_' + new Date().getTime();
    setInvoiceNo(invId);
  }, []);

  // Handle Upload Image
  const handleUploadImage = () => {
    alert('select Image');
  };

  // Handle Save Button
  const handleSaveButton = () => {
    // console.log('add Sale =>', invoiceNo, billDate, billingTerms, billDueDate, selectedState,
    //               discountInPercentage, discountInCash,totalAmount, receivedAmount, invoiceNotes );
    dispatch(
      addNewSale({
        invoiceNo,
        billDate,
        billingTerms,
        billDueDate,
        selectedState,
        discountInPercentage,
        discountInCash,
        totalAmount,
        receivedAmount,
        invoiceNotes,
      }),
    );
    handlePDiscount();
  };

  // Handle (%) Discount of Total Amount
  const handlePDiscount = () => {
    //  getPDiscount = totalAmount * discountInPercentage / 100
    // console.log('pdiscount========>', getPDiscount)
    //  finalDiscount = totalAmount - getPDiscount
    // console.log('finaldiscount========>', finalDiscount)
    getPDiscount = (discountInCash / totalAmount) * 100;
    console.log('discount=========>', getPDiscount);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row'}}>
            <Text>Invoice No.</Text>
            <Text style={{marginLeft: 120}}>Bill Date</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                width: 180,
                backgroundColor: 'white',
                height: 40,
                marginRight: 10,
              }}
              placeholder={invoiceNo}
              placeholderTextColor={'black'}
            />
            <TouchableOpacity style={styles.calenderDate}>
              <Text>{billDate}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row'}}>
            <Text>Billing Terms</Text>
            <Text style={{marginLeft: 110}}>Bill Due Date</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SelectDropdown
              buttonStyle={{
                height: 40,
                width: 180,
                marginLeft: 10,
                backgroundColor: 'white',
              }}
              buttonTextStyle={{
                fontSize: 15,
                textAlign: 'justify',
                color: 'black',
              }}
              rowStyle={{backgroundColor: 'white', borderBottomColor: 'silver'}}
              rowTextStyle={{
                color: 'black',
                textAlign: 'justify',
                fontSize: 15,
              }}
              data={BillingTermsData}
              defaultButtonText={'Select'}
              dropdownIconPosition={'right'}
              renderDropdownIcon={billingTerms => {
                return (
                  <Icons
                    name={
                      billingTerms ? 'caret-down-outline' : 'caret-up-outline'
                    }
                    color={'#444'}
                    size={14}
                  />
                );
              }}
              onSelect={item => {
                setBillingTerms(item);
              }}
            />
            <TouchableOpacity style={styles.calenderDate}>
              <Text>{billDueDate}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* received and Delivery View */}
        <View style={styles.mainView}>
          <View style={styles.receivableView}>
            <Text style={styles.receivableText}>Receivable - ₹ 0</Text>
          </View>
          <TouchableOpacity style={styles.customerNameButton}>
            <Text style={{color: 'black'}}>Customer Name/Contact Person</Text>
            <Text
              style={{color: 'black', marginTop: 17, fontSize: 16}}
              onPress={() => navigation.navigate('AddCustomerToBill')}>
              Cash Sale
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDeliveryStateIsVisible(!deliveryStateIsVisible)}
            style={styles.deliveryView}>
            <Icons
              name="copy-outline"
              color="#008AD0"
              size={15}
              style={{margin: 5}}
            />
            <Text style={styles.deliveryText}>Delivery State</Text>
          </TouchableOpacity>
        </View>

        {/* Delivery State */}
        {!deliveryStateIsVisible ? null : (
          <View style={{marginHorizontal: 20, marginTop: 15}}>
            <SelectDropdown
              buttonStyle={{
                height: 50,
                width: '100%',
                backgroundColor: 'white',
              }}
              buttonTextStyle={{
                fontSize: 15,
                textAlign: 'justify',
                color: 'black',
              }}
              rowStyle={{backgroundColor: 'white', borderBottomColor: 'silver'}}
              rowTextStyle={{
                color: 'black',
                textAlign: 'justify',
                fontSize: 15,
              }}
              data={StateData}
              defaultButtonText={'Select'}
              dropdownIconPosition={'right'}
              renderDropdownIcon={selectedState => {
                return (
                  <Icons
                    name={
                      selectedState ? 'caret-down-outline' : 'caret-up-outline'
                    }
                    color={'#444'}
                    size={14}
                  />
                );
              }}
              onSelect={item => {
                setSelectedState(item);
              }}
            />
          </View>
        )}

        {/* Add Item and Transport Button */}
        <TouchableOpacity
          style={styles.itemToBillButton}
          onPress={() => navigation.navigate('AddItemToBill')}>
          <Text style={styles.saveText}>Add items to Bill</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transportButton}
          onPress={() => navigation.navigate('AddTransportDetails')}>
          <Text style={styles.saveText}>Transport Details</Text>
        </TouchableOpacity>

        {/* Cash Discount in Percentage*/}
        <View style={styles.cashView}>
          <View style={styles.cashTextView}>
            <Text style={styles.cashTextStyle}>Cash Discount (in %)</Text>
          </View>
          <TextInput
            style={styles.cashTextInput}
            placeholder="Cash Discount (in %)"
            keyboardType="numeric"
            returnKeyType="next"
            value={discountInPercentage}
            onChangeText={Text => setDiscountInPercentage(Text)}
            onSubmitEditing={() =>
              discountInPercentageRef.current &&
              discountInPercentageRef.current.focus()
            }
          />
        </View>

        {/* Cash Discount in Cash */}
        <View style={styles.cashView}>
          <View style={styles.cashTextView}>
            <Text style={styles.cashTextStyle}>Cash Discount (in ₹)</Text>
          </View>
          <TextInput
            style={styles.cashTextInput}
            ref={discountInPercentageRef}
            placeholder="Cash Discount (in ₹)"
            keyboardType="numeric"
            returnKeyType="next"
            value={discountInCash}
            onChangeText={Text => setDiscountInCash(Text)}
            onSubmitEditing={() =>
              discountInCashRef.current && discountInCashRef.current.focus()
            }
          />
        </View>

        {/* Total Amount */}
        <View style={styles.cashView}>
          <View style={styles.cashTextView}>
            <Text style={styles.cashTextStyle}>Total Amount</Text>
          </View>
          <TextInput
            style={styles.cashTextInput}
            ref={discountInCashRef}
            placeholder="0"
            keyboardType="numeric"
            returnKeyType="next"
            value={totalAmount}
            onChangeText={Text => setTotalAmount(Text)}
            onSubmitEditing={() =>
              totalAmountRef.current && totalAmountRef.current.focus()
            }
          />
        </View>

        {/* Amount Received*/}
        <View style={styles.cashView}>
          <View style={styles.cashTextView}>
            <Text style={styles.cashTextStyle}>Amount Received</Text>
          </View>
          <TextInput
            style={styles.cashTextInput}
            ref={totalAmountRef}
            placeholder="0"
            keyboardType="numeric"
            returnKeyType="done"
            value={receivedAmount}
            onChangeText={Text => setReceivedAmount(Text)}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>

        {/* Invoice Notes */}
        <TouchableOpacity
          style={styles.invoiceNotes}
          onPress={() => setIsVisibleInvoice(!isVisibleInvoice)}>
          <Icons
            name="reader-outline"
            color="#008AD0"
            size={15}
            style={{margin: 5}}
          />
          <Text style={styles.invoiceNotesText}>Invoice Notes</Text>
        </TouchableOpacity>

        {/* Invoice Notes Text */}
        {!isVisibleInvoice ? null : (
          <View style={{marginHorizontal: 20, marginTop: 15}}>
            <TextInput
              style={styles.notesTextInput}
              keyboardType="default"
              multiline={true}
              value={invoiceNotes}
              onChangeText={Text => setInvoiceNotes(Text)}
            />
          </View>
        )}

        {/* Upload Image */}
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => handleUploadImage()}>
          <Icons name="image-outline" size={40} style={{alignSelf: 'center'}} />
          <Text style={styles.uploadText}>Upload Image</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Save Button */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => [handleSaveButton(), navigation.navigate('Sale List')]}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  mainView: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  calenderDate: {
    backgroundColor: 'white',
    width: 180,
    height: 40,
    paddingTop: 11,
    paddingLeft: 10,
  },
  itemToBillButton: {
    backgroundColor: '#008AD8',
    height: 40,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 25,
  },
  transportButton: {
    backgroundColor: '#008AD8',
    height: 40,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 10,
  },
  cashView: {
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
  },
  cashTextView: {
    backgroundColor: '#D9E4EC',
    height: 40,
    width: 180,
  },
  cashTextStyle: {
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
  },
  cashTextInput: {
    backgroundColor: 'white',
    height: 40,
    width: 180,
    marginLeft: 12,
  },
  invoiceNotes: {
    backgroundColor: 'white',
    height: 25,
    alignSelf: 'flex-end',
    marginRight: 24,
    marginTop: 15,
    width: 120,
    flexDirection: 'row',
  },
  invoiceNotesText: {
    color: '#008AD8',
    fontWeight: '600',
    alignSelf: 'center',
    marginLeft: 2,
  },
  receivableView: {
    backgroundColor: 'white',
    width: 120,
    height: 25,
    marginLeft: 251,
    position: 'absolute',
  },
  receivableText: {
    color: 'red',
    alignSelf: 'center',
    marginTop: 3,
  },
  deliveryView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: 120,
    height: 25,
    marginLeft: 251,
    position: 'absolute',
    marginTop: 34,
  },
  deliveryText: {
    color: '#008AD8',
    alignSelf: 'center',
    marginTop: 3,
  },
  customerNameButton: {
    borderWidth: 2,
    borderColor: 'white',
    height: 60,
    paddingLeft: 10,
  },
  notesTextInput: {
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    height: 70,
  },
  uploadButton: {
    height: 70,
    width: 70,
    marginHorizontal: 40,
    marginBottom: 90,
    borderRadius: 8,
    marginTop: 40,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'white',
    borderStyle: 'dotted',
  },
  uploadText: {
    color: 'black',
    fontSize: 10,
    alignSelf: 'center',
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#008AD8',
    marginBottom: 10,
    height: 40,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  saveText: {
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 10,
  },
});
