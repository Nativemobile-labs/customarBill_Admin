import { StyleSheet, SafeAreaView, Text, View, ScrollView, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import React, {useState, useEffect, createRef} from 'react';
import {useDispatch} from 'react-redux';
import { purchase } from '../redux/reducerSlice.js/AddPurchaseSlice';

export default function AddPurchaseList({navigation}) {
  const [purchaseBill, setPurchaseBill] = useState(null);
  const [purchaseDate, setPurchaseDate] = useState(null);
  const [invoiceNo, setInvoiceNo] = useState(null);
  const [cashDiscountPer, setCashDiscountPer] = useState('');
  const [cashDiscountRupee, setCashDiscountRupee] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [noteIsVisible, setNoteIsVisible] = useState(false);
  const [noteInput, setNoteInput] = useState('');

  const cashDiscountPerRef = createRef();
  const cashDiscountRupeeRef = createRef();
  const totalAmountRef = createRef();

  const dispatch = useDispatch();

    // Show Date
    useEffect(() => {
        let today = new Date();
        let date = today.getDate()+ '/'+ today.getMonth()+1+'/'+ today.getFullYear();
        setPurchaseDate(date);
        let purId = 'Pur_' + (new Date()).getTime();
        setPurchaseBill(purId);
        let invNo = 'Inn_' + (new Date()).getTime();
        setInvoiceNo(invNo);
      }, []);

      // handle Save Button
      const handleSaveButton = () => {
        // console.log('purchase Data => ', purchaseBill, purchaseDate, invoiceNo, cashDiscountPer, 
        //                                         cashDiscountRupee, totalAmount,amountPaid, noteInput)
        dispatch(purchase({purchaseBill, purchaseDate, invoiceNo, cashDiscountPer, 
            cashDiscountRupee, totalAmount,amountPaid, noteInput}))                                        
      }

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {/* Purchase Bill  No */}
          <View style={{marginTop: 15, marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
               <Text>Purchase Bill No.</Text>
                <Text style={{marginLeft: 100}}>Date</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                   style={styles.textInput}
                   value={purchaseBill}
                   onChangeText={() => setPurchaseBill(Text)}
                />
                <TextInput 
                   style={styles.textInput}
                   value={purchaseDate}
                   onChangeText={() => setPurchaseDate(Text)}
                />
            </View>
          </View>

        {/* Invoice No */}
          <View style={{marginTop: 15, marginHorizontal: 20}}>
             <Text>Invoice No.</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                   style={styles.textInput}
                   value={invoiceNo}
                   onChangeText={() => setInvoiceNo(Text)}
                />
            </View>
          </View>

           {/* Supplier/Vender Name */}
            <TouchableOpacity style={styles.supplierButton} onPress={() => navigation.navigate('AddCustomerToBill')}>
                <Text style={styles.supplierText}>Supplier/Vender Name</Text>
            </TouchableOpacity>

            {/* Add Item to Bill */}
            <TouchableOpacity style={styles.addItem} onPress={() => navigation.navigate('AddItemToBill')}>
                <Text style={styles.saveText}>Add Item To Bill</Text>
            </TouchableOpacity>

            {/* Add More Details */}
            <TouchableOpacity style={styles.addItem} onPress={() => navigation.navigate('AddTransportDetails')}>
                <Text style={styles.saveText}>Add More Details</Text>
            </TouchableOpacity>

            {/* Cash Discount % */}
            <View style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 20}}>
                <View style={styles.textInputWhite}>
                    <Text style={styles.amountText}>Cash Discount (in %)</Text>
                </View>
                <TextInput 
                   style={styles.textInput}
                   keyboardType='numeric'
                   placeholder='Cash Discount (in %)'
                   value={cashDiscountPer}
                   onChangeText={(Text) => setCashDiscountPer(Text)}
                   onSubmitEditing={() => cashDiscountPerRef.current 
                                            && cashDiscountPerRef.current.focus()}
                />
            </View>

            {/* Cash Discount Rupee */}
            <View style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 20}}>
                <View style={styles.textInputWhite}>
                    <Text style={styles.amountText}>Cash Discount (in ₹)</Text>
                </View>
                <TextInput 
                    style={styles.textInput}
                    ref={cashDiscountPerRef}
                    keyboardType='numeric'
                    placeholder='Cash Discount (in ₹)'
                    value={cashDiscountRupee}
                    onChangeText={(Text) => setCashDiscountRupee(Text)}
                    onSubmitEditing={() => cashDiscountRupeeRef.current 
                                                && cashDiscountRupeeRef.current.focus()}
                />
            </View>

             {/* Total Amount */}
             <View style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 20}}>
                <View style={styles.textInputWhite}>
                    <Text style={styles.amountText}>Total Amount</Text>
                </View>
                <TextInput 
                    style={styles.textInput}
                    ref={cashDiscountRupeeRef}
                    keyboardType='numeric'
                    placeholder='0'
                    placeholderTextColor='black'
                    value={totalAmount}
                    onChangeText={(Text) => setTotalAmount(Text)}
                    onSubmitEditing={() => totalAmountRef.current 
                                                && totalAmountRef.current.focus()}
                />
            </View>

             {/* Amount Paid */}
             <View style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 20}}>
                <View style={styles.textInputWhite}>
                    <Text style={styles.amountText}>Amount Paid</Text>
                </View>
                <TextInput 
                    style={styles.textInput}
                    ref={totalAmountRef}
                    keyboardType='numeric'
                    placeholder='0'
                    placeholderTextColor='black'
                    value={amountPaid}
                    onChangeText={(Text) => setAmountPaid(Text)}
                    onSubmitEditing={() => Keyboard.dismiss()}
                />
            </View>

            {/* Note */}
            <TouchableOpacity style={styles.noteButton} onPress={() => setNoteIsVisible(!noteIsVisible)}>
                <Text style={styles.noteText}>Notes</Text>
            </TouchableOpacity>

            {/* Note Container */}
           {!noteIsVisible ? null : <View style={{marginHorizontal: 20, marginTop: 20, marginBottom: 200}}>
                <TextInput 
                style={styles.notesInput}
                value={noteInput}
                keyboardType='default'
                multiline={true}
                onChangeText={(Text) => setNoteInput(Text)}
                />
            </View>}
        </ScrollView>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} 
            onPress={() => [handleSaveButton(), navigation.navigate('Purchase List')]}>
           <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9E4EC',
    },
    textInput: {
        backgroundColor: 'white',
        width: 181,
        height: 40,
        marginRight: 10,
    },
    supplierButton: {
        marginHorizontal: 20, 
        borderWidth: 1, 
        borderColor: 'white', 
        backgroundColor: 'white',
        height: 60, 
        marginTop: 20,
        marginBottom: 15,
    },
    supplierText: {
        color: 'black',
        paddingLeft: 15,
        marginTop: 5,
    },
    addItem: {
        backgroundColor: '#008AD0',
        marginHorizontal: 20,
        height: 40,
        borderRadius: 5,
        marginTop: 10,
    },
    textInputWhite: {
        backgroundColor: '#D9E4EC',
        width: 181,
        height: 40,
        marginRight: 10,
    },
    amountText: {
        color: 'black',
        marginTop: 10,
        marginLeft: 10,
        fontWeight: '600',
    },
    noteButton: {
        backgroundColor: 'white',
        height: 30,
        marginTop: 15,
        alignSelf: 'flex-end',
        marginHorizontal: 30,
        width: 80,
    },
    noteText: {
        color: '#008AD0',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 5,
    },
    notesInput: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        height: 80,
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
