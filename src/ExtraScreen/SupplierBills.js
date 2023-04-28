import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

export default function SupplierBills({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {/* Top Menus */}
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.touchButton}  onPress={() => navigation.navigate('AddCustomerToBill')}>
            <Text style={styles.touchText}> All </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchButton} onPress={() => navigation.navigate('CustomerBills')}>
            <Text style={styles.touchText}>Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SelectedButton}>
            <Text style={styles.SelectedText}>Supplier</Text>
          </TouchableOpacity>
        </View>
      {/* Frequent Party */}
      <View style={styles.mainLineView}>
          <View style={styles.drawLine} />  
              <Text style={styles.lineText}>Frequent Party</Text>    
          <View style={styles.drawLine} />
      </View>
      {/* Cash Sale */}
      <TouchableOpacity style={styles.cashButton} onPress={() => navigation.navigate('AddItemToBill')}>
        <Text style={styles.cashText}> Cash Sale</Text>
      </TouchableOpacity>
      {/* Parties */}
      <View style={styles.mainLineView}>
          <View style={styles.drawLine} />  
              <Text style={styles.lineText}>Parties</Text>    
          <View style={styles.drawLine} />
      </View>

      {/* Add New Customer/Party */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddSupplier')}>
          <Icons name='add-circle-outline' size={30} color='white' style={styles.iconStyle}/>
          <Text style={styles.addText}>Add New Customer/Party</Text>
       </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
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
    color:'black',
    marginLeft: 4,
    marginRight: 4,
  },
  cashButton: {
    height: 45,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
  },
  cashText: {
    color: 'black',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 17,
  },
  addButton: {
    marginTop: 550,
    backgroundColor: '#008AD0',
    height: 40,
    width: 230,
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
});