import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import Icons from 'react-native-vector-icons/Ionicons';

export default function ProfitAndLossStatement() {
const [startDate, setStartDate]= useState();
const [endDate, setEndDate] = useState()
  // Show Date
  useEffect(() => {
    let today = new Date();
    let date = today.getDate()+ '/'+ today.getMonth()+1+'/'+ today.getFullYear();
    setStartDate(date);
    setEndDate(date);
    
  }, []);
  return (
    <SafeAreaView style={styles.Container}>

    {/* select Date */}
      <View style={styles.mainView}>
        <Icons name='calendar' size={30} color='black'/>
        <Text style={styles.from}>From </Text>
        <TouchableOpacity style={styles.startDateButton}>
          <Text style={styles.startDateText}>{startDate}</Text>
        </TouchableOpacity>
        <Text style={styles.to}> To</Text>
        <TouchableOpacity style={styles.startDateButton}>
          <Text style={styles.startDateText}>{endDate}</Text>
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
          <Text style={styles.boldFont}>Sale (+)</Text>
          <Text style={styles.dataText}>₹0.00</Text>
        </View>
        <View style={styles.dataList}> 
          <Text style={styles.boldFont}>Purchase (-)</Text>
          <Text style={styles.dataText}>₹0.00</Text>
        </View>
        <View style={styles.dataList}> 
          <Text style={styles.boldFont}>Sale Return Amount</Text>
          <Text style={styles.dataText}>₹0.00</Text>
        </View>
        <View style={styles.dataList}> 
          <Text style={styles.boldFont}>Purchase Return Amount (+)</Text>
          <Text style={styles.dataText}>₹0.00</Text>
        </View>
        <View style={styles.dataList}> 
          <Text style={styles.boldFont}>Indirect Expense (-)</Text>
          <Text style={styles.dataText}>₹0.00</Text>
        </View>
        <View style={styles.dataList}> 
          <Text style={styles.boldFont}>Tax Payable (-)</Text>
          <Text style={styles.dataText}>₹0.00</Text>
        </View>
        <View style={styles.dataList}> 
          <Text style={styles.boldFont}>Tax Receivable (+)</Text>
          <Text style={styles.dataText}>₹0.00</Text>
        </View>
        <View style={styles.dataList}> 
          <Text style={styles.boldFont}>Opening Stock Value</Text>
          <Text style={styles.dataText}>₹0.00</Text>
        </View>
        <View style={styles.dataList}> 
          <Text style={styles.boldFont}>Opening Stock value</Text>
          <Text style={styles.dataText}>₹0.00</Text>
        </View>
      </View>
      <Text style={styles.drawLine}>____________________________________________________________</Text>

      {/* Net Profit */}
      <View style={{marginLeft: 20,}}>
        <Text style={{color: 'green', fontWeight: 'bold'}}>Net Profit</Text>
        <Text style={{color: 'green', alignSelf: 'flex-end', marginRight: 35, marginTop: -18, fontWeight: 'bold'}}>₹0.00</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  mainView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 40,
  },
  from: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    marginTop: 5,
  },
  startDateButton: {
    height: 30,
    width: 100,
    borderRadius: 1,
    backgroundColor: 'white',
    marginLeft: 15,
  },
  startDateText: {
    marginTop: 4,
  },
  to: {
    color: 'black',
    marginLeft: 10,
    marginTop: 5,

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
    alignSelf: 'flex-end',
    marginRight: 35,
    marginTop: -18
  },
  drawLine: {
    alignSelf: 'center',
  },
  boldFont: {
    fontWeight: 'bold',
  },
});