import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addCategory} from '../redux/reducerSlice.js/PartyCategoriesSlice';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function PartyCategory() {
  const [isVisible, setIsVisible] = useState(false);
  const [tagName, setTagName] = useState('');
  const [dataList, setDataList] = useState([]);

  const dispatch = useDispatch();

  // Handle AddTag Button
  const handleAddTag = async () => {
    await dispatch(addCategory({tagName}));
    await auth().onAuthStateChanged(user => {
      const uid = user.uid;
      const docRef = firestore().collection('Tag_Name').doc(uid);
      docRef
        .update({
          Tag_Name: firestore.FieldValue.arrayUnion(tagName),
        })
        .then(() => {
          ToastAndroid.showWithGravity(
            'SUCCESS',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
          setTagName('');
        })
        .catch(error => {
          ToastAndroid.showWithGravity(
            error,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        });
    });
  };

  useEffect(async() => {
    const unsubscribe = await firestore().collection('Tag_Name').onSnapshot((querySnapShort) => {
    //   const data = querySnapShort.docs.map((documentSnapshot) => ({
    //     id: documentSnapshot.id,
    //     ...documentSnapshot.data()
    //   }))
    //   setDataList(data)
    //   console.log('pradeep========================>',data)
        const DataList = [];
        querySnapShort.forEach(documentSnapshot => {
          DataList.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setDataList(dataList)
        console.log(DataList,'======================>')
    })
    return () => unsubscribe();
  },[])
  // RENDER TAG NAME
  const renderTagName = ({item}) => {
    return (
      <View style={styles.renderView}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.renderText}>{item.name}</Text>
        </View>
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={{
            position: 'absolute',
            right: 90,
            top: 8,
            width: 50,
            borderRadius: 15,
            borderColor: 'gray',
            borderWidth: 2,
            height: 25,
          }}>
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              marginTop: 1,
              fontWeight: '600',
            }}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('delete')}
          style={{
            position: 'absolute',
            right: 15,
            top: 8,
            width: 60,
            borderRadius: 15,
            borderColor: 'gray',
            borderWidth: 2,
            height: 25,
          }}>
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              marginTop: 1,
              fontWeight: '600',
            }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.Container}>
      {/* Modal */}
      <ScrollView showsVerticalScrollIndicator={false}>
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
              onChangeText={tagName => setTagName(tagName)}
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
        <View style={{marginBottom: 200}}>
          <FlatList
            data={PartyTagList}
            renderItem={renderTagName}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>

      {/* ADD TAG */}
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
    marginHorizontal: 20,
    marginTop: 15,
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
    backgroundColor: 'gray',
    width: '80%',
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
    marginRight: 15,
  },
  innerModalButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10,
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
    marginLeft: 20,
    fontWeight: 'bold',
  },
  renderView: {
    backgroundColor: 'silver',
    borderRadius: 5,
    height: 40,
    marginTop: 5,
  },
  renderText: {
    color: 'black',
    fontWeight: '600',
    paddingLeft: 15,
    marginTop: 10,
  },
});

const PartyTagList = [
  {
    id: 1,
    name: 'Tag_Item_1',
  },
  {
    id: 2,
    name: 'Tag_Item_2',
  },
  {
    id: 3,
    name: 'Tag_Item_3',
  },
  {
    id: 4,
    name: 'Tag_Item_4',
  },
  {
    id: 5,
    name: 'Tag_Item_5',
  },
  {
    id: 7,
    name: 'Tag_Item_6',
  },
  {
    id: 8,
    name: 'Tag_Item_7',
  },
  {
    id: 9,
    name: 'Tag_Item_8',
  },
  {
    id: 10,
    name: 'Tag_Item_9',
  },
  {
    id: 11,
    name: 'Tag_Item_10',
  },
  {
    id: 12,
    name: 'Tag_Item_11',
  },
  {
    id: 13,
    name: 'Tag_Item_12',
  },
  {
    id: 14,
    name: 'Tag_Item_13',
  },
  {
    id: 15,
    name: 'Tag_Item_14',
  },
  {
    id: 16,
    name: 'Tag_Item_15',
  },
  {
    id: 17,
    name: 'Tag_Item_16',
  },
  {
    id: 18,
    name: 'Tag_Item_17',
  },
  {
    id: 19,
    name: 'Tag_Item_18',
  },
  {
    id: 20,
    name: 'Tag_Item_19',
  },
  {
    id: 21,
    name: 'Tag_Item_20',
  },
  {
    id: 22,
    name: 'Tag_Item_21',
  },
];
