import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert} from 'react-native'
import React, {useState, useEffect} from 'react'
// import {Picker} from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown';
import Icons from 'react-native-vector-icons/Ionicons';
// import PickerData from '../arrayData/ArrayData';

export default function DayBookReport() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(); 
  // const [choosenLabel, setChoosenLabel] = useState('Year');
  const PickerData = ["Month", "Year", "Custom", "Last 7 Days", "Today", "Last 30 Days"];

  // Show Date
  useEffect(() => {
    let today = new Date();
    let date = today.getDate()+ '/'+ today.getMonth()+'/'+ today.getFullYear();
    setStartDate(date);
    setEndDate(date);
    
  }, []);
  return (
    <SafeAreaView style={styles.Container}>
    {/* select Date */}
      <View style={styles.innerMainView}>
        {/* <Picker  
            style={styles.pickerStyle}
            selectedValue={choosenLabel} 
            onValueChange={(itemValue) => {
            setChoosenLabel(itemValue);
         }}>
          <Picker.Item label="Month" value="Month" />
          <Picker.Item label="Year" value="Year" />
          <Picker.Item label="Custom" value="Custom" />
          <Picker.Item label="Last 7 Days" value="LastDays" />
          <Picker.Item label="Today" value="Today" />
          <Picker.Item label="Last 30 Days" value="30Days" />
        </Picker> */}

        {/* Dropdown List */}
         <SelectDropdown 
                buttonStyle={styles.dropdownButton}
                rowStyle={styles.dropdownRowStyle}
                rowTextStyle={styles.dropdownRowText}
                data={PickerData}
                defaultButtonText={"Year"}
                renderDropdownIcon={isOpened => {
                    return <Icons name={isOpened ? 'caret-down-outline' : 'caret-up-outline'} color={'#444'} size={18} />;
                      }}
                dropdownIconPosition={'right'}
              />
        <TouchableOpacity style={styles.dateButton}>
           <Text style={styles.dateText}>{startDate}</Text>
        </TouchableOpacity> 
        <Text style={styles.to}> To</Text>
        <TouchableOpacity style={styles.dateButton}>
           <Text style={styles.dateText}>{endDate}</Text>
        </TouchableOpacity> 
      </View>
                   
    {/* headings */}
        <View style={styles.titleMainView}>
            <View style={styles.titleView}>
              <Text style={styles.titleText}>Particulars</Text>
            </View>
            <View style={styles.titleView}>
               <Text style={styles.titleText}>Amount</Text>
            </View>
        </View>

    {/* show Details */}
       <View>
          <View style={styles.dataList}> 
            <Text style={{fontWeight: 'bold'}}>Sale (+)</Text>
            <Text style={styles.dataText}>₹0.00</Text>
          </View>
          <View style={styles.dataList}> 
             <Text style={{fontWeight: 'bold'}}>Purchase (-)</Text>
             <Text style={styles.dataText}>₹0.00</Text>
          </View>
          <View style={styles.dataList}> 
              <Text style={{fontWeight: 'bold'}}>Sale Return Amount</Text>
              <Text style={styles.dataText}>₹0.00</Text>
          </View>
          <View style={styles.dataList}> 
              <Text style={{fontWeight: 'bold'}}>Purchase Return Amount (+)</Text>
              <Text style={styles.dataText}>₹0.00</Text>
          </View>
          <View style={styles.dataList}> 
              <Text style={{fontWeight: 'bold'}}>Indirect Expense (-)</Text>
              <Text style={styles.dataText}>₹0.00</Text>
          </View>
          <View style={styles.dataList}> 
              <Text style={{fontWeight: 'bold'}}>Tax Payable (-)</Text>
              <Text style={styles.dataText}>₹0.00</Text>
          </View>
          <View style={styles.dataList}> 
              <Text style={{fontWeight: 'bold'}}>Tax Receivable (+)</Text>
             <Text style={styles.dataText}>₹0.00</Text>
          </View>
          <View style={styles.dataList}> 
              <Text style={{fontWeight: 'bold'}}>Opening Stock Value</Text>
              <Text style={styles.dataText}>₹0.00</Text>
          </View>
          <View style={styles.dataList}> 
              <Text style={{fontWeight: 'bold'}}>Opening Stock value</Text>
              <Text style={styles.dataText}>₹0.00</Text>
          </View>
                  
      {/* Download Button */}
          <TouchableOpacity style={styles.downloadButton} onPress={() => Alert.alert('Start downloading')}>
            <Icons name='add-circle-outline' size={25} color='white' style={styles.buttonIcon} />
            <Text style={styles.downloadText}>Download</Text>
          </TouchableOpacity>
       </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  pickerStyle: {
    width: 130,
    height: 40,
    backgroundColor: 'white',
    marginTop: 20,
  },
  innerMainView: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
  },
  to: {
      marginTop: 35,
      marginLeft: 5,
      fontSize: 15,
      fontWeight: 'bold',
  },
  dateButton: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginTop: 20,
    height: 50,
    borderRadius: 5,
    width: 110,
  },
  dateText: {
    marginTop: 15,
    marginLeft: 7,
    color: 'black',
    fontWeight: '600',
  },
  titleMainView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  titleView: {
    backgroundColor: 'silver',
    height: 25,
    width: 180,
    marginLeft: 15,
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: 2,
  },
  dataList: {
    marginLeft: 20,
    marginTop: 10,
  },
  dataText: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginRight: 35,
    marginTop: -18
  },
  downloadButton: {
    flexDirection: 'row',
    backgroundColor: '#008AD0',
    height: 40,
    width: 140,
    alignSelf: 'center',
    borderRadius: 20,
    position: 'absolute',
    marginTop: 560,

  },
  downloadText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 4,
  },
  buttonIcon: {
    marginTop: 5,
    marginLeft: 20,
  },
  dropdownButton: {
    width: 110,
    height: 50,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  dropdownRowStyle: {
    backgroundColor: 'black', 
    borderBottomColor: 'silver',
  },
  dropdownRowText: {
    color: 'white',
    textAlign: 'left',
  },
});