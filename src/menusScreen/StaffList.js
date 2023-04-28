import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

export default function StaffList({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  addButton: {
    marginTop: 700,
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
