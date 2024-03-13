import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import {useDispatch} from 'react-redux';
import {expense} from '../redux/reducerSlice.js/ExpenceSlice';

const selectedDataField = [
  'Select',
  'Add Category',
  'Accounting Fees',
  'Annual Maintenance charge',
  'Consulting Charges',
  'Education and Training',
  'Employee Salary',
  'Fuel',
  'Insurance',
  'Interest Expense',
  'Legal Charges',
  'Marketing',
  'Meals and Entertainment',
  'Miscellaneous Expense',
  'Office Supply',
  'Payment Processing Fees',
  'Phone and Internet',
  'Power and Utility',
  'Refund from Vendor',
  'Rent',
  'Repair and Maintenance',
  'Subscriptions',
  'Transfer to own account',
  'Others',
];
export default function AddExpense({navigation}) {
  const [expenseNo, setExpenseNo] = useState(null);
  const [expenseDate, setExpenseDate] = useState(null);
  const [billingTerms, setBillingTerms] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [invoiceNotes, setInvoiceNotes] = useState('');
  const [isVisibleInvoice, setIsVisibleInvoice] = useState(false);

  const dispatch = useDispatch();

  // SHOW DATE
  useEffect(() => {
    let today = new Date();
    let date =
      today.getDate() + '/' + today.getMonth() +  '/' + today.getFullYear();
    setExpenseDate(date);
    let expId = 'Exp_' + new Date().getTime();
    setExpenseNo(expId);
  }, []);         

  // HANDLE SAVE BUTTON
  const handleSaveButton = () => {
    // console.log('Save Data =>', expenseNo, expenseDate, billingTerms, totalAmount, amountPaid, invoiceNotes);
    dispatch(
      expense({
        expenseNo,
        expenseDate,
        billingTerms,
        totalAmount,
        amountPaid,
        invoiceNotes,
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* EXPENSE NUMBER */}
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row'}}>
            <Text>Expense Number</Text>
            <Text style={{marginLeft: 100}}>Date</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                width: 180,
                backgroundColor: 'white',
                height: 40,
                marginRight: 10,
              }}
              value={expenseNo}
              onChangeText={Text => setExpenseNo(Text)}
            />
            <TouchableOpacity style={styles.calenderDate}>
              <Text>{expenseDate}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CATEGORY */}
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.categoryStyle}>
              <Text style={{color: 'black', fontWeight: '600'}}>Category</Text>
            </View>
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
              data={selectedDataField}
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
          </View>
        </View>

        {/* RECEIVED AND DELIVERY VIEW */}
        <View style={styles.mainView}>
          <TouchableOpacity
            style={styles.customerNameButton}
            onPress={() => navigation.navigate('AddCustomerToBill')}>
            <Text style={{color: 'black'}}>Customer Name/Contact Person</Text>
          </TouchableOpacity>
        </View>

        {/* TOTAL AMOUNT */}
        <View style={styles.cashView}>
          <View style={styles.cashTextView}>
            <Text style={styles.cashTextStyle}>Total Amount</Text>
          </View>
          <TextInput
            style={styles.cashTextInput}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="black"
            value={totalAmount}
            onChangeText={Text => setTotalAmount(Text)}
          />
        </View>

        {/* AMOUNT PAID */}
        <View style={styles.cashView}>
          <View style={styles.cashTextView}>
            <Text style={styles.cashTextStyle}>Amount Paid</Text>
          </View>
          <TextInput
            style={styles.cashTextInput}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="black"
            value={amountPaid}
            onChangeText={Text => setAmountPaid(Text)}
          />
        </View>

        {/* INVOICE NOTES */}
        <TouchableOpacity
          style={styles.invoiceNotes}
          onPress={() => setIsVisibleInvoice(!isVisibleInvoice)}>
          <Icons
            name="reader-outline"
            color="#008AD0"
            size={15}
            style={{margin: 5}}
          />
          <Text style={styles.invoiceNotesText}>Notes</Text>
        </TouchableOpacity>

        {/* INVOICE VOICE TEXT */}
        {!isVisibleInvoice ? null : (
          <View
            style={{marginHorizontal: 20, marginTop: 15, marginBottom: 150}}>
            <TextInput
              style={styles.notesTextInput}
              keyboardType="default"
              multiline={true}
              value={invoiceNotes}
              onChangeText={Text => setInvoiceNotes(Text)}
            />
          </View>
        )}
      </ScrollView>

      {/* SAVE BUTTON */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => [
          handleSaveButton(),
          navigation.navigate('Expense List'),
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
  categoryStyle: {
    backgroundColor: '#D9E4Ec',
    width: 180,
    marginRight: 10,
    height: 40,
    paddingTop: 11,
    paddingLeft: 10,
  },
  cashView: {
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
  },
  cashTextView: {
    backgroundColor: 'white',
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
    width: 80,
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
