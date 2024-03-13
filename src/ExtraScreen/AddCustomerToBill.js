import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

export default function AddCustomerToBill({navigation}) {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.cashButton}
        onPress={() => navigation.navigate('AddItemToBill')}>
        <Text style={styles.cashText}>{item.Name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TOP MENUS */}
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.SelectedButton}>
            <Text style={styles.SelectedText}> All (4)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchButton}
            onPress={() => navigation.navigate('CustomerBills')}>
            <Text style={styles.touchText}>Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchButton}
            onPress={() => navigation.navigate('SupplierBills')}>
            <Text style={styles.touchText}>Supplier</Text>
          </TouchableOpacity>
        </View>
       
        {/* FREQUENT PARTY */}
        <View style={styles.mainLineView}>
          <View style={styles.drawLine} />
          <Text style={styles.lineText}>Frequent Party</Text>
          <View style={styles.drawLine} />
        </View>

        {/* CASH SALE */}
        <TouchableOpacity
          style={styles.cashButton}
          onPress={() => navigation.navigate('AddItemToBill')}>
          <Text style={styles.cashText}> Cash Sale</Text>
        </TouchableOpacity>

        {/* PARTIES */}
        <View style={styles.mainLineView}>
          <View style={styles.drawLine} />
          <Text style={styles.lineText}>Parties</Text>
          <View style={styles.drawLine} />
        </View>

        <View style={{marginBottom: 200}}>
          <FlatList
            data={allListData}
            renderItem={renderItem}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>

      {/* ADD NEW CUSTOMER/PARTY */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddCustomer')}>
        <Icons
          name="add-circle-outline"
          size={30}
          color="white"
          style={styles.iconStyle}
        />
        <Text style={styles.addText}>Add New Customer/Party</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
    // marginBottom: 400,
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 15,
    alignSelf: 'center',
  },
  touchButton: {
    borderColor: '#008AD0',
    borderWidth: 1,
    height: 30,
    width: 120,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 20,
  },
  touchText: {
    alignSelf: 'center',
    marginTop: 4,
    color: '#008AD0',
  },
  SelectedButton: {
    backgroundColor: '#008AD0',
    height: 30,
    width: 120,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 20,
  },
  SelectedText: {
    alignSelf: 'center',
    marginTop: 4,
    color: 'white',
  },
  mainLineView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '98%',
    marginTop: 5,
  },
  drawLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  lineText: {
    width: 'auto',
    textAlign: 'center',
    color: 'black',
    marginLeft: 4,
    marginRight: 4,
  },
  cashButton: {
    height: 45,
    backgroundColor: 'white',
    margin: 3,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  cashText: {
    color: 'black',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 17,
  },
  addButton: {
    position: 'absolute',
    marginTop: 710,
    backgroundColor: '#008AD0',
    height: 40,
    width: 230,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    resizeMode: 'contain',
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
});

const allListData = [
  {
    id: 1,
    Name: 'Cash Sale',
  },
  {
    id: 2,
    Name: 'Demo Customer_1',
  },
  {
    id: 3,
    Name: 'Demo Customer_2',
  },
  {
    id: 4,
    Name: 'Demo Customer_3',
  },
  {
    id: 5,
    Name: 'Demo Customer_4',
  },
];
