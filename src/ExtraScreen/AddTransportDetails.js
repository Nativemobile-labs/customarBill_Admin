import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import React, {useState, useEffect, createRef} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import { transport } from '../redux/reducerSlice.js/TransportDetailsSlice';

export default function AddTransportDetails() {
   const [labourTransport, setLabourTransport] = useState('');
   const [purchaseOrder, setPurchaseOrder] = useState('');
   const [challanNumber, setChallanNumber] = useState('');
   const [eBillNumber, setEBillNumber] = useState('');
   const [eBillDate, setEBillDate] = useState(null);
   const [transporterName, setTransporterName] = useState('');
   const [vehicleNumber, setVehicleNumber] = useState('');
   const [transportDistance, setTransportDistance] = useState('');
   const [deliveryLocation, setDeliveryLocation] = useState('');
   const [deliveryBillDate, setDeliveryBillDate] = useState(null)
   const [notesInputText, setNotesInputText] = useState('Thank you for doing business with us, Visit Again!');
   const [transportIsVisible, setTransportIsVisible] = useState();
   const [transportDetails, setTransportDetails] = useState();
   
   const labourTransportRef = createRef();
   const purchaseOrderRef = createRef();
   const challanNumberRef = createRef();
   const transporterNameRef = createRef();
   const vehicleNumberRef = createRef();
   const transportDistanceRef = createRef();
  
   const dispatch = useDispatch();
// Show Date
    useEffect(() => {
        let today = new Date();
        let date = today.getDate()+ '/'+ today.getMonth()+1+'/'+ today.getFullYear();
        setEBillDate(date);
        setDeliveryBillDate(date);
      }, []);

// Handle Save Button
const handleSaveButton = () => {
//   console.log('Save Data =>', labourTransport, purchaseOrder, challanNumber, eBillNumber, eBillDate,
//            transporterName, vehicleNumber, transportDistance, deliveryLocation, deliveryBillDate, notesInputText);

  dispatch(transport({labourTransport, purchaseOrder, challanNumber, eBillNumber, eBillDate,
     transporterName, vehicleNumber, transportDistance, deliveryLocation, deliveryBillDate, notesInputText}))         
}

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>

         {/* Labour Transport */}
            <View style={{flexDirection: 'row'}}>
                <View style={styles.textBackground}>
                     <Text style={styles.textStyle}>Labour/Transport Charges</Text>
                </View>
                <TextInput 
                   style={styles.inputText}
                   keyboardType='decimal-pad'
                   value={labourTransport}
                   onChangeText={(Text) => setLabourTransport(Text)}
                   onSubmitEditing={() => labourTransportRef.current
                                             && labourTransportRef.current.focus()}
                />
            </View>

            {/* Purchase Order */}
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={styles.textBackground}>
                     <Text style={styles.textStyle}>Purchase Order Number</Text>
                </View>
                <TextInput 
                   style={styles.inputText}
                   ref={labourTransportRef}
                   keyboardType='decimal-pad'
                   value={purchaseOrder}
                   onChangeText={(Text) => setPurchaseOrder(Text)}
                   onSubmitEditing={() => purchaseOrderRef.current
                                             && purchaseOrderRef.current.focus()}
                />
            </View>

            {/* Challan Number */}
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={styles.textBackground}>
                     <Text style={styles.textStyle}>Challan Number</Text>
                </View>
                <TextInput 
                   style={styles.inputText}
                   ref={purchaseOrderRef}
                   keyboardType='decimal-pad'
                   value={challanNumber}
                   onChangeText={(Text) => setChallanNumber(Text)}
                   onSubmitEditing={() => challanNumberRef.current
                                             && challanNumberRef.current.focus()}
                />
            </View>

            {/* E Bill Number */}
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={styles.textBackground}>
                     <Text style={styles.textStyle}>E Way Bill Number</Text>
                </View>
                <TextInput 
                   style={styles.inputText}
                   ref={challanNumberRef}
                   keyboardType='decimal-pad'
                   value={eBillNumber}
                   onChangeText={(Text) => setEBillNumber(Text)}
                   onSubmitEditing={() => Keyboard.dismiss()}
                />
            </View>

            {/* E Bill Date */}
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={styles.textBackground}>
                     <Text style={styles.textStyle}>E Way Bill Date</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <TextInput 
                   style={styles.inputText}
                   keyboardType='decimal-pad'
                   value={eBillDate}
                   onChangeText={(Text) => setEBillDate(Text)}
                />
                </View>
            </View>
        </View>

        {/* Transport Details */}
        <View style={{marginHorizontal: 20}}>
            <TouchableOpacity style={styles.transportButton} 
                onPress={()=> [setTransportDetails(!transportDetails), setTransportIsVisible(!transportIsVisible)]}>
                <Text style={{color: '#008AD0', fontWeight: 'bold'}}> Transport Details</Text>
                <Icons name={transportDetails ? 'caret-down-outline' : 'caret-up-outline'} color={'#444'} size={14}
                style={{marginLeft: 220, marginTop: 3}} />
            </TouchableOpacity>
        </View>
        <View style={styles.mainView}>
   {!transportIsVisible ? null :<View>

   {/* Transporter Name */}
        <View style={{flexDirection: 'row'}}>
       <View style={styles.textBackground}>
            <Text style={styles.textStyle}>Transporter Name</Text>
       </View>
       <TextInput 
          style={styles.inputText}
          keyboardType='default'
          value={transporterName}
          onChangeText={(Text) => setTransporterName(Text)}
          onSubmitEditing={() => transporterNameRef.current && transporterNameRef.current.focus()}
       />
   </View>

    {/* Vehicle Number */}
    <View style={{flexDirection: 'row', marginTop: 10}}>
       <View style={styles.textBackground}>
            <Text style={styles.textStyle}>Vehicle Number</Text>
       </View>
       <TextInput 
          style={styles.inputText}
          ref={transporterNameRef}
          keyboardType='decimal-pad'
          value={vehicleNumber}
          onChangeText={(Text) => setVehicleNumber(Text)}
          onSubmitEditing={() => vehicleNumberRef.current
                                        && vehicleNumberRef.current.focus()}
       />
   </View>

    {/* Transport Distance */}
    <View style={{flexDirection: 'row', marginTop: 10}}>
       <View style={styles.textBackground}>
            <Text style={styles.textStyle}>Transport Distance</Text>
       </View>
       <TextInput 
          style={styles.inputText}
          ref={vehicleNumberRef}
          keyboardType='decimal-pad'
          value={transportDistance}
          onChangeText={(Text) => setTransportDistance(Text)}
          onSubmitEditing={() => transportDistanceRef.current
                                        && transportDistanceRef.current.focus()}
       />
   </View>

     {/* Delivery Location */}
   <View style={{flexDirection: 'row', marginTop: 10}}>
       <View style={styles.textBackground}>
            <Text style={styles.textStyle}>Delivery Location</Text>
       </View>
       <TextInput 
          style={styles.inputText}
          ref={transportDistanceRef}
          keyboardType='default'
          value={deliveryLocation}
          onChangeText={(Text) => setDeliveryLocation(Text)}
          onSubmitEditing={() => Keyboard.dismiss()}
       />
   </View>

    {/* Delivery Date */}
    <View style={{flexDirection: 'row', marginTop: 10}}>
       <View style={styles.textBackground}>
            <Text style={styles.textStyle}>Delivery Date</Text>
       </View>
       <View style={{flexDirection: 'row'}}>
       <TextInput 
          style={styles.inputText}
          value={deliveryBillDate}
          onChangeText={(Text) => setDeliveryBillDate(Text)}
       />
       </View>
   </View>
   </View>}
 </View>
      <View style={{marginTop: 15, marginBottom: 150, marginHorizontal: 20, textAlignVertical: 'top'}}>
        <TextInput 
        style={{backgroundColor: 'white', height: 80}}
        keyboardType='default'
        multiline={true}
        numberOfLines={10}
        value={notesInputText}
        onChangeText={(Text) => setNotesInputText(Text)}
        />
     </View>
    </ScrollView>

    {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={() => handleSaveButton()}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
        backgroundColor: '#D9E4EC',
        },
   mainView: {
        marginHorizontal: 20,
        marginTop: 20,
   },    
   textBackground: {
        height: 40, 
        width: 180,
        paddingLeft: 10,
        paddingTop: 10,
   }, 
   textStyle: {
        color: 'black',
        fontWeight: '600',
   },
   inputText: {
        backgroundColor: 'white', 
        height: 40, 
        width: 180, 
        marginLeft: 12,
   },
   transportButton: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 40, 
        marginTop: 15,
        paddingLeft: 10,
        paddingTop: 10,
   },
   saveButton: {
        backgroundColor: '#008AD8', 
        marginBottom: 10, 
        height: 40, 
        marginHorizontal: 20, 
        borderRadius: 5,
   }, 
   saveText: {
        color: 'white',
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 10,
   },    
});