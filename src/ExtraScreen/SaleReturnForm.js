import { StyleSheet, SafeAreaView, Text, View, ScrollView, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { salesReturn } from '../redux/reducerSlice.js/AddSaleReturnSlice';

export default function SaleReturnForm({navigation}) {
  const [saleReturn, setSaleReturn] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [saleBillNo, setSaleBillNo] = useState('Sale Bill No');
  const [billDate, setBillDate] = useState(null);
  const [totalAmount, setTotalAmount] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [noteIsVisible, setNoteIsVisible] = useState(false);
  const [noteInput, setNoteInput] = useState('');

  const dispatch = useDispatch();


    // Show Date
    useEffect(() => {
        let today = new Date();
        let date = today.getDate()+ '/'+ today.getMonth()+1+'/'+ today.getFullYear();
        setReturnDate(date);
        setBillDate(date);
        let srId = 'SR_' + (new Date()). getTime();
        setSaleReturn(srId);
      }, []);

      // Handle save Button
      const handleSaveButton = () => {
        // console.log( saleReturn, returnDate, saleBillNo, billDate, totalAmount, amountPaid, noteInput)
        dispatch(salesReturn({saleReturn, returnDate, saleBillNo, billDate, totalAmount, amountPaid, noteInput}))
      }

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {/* Sale Return No */}
          <View style={{marginTop: 15, marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
               <Text>Sale Return No.</Text>
                <Text style={{marginLeft: 110}}>Date</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                   style={styles.textInput}
                   value={saleReturn}
                   onChangeText={() => setSaleReturn(Text)}
                />
                <TextInput 
                   style={styles.textInput}
                   value={returnDate}
                   onChangeText={() => setReturnDate(Text)}
                />
            </View>
          </View>

        {/* Sale Bill No */}
          <View style={{marginTop: 15, marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
               <Text>Sale Bill No.</Text>
                <Text style={{marginLeft: 130}}>Date</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                   style={styles.textInput}
                   value={saleBillNo}
                   onChangeText={() => setSaleBillNo(Text)}
                />
                <TextInput 
                   style={styles.textInput}
                   value={billDate}
                   onChangeText={() => setSaleBillNo(Text)}
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

            {/* Total Amount */}
            <View style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 20}}>
                <View style={styles.textInputWhite}>
                    <Text style={styles.amountText}>Total Amount</Text>
                </View>
                <TextInput 
                   style={styles.textInput}
                   keyboardType='decimal-pad'
                   placeholder='0'
                   placeholderTextColor='black'
                   value={totalAmount}
                   onChangeText={(Text) => setTotalAmount(Text)}
                />
            </View>

            {/* Amount paid */}
            <View style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 20}}>
                <View style={styles.textInputWhite}>
                    <Text style={styles.amountText}>Amount Paid</Text>
                </View>
                <TextInput 
                    style={styles.textInput}
                    keyboardType='decimal-pad'
                    placeholder='0'
                    placeholderTextColor='black'
                    value={amountPaid}
                    onChangeText={(Text) => setAmountPaid(Text)}
                />
            </View>

            {/* Note */}
            <TouchableOpacity style={styles.noteButton} onPress={() => setNoteIsVisible(!noteIsVisible)}>
                <Text style={styles.noteText}>Notes</Text>
            </TouchableOpacity>

            {/* Note Container */}
            {!noteIsVisible ? null :<View style={{marginHorizontal: 20, marginTop: 20, marginBottom: 100}}>
                <TextInput 
                style={styles.notesInput}
                value={noteInput}
                multiline={true}
                onChangeText={(Text) => setNoteInput(Text)}
                />
            </View>}
        </ScrollView>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} 
            onPress={() => [handleSaveButton(), navigation.navigate('Sale Return List')]}>
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