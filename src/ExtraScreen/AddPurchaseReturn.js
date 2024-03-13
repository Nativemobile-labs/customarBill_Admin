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
import {purchaseReturnSl} from '../redux/reducerSlice.js/AddNewPurchaseReturnSlice';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function AddPurchaseReturn({navigation}) {
  const [returnInvoice, setReturnInvoice] = useState(null);
  const [billDate, setBillDate] = useState(null);
  const [billingTerms, setBillingTerms] = useState('');
  const [billDueDate, setBillDueDate] = useState(null);
  const [purchaseBillNo, setPurchaseBillNo] = useState(null);
  const [purchaseBillDueDate, setPurchaseBillDueDate] = useState(null);
  const [discountInPercentage, setDiscountInPercentage] = useState('');
  const [discountInCash, setDiscountInCash] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [receivedAmount, setReceivedAmount] = useState('');
  const [invoiceNotes, setInvoiceNotes] = useState('');
  const [isVisibleInvoice, setIsVisibleInvoice] = useState(false);

  const discountInPercentageRef = createRef();
  const discountInCashRef = createRef();
  const totalAmountRef = createRef();

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

  // const StateData = [
  //   'Billing State',
  //   'Andhra Pradesh',
  //   'Arunachal Pradesh',
  //   'Assam',
  //   'Bihar',
  //   'Chhattisgarh',
  //   'Goa',
  //   'Gujarat',
  //   'Haryana',
  //   'Himachal Pradesh',
  //   'Jharkhand',
  //   'Karnataka',
  //   'Kerala',
  //   'Madhya Pradesh',
  //   'Maharashtra',
  //   'Manipur',
  //   'Meghalaya',
  //   'Mizoram',
  //   'Nagaland',
  //   'Odisha',
  //   'Punjab',
  //   'Rajasthan',
  //   'Sikkim',
  //   'Tamil Nadu',
  //   'Telangana',
  //   'Tripura',
  //   'Uttar Pradesh',
  //   'Uttarakhand',
  //   'West Bengal',
  //   'Andaman and Nicobar Islands',
  //   'Chandigarh',
  //   'Dadra & Nagar Haveli and Daman & Diu',
  //   'Delhi',
  //   'Jammu and Kashmir',
  //   'Lakshadweep',
  //   'Puducherry',
  //   'Ladakh',
  // ];

  // Show Date
  useEffect(() => {
    let today = new Date();
    let date =
      today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
    setBillDate(date);
    setBillDueDate(date);
    setPurchaseBillDueDate(date);
    let purrNo = 'PURR_' + new Date().getTime();
    setReturnInvoice(purrNo);
    let invNo = 'inv_' + new Date().getTime();
    setPurchaseBillNo(invNo);
  }, []);

  // Handle Save Button
  const handleSaveButton = async () => {
    // console.log('purchase Data =>', returnInvoice, billDate, billingTerms, billDueDate, purchaseBillNo, purchaseBillDueDate,
    //                     discountInPercentage, discountInCash, totalAmount, receivedAmount, invoiceNotes)
   await dispatch(
      purchaseReturnSl({
        returnInvoice,
        billDate,
        billingTerms,
        billDueDate,
        purchaseBillNo,
        purchaseBillDueDate,
        discountInPercentage,
        discountInCash,
        totalAmount,
        receivedAmount,
        invoiceNotes,
      }),
    );
    await auth().onAuthStateChanged(user => {
      const uid = user.uid;
      firestore().collection("AdminUser").doc("Purchase Return").set({
        Return_Invoice:returnInvoice,
        Bill_Date:billDate,
        Billing_Term:billingTerms,
        Bill_Due_Date:billDueDate,
        Purchase_Bill:purchaseBillNo,
        Purchase_Bill_Date:purchaseBillDueDate,
        Discount_Per:discountInPercentage,
        Discount_Cash:discountInCash,
        Total_Amount:totalAmount,
        Received_Amount:receivedAmount,
        Invoice_Note:invoiceNotes,
      }).then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error)
      })
    })
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Purchase Return No */}
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row'}}>
            <Text>Purchase Return No.</Text>
            <Text style={{marginLeft: 70}}>Bill Date</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                width: 180,
                backgroundColor: 'white',
                height: 40,
                marginRight: 10,
              }}
              value={returnInvoice}
              onChangeText={Text => setReturnInvoice(Text)}
            />
            <TouchableOpacity style={styles.calenderDate}>
              <Text>{billDate}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Billing Terms */}
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row'}}>
            <Text>Billing Terms</Text>
            <Text style={{marginLeft: 118}}>Bill Due Date</Text>
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

        {/* Purchase Bill No */}
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row'}}>
            <Text>Purchase Bill No.</Text>
            <Text style={{marginLeft: 90}}>Purchase Bill Date</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                width: 180,
                backgroundColor: 'white',
                height: 40,
                marginRight: 10,
              }}
              placeholder="Purchase Bill No."
              value={purchaseBillNo}
              onChangeText={Text => setPurchaseBillNo(Text)}
            />
            <TouchableOpacity style={styles.calenderDate}>
              <Text>{purchaseBillDueDate}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Customer Name and Contact Person */}
        <View style={styles.mainView}>
          <TouchableOpacity
            style={styles.customerNameButton}
            onPress={() => navigation.navigate('AddCustomerToBill')}>
            <Text style={{color: 'black'}}>Customer Name/Contact Person</Text>
          </TouchableOpacity>
        </View>

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
            placeholderTextColor="black"
            keyboardType="numeric"
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
            placeholderTextColor="black"
            keyboardType="numeric"
            value={receivedAmount}
            onChangeText={Text => setReceivedAmount(Text)}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>

        {/* Invoice Notes */}
        <TouchableOpacity style={styles.invoiceNotes}>
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
          onPress={() => alert('Upload Image')}>
          <Icons name="image-outline" size={40} style={{alignSelf: 'center'}} />
          <Text style={styles.uploadText}>Upload Image</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Save Button */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => [
          handleSaveButton(),
          navigation.navigate('Purchase Return List'),
        ]}>
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
  customerNameButton: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
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
    marginBottom: 150,
    borderRadius: 8,
    marginTop: 40,
    borderWidth: 3,
    backgroundColor: 'white',
    borderColor: 'white',
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
