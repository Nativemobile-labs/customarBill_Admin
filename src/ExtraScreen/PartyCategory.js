import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addCategory } from '../redux/reducerSlice.js/PartyCategoriesSlice';

export default function PartyCategory() {
  const [isVisible, setIsVisible] = useState(false);
  const [tagName, setTagName] = useState('');

  const dispatch = useDispatch();

  // Handle AddTag Button
  const handleAddTag = () => {
    // console.log('Add Tag =>', tagName);
      dispatch(addCategory({tagName}));

  }
  return (
    <View style={styles.Container}>

    {/* Modal */}
      <Modal
        animationType="slide"
        visible={isVisible}
        transparent={true}
        onRequestClose={() => {
          setIsVisible(!isVisible);
        }}>
        <View style={styles.innerModalView}>
          <Text style={styles.innerTextView}>Enter Tag Name</Text>
          <TextInput
            style={styles.inputText}
            underlineColorAndroid="silver"
            autoCapitalize="sentences"
            value={tagName}
            onChangeText={text => setTagName(text)}
          />
          <View style={styles.innerModalButton}>
            <TouchableOpacity
              style={styles.innerButton}
              onPress={() => setIsVisible(false)}>
              <Text style={styles.innerText}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.innerButton}
              onPress={() => [setIsVisible(false), handleAddTag()]}>
              <Text style={styles.innerText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Add Tag */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setIsVisible(true)}>
        <Text style={styles.addText}>Add Tag</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  addButton: {
    backgroundColor: '#008AD8',
    marginTop: 690,
    alignSelf: 'center',
    height: 40,
    width: 90,
    borderRadius: 30,
    position: 'absolute',
    flexDirection: 'row',
  },
  addText: {
    marginTop: 10,
    color: 'white',
    fontWeight: '600',
    marginLeft: 15,
  },
  innerModalView: {
    marginTop: 300,
    position: 'absolute',
    backgroundColor: '#D9E4EC',
    width: '60%',
    minWidth: '60%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputText: {
    marginTop: 50,
    marginLeft: 15,
  },
  innerModalButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 15,
  },
  innerButton: {
    backgroundColor: '#008AD8',
    height: 30,
    marginRight: 12,
    width: 70,
    borderRadius: 5,
  },
  innerText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 6,
  },
  innerTextView: {
    color: 'black',
    marginTop: 30,
    marginLeft: 15,
  },
});
