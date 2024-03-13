import {
  StyleSheet,
  Text,
  View,
  Switch,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/Ionicons';

export default function DashboardScreen({navigation}) {
  const [toggleValue, setToggleValue] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const ToggleButton = value => {
    setToggleValue(value);
  };

  const [selectedIndex, setSelectedIndx] = useState(0);
  const [reminderDate, setReminderDate] = useState();

  const handleSingleIndexSelect = index => {
    setSelectedIndx(index);
  };

  // Show Date
  useEffect(() => {
    let today = new Date();
    let date =
      today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
    setReminderDate(date);
  }, []);

  const saleSlice = useSelector(state => state.addNewSaleSlice);
  const moneySlice = useSelector(state => state.moneyInSlice);
  const MoneyOutSlice = useSelector(state => state.moneyOutSlice);
  const purchaseSlice = useSelector(state => state.addPurchaseSlice);
  const expSlice = useSelector(state => state.expenseSlice);
  const lowStock = useSelector(state => state.productInventorySlice);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <View style={styles.toggleView}>
          <Text
            style={{
              marginRight: 10,
              color: 'black',
              fontWeight: '600',
              marginTop: 4,
            }}>
            {toggleValue ? 'Privacy On' : 'Privacy Off'}
          </Text>
          <Switch
            onValueChange={() => [ToggleButton, setShowPrivacy(!showPrivacy)]}
            value={toggleValue}
          />
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.ViewText}>Share App</Text>
          <TouchableOpacity style={styles.generateButton}>
            <Text style={styles.generateText}>Generate Shop</Text>
          </TouchableOpacity>
        </View>

        {showPrivacy ? null : (
          <View>
            <View style={{marginHorizontal: 20}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {/* Sale */}
                <TouchableOpacity
                  style={styles.containerView}
                  onPress={() => navigation.navigate('Sale List')}>
                  <Icons
                    name="bar-chart-outline"
                    size={40}
                    color="#ec9006"
                    style={styles.iconStyle}
                  />
                  <View>
                    <Text style={styles.saleText}>Sale</Text>
                    <Text style={styles.amountView}>
                      {'\u20B9'}
                      {saleSlice.totalAmount}
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Order */}
                <TouchableOpacity
                  style={styles.containerView}
                  onPress={() =>
                    navigation.navigate('Order/Quotation/Estimate')
                  }>
                  <Icons
                    name="cart-outline"
                    size={40}
                    color="#ec9006"
                    style={styles.iconStyle}
                  />
                  <View>
                    <Text style={styles.saleText}>Order</Text>
                    <Text style={styles.amountView}>{'\u20B9'}0.00</Text>
                  </View>
                </TouchableOpacity>
                {/* Money In */}
                <TouchableOpacity
                  style={styles.containerView}
                  onPress={() => navigation.navigate('Money In List')}>
                  <Text style={{color: '#ec9006', fontSize: 50, marginLeft: 8}}>
                    {'\u20B9'}
                  </Text>
                  <View>
                    <Text style={styles.saleText}>Money In</Text>
                    <Text style={styles.amountView}>
                      {'\u20B9'}
                      {moneySlice.totalAmount}
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Purchase */}
                <TouchableOpacity
                  style={styles.containerView}
                  onPress={() => navigation.navigate('Purchase List')}>
                  <Icons
                    name="reader-outline"
                    size={40}
                    color="#ec9006"
                    style={styles.iconStyle}
                  />
                  <View>
                    <Text style={styles.saleText}>Purchase</Text>
                    <Text style={styles.amountView}>
                      {'\u20B9'}
                      {purchaseSlice.totalAmount}
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Expense */}
                <TouchableOpacity
                  style={styles.containerView}
                  onPress={() => navigation.navigate('Expense List')}>
                  <Icons
                    name="layers-outline"
                    size={40}
                    color="#ec9006"
                    style={styles.iconStyle}
                  />
                  <View>
                    <Text style={styles.saleText}>Expense</Text>
                    <Text style={styles.amountView}>
                      {'\u20B9'}
                      {expSlice.totalAmount}
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Money Out */}
                <TouchableOpacity
                  style={styles.containerView}
                  onPress={() => navigation.navigate('Money Out List')}>
                  <Text style={{color: '#ec9006', fontSize: 50, marginLeft: 8}}>
                    {'\u20B9'}
                  </Text>
                  <View>
                    <Text style={styles.saleText}>Money Out</Text>
                    <Text style={styles.amountView}>
                      {'\u20B9'}
                      {MoneyOutSlice.totalAmount}
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Visitor */}
                <TouchableOpacity
                  style={styles.containerView}
                  onPress={() =>
                    navigation.navigate('Order/Quotation/Estimate')
                  }>
                  <Icons
                    name="man-outline"
                    size={40}
                    color="#ec9006"
                    style={styles.iconStyle}
                  />
                  <View>
                    <Text style={styles.saleText}>Visitor</Text>
                    <Text style={styles.amountView}>{'\u20B9'}0.00</Text>
                  </View>
                </TouchableOpacity>

                {/* Note Counter */}
                <TouchableOpacity
                  style={styles.containerView}
                  onPress={() => Alert.alert('add screen')}>
                  <Icons
                    name="calculator-outline"
                    size={40}
                    color="#ec9006"
                    style={styles.iconStyle}
                  />
                  <View>
                    <Text style={styles.saleText}>Note Counter</Text>
                    <Text style={styles.amountView}>{'\u20B9'}0.00</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>

            {/* Report Section */}
            <View style={{marginHorizontal: 20}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {/* Report */}
                <TouchableOpacity
                  style={styles.containerView}
                  onPress={() => navigation.navigate('Report')}>
                  <Icons
                    name="stats-chart-outline"
                    size={40}
                    color="#ec9006"
                    style={styles.iconStyle}
                  />
                  <View>
                    <Text style={styles.saleText}>Report</Text>
                    <Text style={styles.StockView}> Check {'\n'} Report</Text>
                  </View>
                </TouchableOpacity>

                {/* Receivable */}
                <TouchableOpacity
                  style={styles.containerView}
                  onPress={() => navigation.navigate('Party List')}>
                  <Icons
                    name="time-outline"
                    size={40}
                    color="#ec9006"
                    style={styles.iconStyle}
                  />
                  <View>
                    <Text style={styles.saleText}>Receivable</Text>
                    <Text style={styles.StockView}>{'\u20B9'}0.00</Text>
                  </View>
                </TouchableOpacity>

                {/* Payable */}
                <TouchableOpacity
                  style={styles.containerView}
                  onPress={() => navigation.navigate('Party List')}>
                  <Icons
                    name="time-outline"
                    size={40}
                    color="#ec9006"
                    style={styles.iconStyle}
                  />
                  <View>
                    <Text style={styles.saleText}>Payable</Text>
                    <Text style={styles.StockView}>{'\u20B9'}0.00</Text>
                  </View>
                </TouchableOpacity>

                {/* Cash Book */}
                <TouchableOpacity
                  style={styles.containerView}
                  onPress={() => navigation.navigate('Cash Book')}>
                  <Icons
                    name="time-outline"
                    size={40}
                    color="#ec9006"
                    style={styles.iconStyle}
                  />
                  <View>
                    <Text style={styles.saleText}>Cash Book</Text>
                    <Text style={styles.StockView}>{'\u20B9'}0.00</Text>
                  </View>
                </TouchableOpacity>

                {/* Low Stock */}
                <TouchableOpacity
                  style={styles.containerView}
                  onPress={() => navigation.navigate('Inventory')}>
                  <Icons
                    name="time-outline"
                    size={40}
                    color="#ec9006"
                    style={styles.iconStyle}
                  />
                  <View>
                    <Text style={styles.saleText}>Low Stock</Text>
                    <Text style={styles.StockView}>
                      {'\u20B9'}
                      {lowStock.lowStockAlert}
                    </Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        )}

        {/* Payment Reminder */}
        <View
          style={{marginHorizontal: 20, marginTop: 15, alignSelf: 'center'}}>
          <Text style={{color: 'black', fontWeight: '600'}}>
            Payment Reminders
          </Text>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <SegmentedControlTab
              values={['Today', 'Tomorrow']}
              selectedIndex={selectedIndex}
              onTabPress={handleSingleIndexSelect}
              tabsContainerStyle={{height: 40, width: 200}}
              tabStyle={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'silver',
              }}
              activeTabStyle={{
                backgroundColor: '#008AD0',
                borderColor: '#008AD0',
              }}
              activeTabTextStyle={{color: 'white'}}
              tabTextStyle={{color: 'black', fontWeight: '600'}}
            />
            {/* {selectedIndex === 0 && (<Text>Today</Text>)}
        {selectedIndex === 1 && (<Text>Tomorrow</Text>)} */}
            <TextInput
              style={{
                backgroundColor: 'white',
                borderColor: 'silver',
                marginLeft: 20,
                borderRadius: 5,
                borderWidth: 1,
                height: 40,
                width: 120,
                paddingLeft: 10,
                color: 'black',
                fontWeight: '600',
              }}
              value={reminderDate}
              onChangeText={() => setReminderDate(Text)}
            />
          </View>
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
  toggleView: {
    alignSelf: 'flex-end',
    marginTop: 10,
    flexDirection: 'row',
    marginRight: 15,
  },
  viewContainer: {
    width: wp('96%'),
    height: hp('9%'),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  ViewText: {
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  generateText: {
    fontWeight: '600',
    color: '#008AD0',
    alignSelf: 'center',
    marginTop: 4,
  },
  generateButton: {
    backgroundColor: '#E7E7E7',
    width: wp('30%'),
    height: hp('3.5%'),
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginEnd: 20,
    marginBottom: 20,
  },
  containerView: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 80,
    width: 150,
    marginLeft: 10,
    flexDirection: 'row',
  },
  iconStyle: {
    marginLeft: 8,
    marginTop: 15,
  },
  saleText: {
    marginTop: 12,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  amountView: {
    fontWeight: 'bold',
    color: '#008AD0',
    marginLeft: 10,
  },
  StockView: {
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 10,
  },
});
