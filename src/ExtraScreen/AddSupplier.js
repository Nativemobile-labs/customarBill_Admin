import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
  Platform,
  PermissionsAndroid,
  Keyboard,
} from 'react-native';
import React, {useState, createRef} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import {Checkbox} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {addSupplier} from '../redux/reducerSlice.js/AddSupplierSlice';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const PickerData = [
  'Billing Type',
  'Online Delivery sell Price',
  'AC Sell Price',
  'Non AC sell Price',
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
const ReceivePaymentData = [
  'Type',
  'To Receive - Credit',
  'To Pay - Balance',
];
const PaymentTermData = [
  'Payment Term',
  'Net 0',
  'Net 1',
  'Net 7',
  'Net 15',
  'Net 30',
  'Net 90',
];
export default function AddCustomer({navigation}) {
  const [SupplierName, setSupplierName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [selectedBillingType, setSelectedBillingType] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [billingPinCode, setBillingPinCode] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedBalance, setSelectedBalance] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  // const [deliveryAddress, setDeliveryAddress] = useState();
  // const [deliveryPinCode, setDeliveryPinCode] = useState();
  const [openingBalance, setOPeningBalance] = useState('');
  const [gstAddressIsVisible, setGstAddressIsVisible] = useState(false);
  const [addressIsVisible, setAddressIsVisible] = useState(false);
  const [checkAddress, setCheckAddress] = useState(false);
  const [checkIsVisible, setCheckIsVisible] = useState(false);
  const [deliveryIsVisible, setDeliveryIsVisible] = useState(false);
  const [sameAddressIsVisible, setSameAddressIsVisible] = useState(false);
  const [balanceDetailsIsVisible, setBalanceDetailsIsVisible] = useState(false);

  const dispatch = useDispatch();

  const phoneNumberRef = createRef();
  const gstNumberRef = createRef();

 

  // access contacts
  const addFromContact = async () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your Contacts.',
      }).then(() => {
        loadContacts();
      });
    } else {
      loadContacts();
    }
  };

  // load contact
  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        contacts.sort((a, b) => a.givenName.toLowerCase() > b.toLowerCase());
        setContacts(contacts);
      })
      .catch(e => {
        Alert.alert('Permission to access contacts was denied');
        console.warn('Permission to access contacts was denied');
      });
    alert('access contacts');
  };

  // Save Supplier
  const saveCustomerButton = async () => {
    // console.log('supplier Data =>', SupplierName, phoneNumber, gstNumber, selectedBillingType, billingAddress,
    //                                   selectedState, billingPinCode, openingBalance, selectedBalance, selectedPayment);
    dispatch(
      addSupplier({
        SupplierName,
        phoneNumber,
        gstNumber,
        selectedBillingType,
        billingAddress,
        selectedState,
        billingPinCode,
        openingBalance,
        selectedBalance,
        selectedPayment,
      }),
    );
    await auth().onAuthStateChanged(user => {
      const uid = user.uid;
      firestore().collection(SupplierName).doc(uid).set({
        Supplier_Name:SupplierName,
        Phone_Number:phoneNumber,
        GSTNumber:gstNumber,
        Billing_Type:selectedBillingType,
        Billing_Address:billingAddress,
        Billing_State:selectedState,
        Billing_Pin_Code:billingPinCode,
        Opening_Balance:openingBalance,
        Balance_Type:selectedBalance,
        Payment_Term:selectedPayment,
      }).then((result) => console.log(result)).catch((error) => console.log(error))
    })
    navigation.navigate('Party List')
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => addFromContact()}>
          <Text style={styles.uploadText}>Add Form Contacts</Text>
        </TouchableOpacity>
        <View style={styles.lineView}>
          <View style={styles.lineViewInner} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.lineViewInner} />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.productButton}
            onPress={() => navigation.replace('AddCustomer')}>
            <Text style={styles.productText}>Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productButton}>
            <Text style={styles.supplierText}>Supplier</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Supplier Name/Contact Person"
            autoCapitalize="sentences"
            value={SupplierName}
            onSubmitEditing={() =>
              phoneNumberRef.current && phoneNumberRef.current.focus()
            }
            onChangeText={text => setSupplierName(text)}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Phone Number (Optional)"
            autoCapitalize="sentences"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            onSubmitEditing={() =>
              gstNumberRef.current && gstNumberRef.current.focus()
            }
            ref={phoneNumberRef}
          />
          <TextInput
            style={styles.inputText}
            placeholder="GST Number (If Applicable)"
            autoCapitalize="sentences"
            value={gstNumber}
            onChangeText={text => setGstNumber(text)}
            onSubmitEditing={Keyboard.dismiss}
            ref={gstNumberRef}
          />

          {/* dropdown List */}
          <SelectDropdown
            buttonStyle={styles.dropdownButton}
            buttonTextStyle={styles.DropboxText}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowText}
            data={PickerData}
            defaultButtonText={'Billing Type'}
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
              setSelectedBillingType(item);
            }}
          />
        </View>

        {/* GST or Address Button */}
        <TouchableOpacity
          style={styles.gstButtonStyle}
          onPress={() => [setGstAddressIsVisible(!gstAddressIsVisible)]}>
          <Text style={styles.blueTextColor}> + Add GST & Address</Text>
        </TouchableOpacity>

        {/* Address Button */}
        {!gstAddressIsVisible ? null : (
          <View style={{marginBottom: 200}}>
            <View>
              <TouchableOpacity
                style={styles.addressButton}
                onPress={() => [setAddressIsVisible(!addressIsVisible)]}>
                <Text style={styles.blueTextColor}>Address (Optional)</Text>
                <Icons
                  name={
                    addressIsVisible ? 'caret-down-outline' : 'caret-up-outline'
                  }
                  color="#008AD0"
                  size={15}
                  style={styles.downIcon}
                />
              </TouchableOpacity>
              {!addressIsVisible ? null : (
                <View style={{marginHorizontal: 20}}>
                  <TextInput
                    style={styles.inputText}
                    placeholder="Billing Address"
                    keyboardType="email-address"
                    autoCapitalize="sentences"
                    value={billingAddress}
                    onChangeText={text => setBillingAddress(text)}
                  />
                  <SelectDropdown
                    buttonStyle={styles.dropdownButton2}
                    buttonTextStyle={styles.DropboxText}
                    rowStyle={styles.dropdownRowStyle}
                    rowTextStyle={styles.dropdownRowText}
                    data={StateData}
                    defaultButtonText={'Billing State'}
                    dropdownIconPosition={'right'}
                    renderDropdownIcon={isOpened => {
                      return (
                        <Icons
                          name={
                            isOpened ? 'caret-down-outline' : 'caret-up-outline'
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
                  <TextInput
                    style={styles.inputText}
                    placeholder="Billing Pin Code"
                    keyboardType="number-pad"
                    autoCapitalize="sentences"
                    value={billingPinCode}
                    onChangeText={text => setBillingPinCode(text)}
                  />

                  {/* Same Address */}
                  <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                      <Checkbox
                        status={checkAddress ? 'checked' : 'unchecked'}
                        color="#008AD0"
                        onPress={() => [
                          setCheckAddress(!checkAddress),
                          setCheckIsVisible(!checkIsVisible),
                        ]}
                      />
                      <Text
                        style={{
                          marginTop: 7,
                          color: 'black',
                          fontWeight: '600',
                        }}>
                        Delivery Address
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        marginLeft: 30,
                      }}>
                      <Checkbox
                        status={checkAddress ? 'checked' : 'unchecked'}
                        color="#008AD0"
                        onPress={() => setCheckAddress(!checkAddress)}
                      />
                      <Text
                        style={{
                          marginTop: 7,
                          color: 'black',
                          fontWeight: '600',
                        }}>
                        Same As Billing
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>

            {/* Fill Same Address */}
            <View style={{marginHorizontal: 20}}>
              {!checkIsVisible ? null : (
                <View>
                  <TextInput
                    style={styles.inputText}
                    placeholder="Delivery Address"
                    keyboardType="email-address"
                    autoCapitalize="sentences"
                    value={billingAddress}
                    // onChangeText={text => setDeliveryAddress(billingAddress)}
                  />
                  <SelectDropdown
                    buttonStyle={styles.dropdownButton2}
                    buttonTextStyle={styles.DropboxText}
                    rowStyle={styles.dropdownRowStyle}
                    rowTextStyle={styles.dropdownRowText}
                    data={StateData}
                    defaultButtonText={'Delivery State'}
                    defaultValue={selectedState}
                    dropdownIconPosition={'right'}
                    renderDropdownIcon={isOpened => {
                      return (
                        <Icons
                          name={
                            isOpened ? 'caret-down-outline' : 'caret-up-outline'
                          }
                          color={'#444'}
                          size={14}
                        />
                      );
                    }}
                    onSelect={item => {
                      setSelectedItem(item);
                    }}
                  />
                  <TextInput
                    style={styles.inputText}
                    placeholder="Delivery Pin Code"
                    keyboardType="number-pad"
                    autoCapitalize="sentences"
                    value={billingPinCode}
                    // onChangeText={text => setDeliveryPinCode(billingPinCode)}
                  />
                </View>
              )}

              {/* Balance Details */}
              <View>
                <TouchableOpacity
                  style={styles.balanceDetailButton}
                  onPress={() => [
                    setBalanceDetailsIsVisible(!balanceDetailsIsVisible),
                  ]}>
                  <Text style={styles.blueTextColor}>
                    Balance Details (Optional)
                  </Text>
                  <Icons
                    name={
                      addressIsVisible
                        ? 'caret-down-outline'
                        : 'caret-up-outline'
                    }
                    color="#008AD0"
                    size={15}
                    style={{marginLeft: 160, marginTop: 12}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {!balanceDetailsIsVisible ? null : (
              <View style={{marginHorizontal: 20}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <TextInput
                    style={styles.openBalance}
                    placeholder="Opening Balance"
                    keyboardType="number-pad"
                    value={openingBalance}
                    onChangeText={text => setOPeningBalance(text)}
                  />
                  <SelectDropdown
                    buttonStyle={styles.balanceTypeStyle}
                    buttonTextStyle={styles.DropboxText}
                    rowStyle={styles.dropdownRowStyle}
                    rowTextStyle={styles.dropdownRowText}
                    data={ReceivePaymentData}
                    defaultButtonText={'To Receive-Credit'}
                    dropdownIconPosition={'right'}
                    renderDropdownIcon={isOpened => {
                      return (
                        <Icons
                          name={
                            isOpened ? 'caret-down-outline' : 'caret-up-outline'
                          }
                          color={'#444'}
                          size={14}
                        />
                      );
                    }}
                    onSelect={item => {
                      setSelectedBalance(item);
                    }}
                  />
                </View>
                <SelectDropdown
                  buttonStyle={styles.dropdownButton2}
                  buttonTextStyle={styles.DropboxText}
                  rowStyle={styles.dropdownRowStyle}
                  rowTextStyle={styles.dropdownRowText}
                  data={PaymentTermData}
                  defaultButtonText={'Payment Term'}
                  dropdownIconPosition={'right'}
                  renderDropdownIcon={isOpened => {
                    return (
                      <Icons
                        name={
                          isOpened ? 'caret-down-outline' : 'caret-up-outline'
                        }
                        color={'#444'}
                        size={14}
                      />
                    );
                  }}
                  onSelect={item => {
                    setSelectedPayment(item);
                  }}
                />
              </View>
            )}
          </View>
        )}
      </ScrollView>

      {/* Save Button */}
      <View style={styles.saveButtonView}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => saveCustomerButton()}>
          <Text style={styles.saveText}>Save Customer</Text>
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
    color: 'white',
    fontWeight: 'bold',
  },
  supplierText: {
    alignSelf: 'center',
    marginTop: 2,
    color: '#008AD0',
    fontWeight: 'bold',
  },
  inputView: {
    flex: 15,
    width: '90%',
    alignSelf: 'center',
  },
  inputText: {
    backgroundColor: 'white',
    marginTop: 15,
    height: 40,
    paddingLeft: 18,
    borderRadius: 5,
  },
  saveButtonView: {
    flex: 1,
    position: 'absolute',
    marginTop: '173%',
  },
  saveButton: {
    backgroundColor: '#008AD0',
    height: 40,
    marginLeft: 32,
    width: '270%',
    borderRadius: 5,
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
  dropdownButton: {
    width: 150,
    backgroundColor: 'white',
    height: 40,
    marginTop: 15,
    borderRadius: 5,
  },
  DropboxText: {
    textAlign: 'justify',
    fontSize: 15,
    color: 'black',
  },
  dropdownRowStyle: {
    backgroundColor: 'white',
    borderBottomColor: 'silver',
  },
  dropdownRowText: {
    color: 'black',
    textAlign: 'justify',
    fontSize: 15,
  },
  gstButtonStyle: {
    alignSelf: 'flex-end',
    marginRight: 30,
  },
  blueTextColor: {
    color: '#008AD0',
    marginTop: 10,
  },
  addressButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 15,
    height: 40,
    paddingLeft: 18,
    borderRadius: 5,
    width: '90%',
  },
  downIcon: {
    marginLeft: 210,
    marginTop: 12,
  },
  dropdownButton2: {
    width: '100%',
    backgroundColor: 'white',
    height: 40,
    marginTop: 15,
    borderRadius: 5,
  },
  openBalance: {
    backgroundColor: 'white',
    marginTop: 15,
    height: 40,
    paddingLeft: 18,
    borderRadius: 5,
    width: '59%',
    marginRight: '1%',
  },
  balanceTypeStyle: {
    backgroundColor: 'white',
    height: 40,
    marginTop: 15,
    borderRadius: 5,
    width: '40%',
  },
  balanceDetailButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 15,
    height: 40,
    paddingLeft: 18,
    borderRadius: 5,
    width: '100%',
  },
});
