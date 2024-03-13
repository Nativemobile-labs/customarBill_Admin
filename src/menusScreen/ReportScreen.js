import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const PickerData = [
  'Month',
  'Year',
  'Custom',
  'Last 7 Days',
  'Today',
  'Last 30 Days',
];
export default function ReportScreen({navigation}) {
  const [isVisible, setIsVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  
  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  // SHOW DATE
  useEffect(() => {
    let today = new Date();
    let date =
      today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
    setStartDate(date);
    setEndDate(date);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.mainView}>
        {/* GSTR REPORTS */}
        <Text style={styles.headingText}>GSTR Reports</Text>
        {/* CREATE MODAL */}
        <Modal
          animationType="slide"
          visible={isVisible}
          transparent={true}
          onRequestClose={() => setIsVisible(!isVisible)}>
          <View style={styles.innerModalView}>
            <Text style={styles.modalTitles}>Please Select Dates</Text>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>

              {/* DROPDOWN */}
              <SelectDropdown
                buttonStyle={styles.dropdownButton}
                rowStyle={styles.dropdownRowStyle}
                rowTextStyle={styles.dropdownRowText}
                data={PickerData}
                defaultButtonText={'Year'}
                renderDropdownIcon={isOpened => {
                  return (
                    <Icons
                      name={
                        isOpened ? 'caret-down-outline' : 'caret-up-outline'
                      }
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
              />

              {/* SELECTED DATE */}
              <TouchableOpacity style={styles.yearStyle} onPress={() => alert('start date')}>
                <Text style={styles.dateText}>{startDate}</Text>
                <DateTimePickerModal 
                  date={startDate}
                  isVisible={datePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </TouchableOpacity>
               
              <Text style={styles.to}>To</Text>

              <TouchableOpacity style={styles.yearStyle} onPress={() => alert('end start')}>
                <Text style={styles.dateText}>{endDate}</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 20}}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => setIsVisible(false)}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setIsVisible(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>GSTR-1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>GSTR-2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>GSTR-3b</Text>
        </TouchableOpacity>

        {/* BUSINESS REPORTS */}
        <Text style={styles.headingText}>Business Reports</Text>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => navigation.navigate('ProfitAndLoss')}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Profit And Loss Statement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => navigation.navigate('DayBook')}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Day Book Report</Text>
        </TouchableOpacity>

        {/* TRANSACTION REPORTS */}
        <Text style={styles.headingText}>Transaction Reports</Text>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Sale Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>
            Sale Wise Profit And Loss Statement
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Purchase Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Sale Return Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Purchase Return Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Money In Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Money Out Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Order Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Sale Person Wise Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>
            Sale Person Wise MoneyIn Report
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Expense Category Wise Report</Text>
        </TouchableOpacity>
        {/* Party Reports */}
        <Text style={styles.headingText}>Party Reports</Text>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => navigation.navigate('Party List')}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Party Ledger</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => Alert.alert('Downloading')}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>
            Party Receivable/Payable Report
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => navigation.navigate('Party List')}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>
            Pending Invoice for Customers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => Alert.alert('Downloading')}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Party Details Report</Text>
        </TouchableOpacity>
        {/* ITEM/STOCK REPORTS */}
        <Text style={styles.headingText}>Item/Stock Reports</Text>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => Alert.alert('Downloading')}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Stock Summary Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Item Sale Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => navigation.navigate('ItemReport')}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Item Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => setIsVisible(true)}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Item Order Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => Alert.alert('Downloading')}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Barcode File Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textView}
          onPress={() => Alert.alert('Downloading')}>
          <Icons
            name="newspaper-outline"
            size={18}
            color="#e47200"
            style={styles.icons}
          />
          <Text style={styles.selectiveText}>Items Details Report</Text>
        </TouchableOpacity>
        <View style={{marginBottom: 200}}>
          {/* <Text>margin Bottom</Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  mainView: {
    width: '88%',
    height: '100%',
    marginTop: 10,
    backgroundColor: '#D9E4EC',
    alignSelf: 'center',
  },
  headingText: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  icons: {
    marginTop: 10,
    marginLeft: 15,
  },
  textView: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  selectiveText: {
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
  },
  innerModalView: {
    marginTop: 200,
    position: 'absolute',
    backgroundColor: 'gray',
    width: '95%',
    height: '29%',
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitles: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 10,
  },
  yearStyle: {
    marginTop: 15,
    height: 50,
    borderRadius: 5,
    marginLeft: 15,
    width: 90,
    backgroundColor: 'white',
  },
  dateText: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 17,
    alignSelf: 'center'
  },
  to: {
    marginTop: 30,
    marginLeft: 15,
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
  },
  submitButton: {
    borderRadius: 5,
    height: 40,
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#008AD8',
  },
  cancelButton: {
    borderRadius: 5,
    height: 40,
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
  cancelText: {
    color: '#008AD8',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
  dropdownButton: {
    width: 110,
    height: 50,
    marginTop: 15,
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
