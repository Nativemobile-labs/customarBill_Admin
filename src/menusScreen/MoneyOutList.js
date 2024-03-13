import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
const PickerData = [
  'Month',
  'Year',
  'Custom',
  'Last 7 Days',
  'Today',
  'Last 30 Days',
];
export default function MoneyOutList({navigation}) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  
  // SHOW DATE
  useEffect(() => {
    let today = new Date();
    let date =
      today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
    setStartDate(date);
    setEndDate(date);
  }, []);
  const MoneySlice = useSelector((state) => state.moneyOutSlice)
  let addMoney = MoneySlice.totalAmount
  const count = MoneySlice.value += 1 


  const renderItem = ({item}) => {
    return (
      <View
        style={{
          marginHorizontal: 15,
          backgroundColor: 'white',
          marginTop: 8,
          borderRadius: 5,
          height: 120,
        }}>
        <TouchableOpacity onPress={() => alert('show invoice')}
          style={{
            borderColor: 'blue',
            position: 'absolute',
            borderWidth: 1,
            borderRadius: 5,
            left: 10,
            top: 10,
            height: 23,
            width: 'auto',
            paddingLeft: 5,
            paddingRight: 15,
            borderStyle: 'dashed',
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            {item.Name}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 12,
            position: 'absolute',
            right: 80,
            top: 10,
          }}>
          {item.Invoice_No}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            position: 'absolute',
            right: 75,
            top: 8,
          }}>
          |
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 12,
            position: 'absolute',
            right: 10,
            top: 10,
          }}>
          {item.Date}
        </Text>
        <Text
          style={{
            color: 'blue',
            fontSize: 14,
            position: 'absolute',
            fontWeight: '600',
            left: 10,
            top: 35,
          }}>
          Rs:{item.Price}
        </Text>
          <TouchableOpacity style={{
            position: 'absolute',
            right: 20,
            top: 40,
            borderWidth: 1,
            borderColor: 'green',
            borderRadius: 15,
            paddingLeft: 8,
            paddingRight: 8,
            paddingBottom: 2,
            paddingTop: 1,
           
          }}
          onPress={() => alert('print & View')}
          >
            <Text style={{color: 'blue', fontSize: 12}}>View & Print</Text>
          </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            left: 10,
            top: 60,
            borderWidth: 1,
            borderColor: 'green',
            borderRadius: 5,
            paddingLeft: 2,
            paddingRight: 3,
            paddingBottom: 1,
          }}>
          <Text
            style={{
              color: 'green',
              fontSize: 12,
            }}>
            {item.Payment}
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 12,
            position: 'absolute',
            left: 10,
            top: 90,
          }}>
          {item.message}
        </Text>
      </View>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerMainView}>
          {/* DROPDOWN LIST */}
          <SelectDropdown
            buttonStyle={styles.dropdownButton}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowText}
            data={PickerData}
            defaultButtonText={'Year'}
            renderDropdownIcon={isOpened => {
              return (
                <Icons
                  name={isOpened ? 'caret-down-outline' : 'caret-up-outline'}
                  color={'#444'}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={'right'}
          />
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => Alert.alert('select start Date')}>
            <Text style={styles.dateText}>{startDate}</Text>
          </TouchableOpacity>
          <Text style={styles.to}> To</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => Alert.alert('select End Date')}>
            <Text style={styles.dateText}>{endDate}</Text>
          </TouchableOpacity>
        </View>
        {/* AMOUNT COUNTER */}
        <View style={styles.innerMainView}>
          <View style={styles.amountView}>
            <Text style={styles.amountText}>Amount</Text>
            <Text
              style={{
                color: 'blue',
                fontWeight: 'bold',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              {'\u20B9'}
              {addMoney}
            </Text>
          </View>
          <View style={styles.amountView}>
            <Text style={styles.amountText}>Count</Text>
            <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              {count}
            </Text>
          </View>
        </View>
        <View style={{height: '100%', marginBottom: 200}}>
        <FlatList data={SaleListData} renderItem={renderItem} />
      </View>
      </ScrollView>
      
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddMoneyOut')}>
          <Icons
            name="add-circle-outline"
            size={30}
            color="white"
            style={styles.iconStyle}
          />
          <Text style={styles.addText}>Add Money Out</Text>
        </TouchableOpacity> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  innerMainView: {
    marginTop: 30,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dateButton: {
    backgroundColor: 'white',
    marginLeft: 10,
    height: 50,
    width: 110,
    borderRadius: 5,
  },
  dateText: {
    marginTop: 15,
    marginLeft: 8,
    color: 'black',
    fontWeight: '600',
  },
  to: {
    marginTop: 18,
    marginLeft: 5,
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  amountView: {
    height: 70,
    width: 180,
    borderRadius: 8,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
  },
  amountText: {
    alignSelf: 'center',
    marginTop: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#008AD0',
    height: 40,
    width: 165,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  addText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 4,
  },
  iconStyle: {
    marginLeft: 15,
    marginTop: 3,
  },
  dropdownButton: {
    width: 110,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  dropdownRowStyle: {
    backgroundColor: 'white',
    borderBottomColor: 'silver',
  },
  dropdownRowText: {
    color: 'black',
    textAlign: 'left',
    fontWeight: '400',
  },
});


const SaleListData = [
  {
    Name: 'Abc',
    Invoice_No: 'Inv_001',
    Date: '10/12/2022',
    Price: '5000',
    Payment: 'Paid',
    message: 'Created By Admin',
  },
  {
    Name: 'fdss',
    Invoice_No: 'Inv_002',
    Date: '08/08/2022',
    Price: '5000',
    Payment: 'Paid',
    message: 'Created By Admin',
  },
  {
    Name: 'Abfsc',
    Invoice_No: 'Inv_003',
    Date: '15/06/2022',
    Price: '5000',
    Payment: 'Paid',
    message: 'Created By Admin',
  },
  {
    Name: 'Asfsbcdfsafsafafasasfasfas',
    Invoice_No: 'Inv_004',
    Date: '12/10/2022',
    Price: '50030',
    Payment: 'Paid',
    message: 'Created By Admin',
  },
  {
    Name: 'Abc',
    Invoice_No: 'Inv_001',
    Date: '10/12/2022',
    Price: '5000',
    Payment: 'Paid',
    message: 'Created By Admin',
  },
  {
    Name: 'fdss',
    Invoice_No: 'Inv_002',
    Date: '08/08/2022',
    Price: '5000',
    Payment: 'Paid',
    message: 'Created By Admin',
  },
  {
    Name: 'Abfsc',
    Invoice_No: 'Inv_003',
    Date: '15/06/2022',
    Price: '5000',
    Payment: 'Paid',
    message: 'Created By Admin',
  },
  {
    Name: 'Asfsbcdfsafsafafasasfasfas',
    Invoice_No: 'Inv_004',
    Date: '12/10/2022',
    Price: '50030',
    Payment: 'Paid',
    message: 'Created By Admin',
  },
  {
    Name: 'Abc',
    Invoice_No: 'Inv_001',
    Date: '10/12/2022',
    Price: '5000',
    Payment: 'Paid',
    message: 'Created By Admin',
  },
  {
    Name: 'fdss',
    Invoice_No: 'Inv_002',
    Date: '08/08/2022',
    Price: '5000',
    Payment: 'Paid',
    message: 'Created By Admin',
  },
  {
    Name: 'Abfsc',
    Invoice_No: 'Inv_003',
    Date: '15/06/2022',
    Price: '5000',
    Payment: 'Paid',
    message: 'Created By Admin',
  },
  {
    Name: 'Asfsbcdfsafsafafasasfasfas',
    Invoice_No: 'Inv_004',
    Date: '12/10/2022',
    Price: '50030',
    Payment: 'Paid',
    message: 'Created By Admin',
  },
];