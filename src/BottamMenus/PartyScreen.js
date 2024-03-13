import {StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView, Linking} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalSelector from 'react-native-modal-selector';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

// import data from '../arrayData/ArrayData';

const data = [
  {key: 1, label: 'All'},
  {key: 2, label: 'Receivable'},
  {key: 3, label: 'Payable'},
  {key: 4, label: 'Customer'},
  {key: 5, label: 'Supplier'},
  {key: 6, label: 'Shubham'},
];

export default function PartyScreen({navigation}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  console.log(selectedDate)

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };


  // RENDER ITEM LIST
  const renderItems = ({item}) => {
    return(
      <TouchableOpacity
      onPress={() => alert('open list')}
      style={styles.listButton}>
      <Text style={{color: 'black', paddingLeft: 15, marginTop: 5}}>
        {item.name}
      </Text>
      <TouchableOpacity
        onPress={() => Linking.openURL(`tel:${item.Phone}`)}
        size={30}
        style={{position: 'absolute', right: 110, marginTop: 10}}>
        <Icon name="call" color={'#ffa505'} size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('whatsapp://send?text=hello&phone=item.Phone')}
        style={{position: 'absolute', right: 60, marginTop: 10}}>
        <Icon name="logo-whatsapp" color={'green'} size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => showDatePicker()}
        style={{position: 'absolute', right: 15, marginTop: 10}}>
        <Icon name="calendar" color={'#ffa505'} size={30} />
      </TouchableOpacity>
      <DateTimePickerModal
          date={selectedDate}
          isVisible={datePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
    </TouchableOpacity>
    )
  }

      
  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.dropdownView}>
        {/* dropdown modal selector */}
        <ModalSelector
          selectStyle={styles.unselectButton}
          selectTextStyle={{color: 'white', fontWeight: '600'}}
          selectedItemTextStyle={{color: 'black'}}
          optionTextStyle={{color: '#008AD8'}}
          optionContainerStyle={{backgroundColor: 'white'}}
          cancelTextStyle={{color: 'black'}}
          initValueTextStyle={{color: 'white', fontWeight: '600'}}
          data={data}
          touchableActiveOpacity={0.2}
          initValue="Select"
          cancelText={'Unselect'}
          // onChange={(option)=>{ alert(`${option.label}`) }}
          supportedOrientations={['portrait']}
          animationType="none"
          backdropPressToClose={true}
          scrollViewAccessible={true}
        />
        <TouchableOpacity
          style={styles.selectedButton}
          onPress={() => navigation.navigate('PartyCategory')}>
          <Text style={styles.unselectText}>Party Tags</Text>
        </TouchableOpacity>
      </View>

    <View style={{marginTop: 15, marginBottom: 200}}>
    <FlatList 
      data={partyListData}
      renderItem={renderItems}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      />
    </View>
      </ScrollView>
      {/* ADD CUSTOMER/PARTY */}
      <TouchableOpacity
        onPress={() => navigation.navigate('AddCustomer')}
        style={styles.addCustomerButton}>
        <Icon
          name="add-circle"
          size={25}
          color="white"
          style={{paddingTop: 12, paddingLeft: 17}}
        />
        <Text style={styles.addCustomerText}>Add Customer/Party</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  dropdownView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  unselectText: {
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
    paddingTop: 9,
  },
  unselectButton: {
    backgroundColor: '#008AD8',
    marginTop: 20,
    height: 40,
    width: 170,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 15,
  },
  selectedButton: {
    backgroundColor: 'white',
    marginTop: 20,
    height: 40,
    width: 170,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 15,
  },
  addCustomerButton: {
    backgroundColor: '#008AD8',
    marginTop: 660,
    alignSelf: 'center',
    height: 50,
    width: 200,
    borderRadius: 30,
    position: 'absolute',
    flexDirection: 'row',
  },
  addCustomerText: {
    marginTop: 15,
    color: 'white',
    fontWeight: '600',
  },
  listButton: {
    backgroundColor: 'white',
    height: 50,
    marginTop: 8,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});

const partyListData = [
  {
    id: 1,
    "name": "DataList_1",
    "Phone": "8193931712",
    "whatsapp": "23123123123",
    "PaymentDate" : "13/6/23"
  },
  {
    id: 2,
    "name": "DataList_2",
    "Phone": "546456465456465",
    "whatsapp": "23123123123",
    "PaymentDate" : "13/6/23"
  },
  {
    id: 3,
    "name": "DataList_3",
    "Phone": "546456465456465",
    "whatsapp": "23123123123",
    "PaymentDate" : "13/6/23"
  },
  {
    id: 4,
    "name": "DataList_4",
    "Phone": "546456465456465",
    "whatsapp": "23123123123",
    "PaymentDate" : "13/6/23"
  },
  {
    id: 5,
    "name": "DataList_5",
    "Phone": "546456465456465",
    "whatsapp": "23123123123",
    "PaymentDate" : "13/6/23"
  },
  {
    id: 6,
    "name": "DataList_6",
    "Phone": "546456465456465",
    "whatsapp": "23123123123",
    "PaymentDate" : "13/6/23"
  },
  {
    id: 7,
    "name": "DataList_7",
    "Phone": "546456465456465",
    "whatsapp": "23123123123",
    "PaymentDate" : "13/6/23"
  },
]
