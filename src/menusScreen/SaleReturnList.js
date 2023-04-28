import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

export default function SaleReturnList({navigation}) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const PickerData = [
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
    setEndDate(date);
  }, []);

  const returnSlice = useSelector((state) => state.addSaleReturnSlice)
  const count = returnSlice.value += 1
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.innerMainView}>
          {/* Dropdown List */}
          <SelectDropdown
            buttonStyle={styles.dropdownButton}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowText}
            data={PickerData}
            defaultButtonText={'Year'}
            dropdownIconPosition={'right'}
            renderDropdownIcon={isOpened => {
              return (
                <Icons
                  name={isOpened ? 'caret-down-outline' : 'caret-up-outline'}
                  color={'#444'}
                  size={18}
                />
              );
            }}
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
        {/* amount counter */}
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
              {'\u20B9'}{returnSlice.totalAmount}
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
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('SaleReturnForm')}>
          <Icons
            name="add-circle"
            size={30}
            color="white"
            style={styles.iconStyle}
          />
          <Text style={styles.addText}>Add Sale Return</Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginTop: 495,
    backgroundColor: '#008AD0',
    height: 40,
    width: 180,
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
