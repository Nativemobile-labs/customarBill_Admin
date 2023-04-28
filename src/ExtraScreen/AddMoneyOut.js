import { StyleSheet, SafeAreaView, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, {useState, useEffect} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux'; 'react-redux';
import { moneyOut } from '../redux/reducerSlice.js/MoneyOutSlice';


export default function AddMoneyOut({navigation}) {
  const [receiptNo, setReceiptNo] = useState(null);
  const [moneyInDate, setMoneyInDate] = useState(null);
  const [selectedState, setSelectedState] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [checked, setChecked] = useState('Cash');
  const [chequeNo, setChequeNo] = useState('');
  const [chequeAmount, setChequeAmount] = useState();
  const [transactionNo, setTransactionNo] = useState('');
  const [transactionAmount, setTransactionAmount] = useState();
  // const [salePerson, setSalePerson] = useState('');
  const [invoiceNotes, setInvoiceNotes] = useState('');
  const [isVisibleInvoice, setIsVisibleInvoice] = useState(false)
  const [deliveryStateIsVisible, setDeliveryStateIsVisible] = useState(false)

  const dispatch = useDispatch();
  

  // const selectPerson = ['Admin']
  const StateData = ["Billing State", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra & Nagar Haveli and Daman & Diu", "Delhi", "Jammu and Kashmir", "Lakshadweep", "Puducherry", "Ladakh" ];
    
  // Show Date
    useEffect(() => {
    let today = new Date();
    let date = today.getDate()+ '/'+ today.getMonth()+1+'/'+ today.getFullYear();
    setMoneyInDate(date);
    let RecNu = 'Rep_' + (new Date()).getTime(); 
    setReceiptNo(RecNu);
  }, []);

  // Handle Save Button
  const handleSaveButton = () => {
    // console.log('Save Data =>', receiptNo, moneyInDate, selectedState, totalAmount, chequeNo, transactionNo, invoiceNotes);
    dispatch(moneyOut({receiptNo, moneyInDate, selectedState, totalAmount, chequeNo, chequeAmount,
                   transactionNo,transactionAmount, invoiceNotes}))
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {/* Receipt Number */}
          <View style={styles.mainView}>
             <View style={{flexDirection: 'row'}}>
                  <Text>Receipt Number</Text>
                  <Text style={{marginLeft: 100}}>Money In Date</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
              <TextInput 
                style={{width: 180, backgroundColor: 'white', height: 40, marginRight: 10}}
                value={receiptNo}
                onChangeText={(Text) => setReceiptNo(Text)}
              />
              <TouchableOpacity style={styles.calenderDate}>
                <Text>{moneyInDate}</Text>
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
              <Text style={{color: 'black', marginTop: 17, fontSize: 16}} 
                onPress={() => navigation.navigate('AddCustomerToBill')}>Cash Sale</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDeliveryStateIsVisible(!deliveryStateIsVisible)}
              style={styles.deliveryView}>
              <Icons name='copy-outline' color='#008AD0' size={15} style={{margin: 5}}/>
              <Text style={styles.deliveryText}>Delivery State</Text>
            </TouchableOpacity>
          </View>

          {/* Delivery State */}
          {!deliveryStateIsVisible ? null :<View style={{marginHorizontal: 20, marginTop: 15}}>
              <SelectDropdown 
                 buttonStyle={{height: 50, width: '100%', backgroundColor: 'white'}}
                  buttonTextStyle={{fontSize: 15, textAlign: 'justify', color: 'black'}}
                  rowStyle={{backgroundColor: 'white', borderBottomColor: 'silver'}}
                  rowTextStyle={{color: 'black', textAlign: 'justify', fontSize: 15}}
                  data={StateData}
                  defaultButtonText={"Select"}
                  dropdownIconPosition={'right'}
                  renderDropdownIcon={selectedState => {return <Icons name={selectedState ? 'caret-down-outline' : 'caret-up-outline'} color={'#444'} size={14} /> }}
                  onSelect={(item) => {setSelectedState(item)}}
              />
          </View>}

        {/* Mode of Transaction */}
        <Text style={{marginHorizontal: 30, color: 'black', fontWeight: '600', marginTop: 30}}>Mode of Txn</Text>
        <View style={{marginHorizontal: 30}}>

            {/* Cash */}
           <View style={{flexDirection: 'row'}}>
           <RadioButton 
                value='Cash'
                color='#008AD0'
                status={checked == 'Cash' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Cash')}
           />
           <Text style={{color: 'black', fontWeight: '400', marginTop: 7}}>Cash</Text>
           </View>
          
          {/* Cheque */}
          <View style={{flexDirection: 'row'}}>
          <RadioButton 
                value='Cheque'
                color='#008AD0'
                status={checked == 'Cheque' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Cheque')}
           />
           <Text style={{color: 'black', fontWeight: '400', marginTop: 7}}>Cheque</Text>
          </View>
          
          {/* Upi/NetBanking */}
          <View style={{flexDirection: 'row'}}>
          <RadioButton 
                value='Upi'
                color='#008AD0'
                status={checked == 'Upi' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Upi')}
           />
           <Text style={{color: 'black', fontWeight: '400', marginTop: 7}}>Upi/ Net_banking/ Paytm</Text>
          </View>
        </View>

       
        {/* Cheque Payment */}
       {checked == 'Cash' ? null :<View>
       {checked == 'Upi' ? null : <View style={{marginHorizontal: 20, marginTop: 15}}>
           <TextInput 
                style={styles.chequeStyle}
                placeholder='Cheque Number'
                value={chequeNo}
                onChangeText={(Text) => setChequeNo(Text)}
           />  
           <TextInput 
                style={styles.amountStyle}
                keyboardType='default'
                placeholder='Cheque Amount'
                value={transactionAmount}
                onChangeText={(chequeAmount) => setChequeAmount(chequeAmount)}
             />     
        </View>}
        </View>}

         {/* NetBanking Payment */}
        {checked == 'Cash'? null : <View>
        {checked == 'Cheque' ? null : <View style={{marginHorizontal: 20, marginTop: 15}}>
           <TextInput 
                style={styles.chequeStyle}
                placeholder='Transaction Number'
                value={transactionNo}
                onChangeText={(Text) => setTransactionNo(Text)}
           />  
           <TextInput 
                style={styles.amountStyle}
                keyboardType='default'
                placeholder='Transaction Amount'
                value={transactionAmount}
                onChangeText={(transactionAmount) => setTransactionAmount(transactionAmount)}
             />    
        </View>}
         </View>}

        {/* Cash Payment */}
        {checked == 'Cheque' ? null :<View style={{marginHorizontal: 20, marginTop: 15}}>
            {checked == 'Upi'  ? null:<View>
             <TextInput 
                style={styles.amountStyle}
                keyboardType='default'
                placeholder='Total Amount'
                value={totalAmount}
                onChangeText={(Text) => setTotalAmount(Text)}
             /> 
             </View>}
          </View>}

        {/* Invoice Notes */}
        <TouchableOpacity style={styles.invoiceNotes} onPress={()=> setIsVisibleInvoice(!isVisibleInvoice)}>
          <Icons name='reader-outline' color='#008AD0' size={15} style={{margin: 5}}/>
          <Text style={styles.invoiceNotesText}>Notes</Text>
        </TouchableOpacity>

        {/* Invoice Notes Text */}
        {!isVisibleInvoice ? null :<View style={{marginHorizontal: 20, marginTop: 15, marginBottom: 200}}>
          <TextInput 
            style={styles.notesTextInput}
            keyboardType='default'
            multiline={true}
            value={invoiceNotes}
            onChangeText={(Text) => setInvoiceNotes(Text)}
          />
        </View>}
      </ScrollView>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} 
            onPress={() => [handleSaveButton(), navigation.navigate('Money Out List')]}>
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
  mainView: {
    marginHorizontal: 20, 
    marginTop: 30,
  },
  calenderDate: {
    backgroundColor:'white', 
    width: 180, 
    height: 40, 
    paddingTop: 11, 
    paddingLeft: 10,
  },
  invoiceNotes: {
    backgroundColor: 'white', 
    height: 25, 
    alignSelf: 'flex-end', 
    marginRight: 24, 
    marginTop: 15, 
    width: 80,
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
    marginTop: 34
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
  amountStyle: {
    backgroundColor: 'white',
    width: 150, 
    height: 40,
    marginTop: 10,
  },
  chequeStyle: {
      backgroundColor: 'white',
      width: '100%',
      paddingLeft: 10,
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
})