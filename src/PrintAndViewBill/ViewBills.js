import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Table, Row, Rows} from 'react-native-table-component';

export default function ViewBills() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={[styles.phnText, {fontWeight: '600'}]}>7906077973</Text>
        <View style={{position: 'absolute', right: 10}}>
          <Text style={{fontSize: 10, color: 'silver'}}>
            ORIGINAL FOR RECIPIENT
          </Text>
        </View>
        <TouchableOpacity
          style={styles.imageBorder}
          onPress={() => alert('upload image')}>
          <Image
            source={require('../assets/picture.png')}
            style={{width: 70, height: 60, left: 8, bottom: 3}}
          />
          <Text style={styles.imageText}>Upload Logo</Text>
        </TouchableOpacity>

        <View style={{top: 100, marginHorizontal: 20}}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Cash Bill</Text>
            <Image
              source={require('../assets/pencil.png')}
              style={{height: 15, width: 15, marginLeft: 10}}
            />
          </View>

          <Text style={styles.invoiceText}>Bill To</Text>
          <TouchableOpacity
            style={styles.fetchView}
            onPress={() => alert('fetch party')}>
            <Text style={styles.fetchText}>Fetch Latest Party Details</Text>
          </TouchableOpacity>
          <Text style={styles.invoiceText}>Shubham</Text>
          <Text style={[styles.invoiceText, {fontWeight: '400'}]}>
            9436111232
          </Text>
          <Text style={styles.invoiceText}>Item Name</Text>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              right: 20,
              top: 20,
            }}>
            <View>
              <Text style={styles.invoiceText}>Invoice No :</Text>
              <Text style={styles.invoiceText}>Date :</Text>
              <Text style={styles.invoiceText}>Due Date:</Text>
            </View>
            <View style={{marginLeft: 25}}>
              <Text style={styles.dateText}>Inv_006</Text>
              <Text style={styles.dateText}>18/07/2023</Text>
              <Text style={styles.dateText}>20/07/2023</Text>
            </View>
          </View>
        </View>
        {/* TABLES */}
        <View style={{top: 110, marginHorizontal: 20}}>
          <Table
            borderStyle={{
              borderWidth: 1,
              borderColor: 'black',
            }}>
            <Row
              data={headTable}
              style={styles.HeadStyle}
              textStyle={styles.TableText}
            />
            <Rows data={itemTable} textStyle={styles.itemStyle} />
          </Table>
        </View>

        <View style={{flexDirection: 'row', top: 130}}>
          {/* Invoice Amount in Words */}
          <View style={{marginHorizontal: 20}}>
            <Text style={styles.invoiceText}>Invoice Amount in Words</Text>
            <Text style={[styles.invoiceText, {fontWeight: '400'}]}>
              Rupee Only
            </Text>
          </View>

          {/* Sub Total without Tax */}
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={[styles.invoiceText, {fontWeight: '400'}]}>
                Sub Total without Tax
              </Text>
              <Text style={[styles.invoiceText, {fontWeight: '400'}]}>
                Cash Discount
              </Text>
              <Text style={styles.invoiceText}>TOTAL AMOUNT</Text>
              <Text style={[styles.invoiceText, {fontWeight: '400'}]}>
                Received Amount
              </Text>
              <Text style={styles.invoiceText}>TOTAL SAVING</Text>
            </View>

            <View style={{marginLeft: 30}}>
              <Text style={[styles.invoiceText, {fontWeight: '400'}]}>
                ₹ 5475
              </Text>
              <Text style={[styles.invoiceText, {fontWeight: '400'}]}>
                ₹ 300(500%)
              </Text>
              <Text style={styles.invoiceText}>₹ 545</Text>
              <Text style={[styles.invoiceText, {fontWeight: '400'}]}>
                ₹ 580
              </Text>
              <Text style={styles.invoiceText}>₹ 5483</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', top: 150, marginHorizontal: 20}}>
          {/* Add Bank Details */}
          {/* <TouchableOpacity onPress={() => alert('add Bank')}>
          <Text style={[styles.invoiceText, {color: 'blue'}]}>
            Add Bank Details
          </Text>
          <Image
            source={require('../assets/pencil.png')}
            style={[styles.pencil, {left: 85}]}
          />
        </TouchableOpacity> */}

          {/* Authorized Signatory */}
          <View style={{left: 225, top: 40}}>
            <Text style={[styles.invoiceText, {fontWeight: '600'}]}>
              Authorized Signatory
            </Text>
          </View>
        </View>

        {/* Change Terms And Conditions */}
        {/* <TouchableOpacity
        style={{top: 190, marginHorizontal: 20}}
        onPress={() => alert('change term and condition')}>
        <Text style={[styles.invoiceText, {color: 'blue'}]}>
          Change Terms And Conditions
        </Text>
        <Image source={require('../assets/pencil.png')} style={styles.pencil} />
      </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#D9E4EC',
  },
  HeadStyle: {
    height: 20,
    alignContent: 'center',
    backgroundColor: 'blue',
  },
  TableText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    alignSelf: 'center',
  },
  itemStyle: {
    color: 'black',
    fontWeight: '500',
    fontSize: 10,
    alignSelf: 'center',
  },
  phnText: {
    color: 'black',
    position: 'relative',
    left: 20,
    top: 20,
  },
  imageBorder: {
    borderWidth: 2,
    borderColor: 'orange',
    height: 70,
    width: 90,
    borderRadius: 5,
    position: 'absolute',
    right: 20,
    top: 20,
    borderStyle: 'dotted',
  },
  imageText: {
    color: 'black',
    fontSize: 10,
    alignSelf: 'center',
    bottom: 10,
    fontWeight: 'bold',
  },
  fetchText: {
    color: 'white',
    fontSize: 12,
    padding: 2,
    fontWeight: '700',
  },
  dateText: {
    color: 'gray',
    fontSize: 12,
  },
  invoiceText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  fetchView: {
    borderWidth: 1,
    width: 150,
    height: 'auto',
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  pencil: {
    height: 12,
    width: 12,
    marginLeft: 10,
    left: 160,
    bottom: 15,
  },
});

const headTable = ['#', 'ITEM NAME', 'QTY', 'RATE', 'TOTAL'];
const itemTable = [
  [1, 'Calpol', '1 TBS', 10, 10],
  [2, 'Disprine', '2 TBS', 5, 10],
  [3, 'Ibuat', '4 TBS', 10, 40],
  [4, 'Moxikind', '10 TBS', 10, 100],
  ['', 'Total', '17', '', 160],
];
