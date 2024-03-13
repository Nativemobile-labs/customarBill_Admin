import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import {useDispatch} from 'react-redux';
import {staff} from '../redux/reducerSlice.js/StaffSlice';
const PickerData = [
  'Sales',
  'Partner',
  'Guest (accountant/advocate)',
  'Owner',
  'InventoryManager',
];
export default function StaffForm() {
  const [staffName, setStaffName] = useState('');
  const [staffPhone, setStaffPhone] = useState('+91');
  const [selectedItem, setSelectedItem] = useState([]);
  const [contacts, setContacts] = useState([]);
  

  const dispatch = useDispatch();

  // Handle Contacts
  const handleContact = async () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        loadContacts();
      });
    } else {
      loadContacts();
    }
  };
  // load Contacts
  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
      })
      .catch(e => {
        alert('Permission to access contacts was denied');
        console.warn('Permission to access contacts was denied');
      });
  };

  // Handle Save Button
  const StaffSaveButton = () => {
    dispatch(staff({staffName, staffPhone, selectedItem}));
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        {/* Contact Button */}
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => handleContact()}>
          <Icons
            name="call-outline"
            size={30}
            color="#008AD0"
            style={styles.iconStyle}
          />
          <Text style={styles.contactText}>Add Form Contacts</Text>
        </TouchableOpacity>

        {/* Draw Line */}
        <View style={styles.lineMainView}>
          <View style={styles.lineInnerView} />
          <Text style={styles.lineText}>or</Text>
          <View style={styles.lineInnerView} />
        </View>

        {/* Input Field */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Staff Name"
            placeholderTextColor="black"
            autoCapitalize="sentences"
            keyboardType="email-address"
            value={staffName}
            onChangeText={text => setStaffName(text)}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Phone Number"
            placeholderTextColor="black"
            keyboardType="number-pad"
            value={staffPhone}
            onChangeText={text => setStaffPhone(text)}
          />

          {/* Dropdown List */}
          <SelectDropdown
            buttonStyle={styles.dropdownButton}
            buttonTextStyle={styles.DropboxText}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowText}
            data={PickerData}
            defaultButtonText={'select'}
            renderDropdownIcon={isOpened => {
              return (
                <Icons
                  name={isOpened ? 'caret-down-outline' : 'caret-up-outline'}
                  color={'#444'}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={'right'}
            onSelect={item => {
              // const selectOption = item;
              setSelectedItem(item);
            }}
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => StaffSaveButton()}>
          <Text style={styles.saveText}>Save Staff</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  contactButton: {
    borderColor: '#008AD0',
    borderWidth: 1,
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 30,
    flexDirection: 'row',
  },
  contactText: {
    color: '#008AD0',
    alignSelf: 'center',
    marginLeft: 5,
    fontSize: 17,
  },
  lineMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 5,
  },
  lineInnerView: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  lineText: {
    width: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputView: {
    flex: 1,
  },
  inputText: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    marginTop: 10,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  iconStyle: {
    marginLeft: 85,
    marginTop: 7,
  },
  saveButton: {
    backgroundColor: '#008AD0',
    borderRadius: 8,
    height: 45,
    width: '90%',
    alignSelf: 'center',
    marginTop: 410,
  },
  saveText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 12,
    fontWeight: 'bold',
  },
  dropdownButton: {
    marginTop: 10,
    width: 375,
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  DropboxText: {
    textAlign: 'justify',
    color: 'black',
    fontSize: 15,
  },
  dropdownRowStyle: {
    backgroundColor: 'white',
    borderBottomColor: 'silver',
  },
  dropdownRowText: {
    color: 'black',
    textAlign: 'justify',
    fontWeight: '400',
    fontSize: 15,
  },
});
