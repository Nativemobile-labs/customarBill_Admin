import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import {useSelector} from 'react-redux';

export default function CashBook() {
  const [selectData, setSelectData] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endData, setEndData] = useState('');
  const selectTerms = [
    'Month',
    'Year',
    'Custom',
    'Last 7 Days',
    'Today',
    'Last 30 Days',
  ];

  // Show Date
  useEffect(() => {
    let today = new Date();
    let date =
      today.getDate() + '/' + today.getMonth() + 1 + '/' + today.getFullYear();
    setStartDate(date);
    setEndData(date);
  }, []);

  const bookAddSlice = useSelector((state) => state.moneyInSlice)
  const amountResult = bookAddSlice.totalAmount + bookAddSlice.transactionAmount + bookAddSlice.chequeAmount
  // const bookOutSlice = useSelector((state) => state.moneyOutSlice)
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View>
          {/* horizontal Scroll */}
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                marginHorizontal: 20,
              }}>
              {/* Total */}
              <TouchableOpacity style={styles.cardStyle}>
                <Text style={styles.textHeading}>Total</Text>
                <Text style={styles.textRupee}>₹ 0.00</Text>
              </TouchableOpacity>

              {/* Cash   */}
              <TouchableOpacity style={styles.cardStyle}>
                <Text style={styles.textHeading}>Cash</Text>
                <Text style={styles.textRupee}>₹ {bookAddSlice.totalAmount} </Text>
              </TouchableOpacity>

              {/* Bank */}
              <TouchableOpacity style={styles.cardStyle}>
                <Text style={styles.textHeading}>Bank</Text>
                <Text style={styles.textRupee}>₹ {bookAddSlice.transactionAmount} </Text>
              </TouchableOpacity>

              {/* Cheque */}
              <TouchableOpacity style={styles.cardStyle}>
                <Text style={styles.textHeading}>Cheque</Text>
                <Text style={styles.textRupee}>₹ {bookAddSlice.chequeAmount}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* select Date */}
        <View
          style={{flexDirection: 'row', marginTop: 30, marginHorizontal: 20}}>
          <SelectDropdown
            buttonStyle={{
              height: 40,
              width: 110,
              marginLeft: 10,
              backgroundColor: 'white',
              borderRadius: 5,
            }}
            buttonTextStyle={{
              fontSize: 15,
              textAlign: 'justify',
              color: 'black',
            }}
            rowStyle={{backgroundColor: 'white', borderBottomColor: 'silver'}}
            rowTextStyle={{color: 'black', textAlign: 'justify', fontSize: 15}}
            data={selectTerms}
            defaultButtonText={'Today'}
            dropdownIconPosition={'right'}
            renderDropdownIcon={selectData => {
              return (
                <Icons
                  name={selectData ? 'caret-down-outline' : 'caret-up-outline'}
                  color={'#444'}
                  size={14}
                />
              );
            }}
            onSelect={item => {
              setSelectData(item);
            }}
          />
          <TextInput
            style={styles.dateStyle}
            value={startDate}
            onChangeText={() => setStartDate(Text)}
          />
          <Text style={styles.to}> To </Text>
          <TextInput
            style={styles.dateStyle}
            value={endData}
            onChangeText={() => setEndData(Text)}
          />
        </View>

        {/* credit and Debit List */}
        <View
          style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 15,
                width: 15,
                backgroundColor: 'green',
                borderRadius: 5,
                marginTop: 2,
              }}
            />
            <Text style={{marginLeft: 10, color: 'black', fontWeight: '600'}}>
              Debit Amount
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 15,
                width: 15,
                backgroundColor: 'red',
                borderRadius: 5,
                marginTop: 2,
                marginLeft: 15,
              }}
            />
            <Text style={{marginLeft: 10, color: 'black', fontWeight: '600'}}>
              Credit Amount
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  cardStyle: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    height: 60,
    width: 150,
    backgroundColor: 'white',
    marginLeft: 10,
  },
  textHeading: {
    color: 'black',
    marginLeft: 10,
    marginTop: 5,
    fontWeight: '600',
  },
  textRupee: {
    color: '#008AD0',
    marginLeft: 10,
    marginTop: 3,
    fontWeight: '600',
  },
  dateStyle: {
    backgroundColor: 'white',
    height: 40,
    width: 115,
    borderRadius: 5,
    paddingLeft: 10,
    color: 'black',
    fontWeight: '600',
  },
  to: {
    color: 'black',
    marginTop: 10,
    fontWeight: '700',
  },
});
