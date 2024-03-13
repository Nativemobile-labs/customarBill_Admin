import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  View,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

export default function StaffList({navigation}) {

  const renderItem = ({item}) => {
    return(
      <View style={{backgroundColor: 'silver', marginTop: 8, borderRadius: 5, height: 85}}>
        <Text style={{color: 'black', position: 'absolute', left: 20, top: 5}}>{item.Name}</Text>
        <Text style={{color: 'black', position: 'absolute', left: 20, top: 22}}>Name: {item.Role}</Text>
        <Text style={{color: 'black', position: 'absolute', left: 20, top: 40}}>Role: {item.Phone}</Text>
        <Text style={{color: 'green', position: 'absolute', left: 20, top: 58}}>{item.message}</Text>
        <TouchableOpacity onPress={() => alert('Delete user')}style={{position:'absolute', right: 20, top: 15}}>
        <Icons name='trash-sharp' size={30} color='white' />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal: 15}}>
        <FlatList 
          data={staffListData}
          renderItem={renderItem}
          scrollEnabled={true}
          // showsVerticalScrollIndicator={false}
        />
      </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('StaffForm')}>
          <Icons
            name="add-circle"
            size={30}
            color="white"
            style={styles.iconStyle}
          />
          <Text style={styles.addText}>Add Staff</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#008AD0',
    height: 40,
    width: 130,
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


const staffListData = [
  {
    "Name": "User_1",
    "Role": "Partner",
    "Phone": "1234567890",
    "message": "This is the testing message add Partner"
  },
  {
    "Name": "User_2",
    "Role": "Partner",
    "Phone": "1234567890",
    "message": "This is the testing message add Partner"
  },
  {
    "Name": "User_3",
    "Role": "Partner",
    "Phone": "1234567890",
    "message": "This is the testing message add Partner"
  },
  {
    "Name": "User_4",
    "Role": "Partner",
    "Phone": "1234567890",
    "message": "This is the testing message add Partner"
  },
  {
    "Name": "User_5",
    "Role": "Partner",
    "Phone": "1234567890",
    "message": "This is the testing message add Partner"
  },
  {
    "Name": "User_6",
    "Role": "Partner",
    "Phone": "1234567890",
    "message": "This is the testing message add Partner"
  },
  {
    "Name": "User_7",
    "Role": "Partner",
    "Phone": "1234567890",
    "message": "This is the testing message add Partner"
  },
  {
    "Name": "User_8",
    "Role": "Partner",
    "Phone": "1234567890",
    "message": "This is the testing message add Partner"
  },
  {
    "Name": "User_9",
    "Role": "Partner",
    "Phone": "1234567890",
    "message": "This is the testing message add Partner"
  },
  {
    "Name": "User_10",
    "Role": "Partner",
    "Phone": "1234567890",
    "message": "This is the testing message add Partner"
  },
  {
    "Name": "User_11",
    "Role": "Partner",
    "Phone": "1234567890",
    "message": "This is the testing message add Partner"
  },
  {
    "Name": "User_12",
    "Role": "Partner",
    "Phone": "1234567890",
    "message": "This is the testing message add Partner"
  },
]