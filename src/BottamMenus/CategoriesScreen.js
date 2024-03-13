import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Keyboard,
  FlatList,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {categories} from '../redux/reducerSlice.js/CategoriesSlice';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function CategoriesScreen({navigation}) {
  const [isVisible, setIsVisible] = useState(false);
  const [addCategoryName, setCategoryName] = useState('');
  const [dataList, setDataList] = useState([]);
  // console.log('pradeep=======hjkhfjk=================>',dataList)

  const dispatch = useDispatch();
  const categoriesData = useSelector(state => state.categoriesSlice);
  // console.log(categoriesData);

  // ADD CATEGORY ON SAVE BUTTON
  const addCategorySaveButton = async () => {
    // await newArr.push(addCategory);
    // console.log(newArr);
    // setCategory('');
    // console.log("Add Categories =>",addCategoryName);
    dispatch(categories(addCategoryName));
    await auth().onAuthStateChanged(user => {
      const uid = user.uid;
      const docRef = firestore().collection('Category').doc(uid);
      docRef
        .update({
          Category_Name: firestore.FieldValue.arrayUnion(addCategoryName),
        })
        .then(() => {
          setCategoryName('');
          ToastAndroid.showWithGravity(
            'SUCCESS',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        })
        .catch(error => {
          setCategoryName('');
          ToastAndroid.showWithGravity(
            error,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        });
    });
  };

  // SHOW DATA ITEMS
  useEffect(async () => {
    const unsubscribe = await firestore().collection('Category').onSnapshot((querySnapShort) => {
      const data = querySnapShort.docs.map((documentSnapshot) => ({
        id: documentSnapshot.id,
        ...documentSnapshot.data()
      }))
      setDataList(data)
      // console.log('pradeep========================>',data)
    })
    return () => unsubscribe();
  },[])

  // RENDER CATEGORY
  const renderCategory = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Inventory')}
        style={styles.renderView}>
        <Text style={styles.renderText}>{item.abc}</Text>
        <TouchableOpacity
          onPress={() => alert('share items')}
          style={{position: 'absolute', right: 40, top: 6}}>
          <Icon name="share-social" size={25} color={'#ffa505'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('menus')}
          style={{position: 'absolute', right: 10, top: 6}}>
          <Icon name="ellipsis-vertical" size={25} color={'gray'} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ViewButton}>
          {/* INVENTORY BUTTON */}
          <TouchableOpacity
            style={styles.selectedButton}
            onPress={() => navigation.navigate('Inventory')}>
            <Text style={styles.selectedText}>Inventory</Text>
          </TouchableOpacity>

          {/* CATEGORY BUTTON */}
          <TouchableOpacity style={styles.unselectButton}>
            <Text style={styles.unselectedText}>Categories</Text>
          </TouchableOpacity>
        </View>

        {/* MODAL */}
        <Modal
          animationType="slide"
          visible={isVisible}
          transparent={true}
          onRequestClose={() => {
            setIsVisible(!isVisible);
          }}>
          <View style={styles.modalInnerView}>
            <Text style={styles.addCategoryText}>Add New Category</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Category Name"
              keyboardType="email-address"
              autoCapitalize="sentences"
              value={addCategoryName}
              onChangeText={addCategoryName => setCategoryName(addCategoryName)}
              onSubmitEditing={Keyboard.dismiss}
            />

            <TouchableOpacity
              style={styles.cancelButtonBackground}
              onPress={() => setIsVisible(false)}>
              <Text style={styles.saveButton}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saveButtonBackground}
              onPress={() => [addCategorySaveButton(), setIsVisible(false)]}>
              <Text style={styles.saveButton}>Save</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={{marginBottom: 200}}>
          <FlatList
            style={{marginTop: 15}}
            data={dataList}
            renderItem={renderCategory}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
      {/* ADD CATEGORY BUTTON */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setIsVisible(true);
        }}>
        <Icon name="add-circle" size={25} color="white" style={styles.icon} />
        <Text style={styles.addButtonText}>Add Categories</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  selectedButton: {
    backgroundColor: 'white',
    marginTop: 20,
    height: 40,
    width: 140,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginLeft: 22,
    marginRight: 22,
  },
  selectedText: {
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
    paddingTop: 9,
  },
  unselectButton: {
    backgroundColor: '#008AD8',
    marginTop: 20,
    height: 40,
    width: 140,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginLeft: 22,
    marginRight: 22,
  },
  unselectedText: {
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
    paddingTop: 9,
  },
  addButton: {
    backgroundColor: '#008AD8',
    marginTop: 660,
    alignSelf: 'center',
    height: 45,
    width: 180,
    borderRadius: 30,
    position: 'absolute',
    flexDirection: 'row',
  },
  ViewButton: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  icon: {
    paddingTop: 8,
    paddingLeft: 25,
  },
  addButtonText: {
    marginTop: 12,
    color: 'white',
    fontWeight: '600',
  },
  addCategoryText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 20,
    fontSize: 17,
  },
  modalInnerView: {
    marginTop: 280,
    position: 'absolute',
    backgroundColor: 'gray',
    width: '95%',
    height: 245,
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
  inputField: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  cancelButtonBackground: {
    backgroundColor: 'silver',
    marginTop: 30,
    height: 40,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'space-between',
    marginLeft: 22,
    marginRight: 22,
  },
  saveButtonBackground: {
    backgroundColor: '#008AD8',
    marginTop: 10,
    height: 40,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'space-between',
    marginLeft: 22,
    marginRight: 22,
  },
  saveButton: {
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
    paddingTop: 9,
  },
  renderView: {
    marginHorizontal: 20,
    marginTop: 5,
    backgroundColor: 'silver',
    height: 40,
    borderRadius: 5,
  },
  renderText: {
    marginLeft: 15,
    marginTop: 10,
    color: 'black',
    fontWeight: '600',
  },
});

const categoryListData = [
  {
    id: 1,
    abc: 'ABC',
  },
  {
    id: 2,
    abc: 'DEF',
  },
  {
    id: 3,
    abc: 'HIJK',
  },
 
];
