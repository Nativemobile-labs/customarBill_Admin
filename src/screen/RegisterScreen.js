import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import React, {useState, createRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {registerUser} from '../redux/reducerSlice.js/RegisterUserSlice';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

export default function RegisterScreen({navigation}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState('')

  //DECLARE INPUT STATE
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [sirName, setSirName] = useState('');
  const [titleName, setTitleName] = useState('');

  // DECLARE VALIDATION STATE
  const [nameError, setNameError] = useState('');
  const [lastError, setLastError] = useState('');
  const [userError, setUserError] = useState('');
  const [sirError, setSirError] = useState('');
  const [titleError, setTitleError] = useState('');

  // DECLARE REFERENCES STATE
  const nameRef = createRef();
  const lNameRef = createRef();
  const uNameRef = createRef();
  const sNameRef = createRef();

  // ====================== Validation =====================
  // useEffect(() => {
  //   handleName();
  //   handleLastName();
  //   handleUserName();
  //   handleSirName();
  //   handleTitleName();
  // }, [handleName, handleLastName, handleUserName, handleSirName, handleTitleName]);

  useEffect(() => {
    if(firstName != ''){
      if(firstName.length < 4){
        setNameError('Name is too short')
      }else{
        setNameError('')
      }
      return;
     }
     if(lastName != ''){
      if(lastName.length < 4){
        setLastError('Name is too short')
      }else{
        setLastError('')
      }
      return;
     }

     auth().onAuthStateChanged(user => {
      setLoading(user.phoneNumber)
     })

  }, [firstName])

  // const formValidation = () => {
  //   const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  // };

  const handleName = () => {
    if(firstName != ''){
      if(firstName.length < 4){
        setNameError('Name is too short')
      }else{
        setNameError('')
      }
      return;
     }
  }

  const handleLastName = () => {
    if(lastName != ''){
      if(lastName.length < 4){
        setLastError('Name is too short')
      }else{
        setLastError('')
      }
      return;
     }
  }

  const handleUserName = () => {
    if(userName != ''){
      if(userName.length < 7){
        setUserError('is too short')
      }else{
        setUserError('');
      }
      return;
     }
  }

  const handleSirName = () => {
    if(sirName != ''){
      if(sirName.length < 5){
        setSirError('too short');
      }else{
        setSirError('')
      }
      return;
     }
  }
  const handleTitleName = () => {
    if(titleName != ''){
      if(titleName.length < 5){
        setTitleError('too short')
      }else{
        setTitleError('')
      }
     }
  }

  // ====================== Register Button =====================
  const handleRegister = async () => {
    // formValidation()
    dispatch(registerUser({firstName, lastName, userName, sirName, titleName}));
    // navigation.navigate('Drawer');
    await auth().onAuthStateChanged(user => {
      const uid = user.uid;
      const phone = user.phoneNumber;
      firestore().collection(userName).doc(uid).set({
          First_Name: firstName,
          Last_Name: lastName,
          User_Name: userName,
          Sir_Name: sirName,
          Mobile_Number: phone,
          
      }).then(() => {
        navigation.navigate('Drawer', {
          firstName, lastName, userName,sirName, titleName
        })
        ToastAndroid.showWithGravity(
          'Register Success',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }).catch((error) =>{
        ToastAndroid.showWithGravity(
          error,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } )
    })
  };

  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.Container}>
      <View
        style={{
          backgroundColor: '#cdcdcc',
          width: 200,
          alignSelf: 'center',
          height: 40,
          borderRadius: 40,
        }}>
        <Text style={styles.headingText}>Fill Details</Text>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 40,
        }}>
        {/* FIRST NAME */}
        <TextInput
          style={styles.input}
          placeholder="First Name"
          keyboardType="email-address"
          returnKeyType="next"
          value={firstName}
          onChangeText={firstName => setFirstName(firstName)}
          onSubmitEditing={() => nameRef.current && nameRef.current.focus()}
        />
        {firstName != '' &&  <Text style={styles.errorView}>{nameError}</Text>}

        {/* LAST NAME */}
        <TextInput
          ref={nameRef}
          style={styles.input}
          placeholder="Last Name"
          keyboardType="email-address"
          returnKeyType="next"
          value={lastName}
          onChangeText={lastName => setLastName(lastName)}
          onSubmitEditing={() => lNameRef.current && lNameRef.current.focus()}
        />
        {lastName != '' && <Text style={styles.errorView}>{lastError}</Text>}

        {/* USER NAME */}
        <TextInput
          ref={lNameRef}
          style={styles.input}
          placeholder="User Name"
          keyboardType="email-address"
          returnKeyType="next"
          value={userName}
          onChangeText={userName => setUserName(userName)}
          onSubmitEditing={() => uNameRef.current && uNameRef.current.focus()}
        />
        {userName !== '' && <Text style={styles.errorView}>{userError}</Text>}

        {/* SIR NAME */}
        <TextInput
          ref={uNameRef}
          style={styles.input}
          placeholder="Sir Name"
          keyboardType="email-address"
          returnKeyType="next"
          value={sirName}
          onChangeText={sirName => setSirName(sirName)}
          onSubmitEditing={() => sNameRef.current && sNameRef.current.focus()}
        />
        {sirName !== '' && <Text style={styles.errorView}>{sirError}</Text>}

        {/* TITLE NAME */}
        <TextInput
          ref={sNameRef}
          style={styles.input}
          placeholder="Title Name"
          keyboardType="email-address"
          returnKeyType="done"
          value={loading}
          onChangeText={titleName => setTitleName(titleName)}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        {titleName !== '' && <Text style={styles.errorView}>{titleError}</Text>}

        {/* SUBMIT BUTTON */}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
        <Text style={styles.text}>SUBMIT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#D9E4EC',
    paddingTop: 100,
  },
  headingText: {
    fontWeight: '900',
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 7,
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    width: '87%',
    marginTop: 10,
    paddingLeft: 20,
    alignSelf: 'center',
  },
  button: {
    width: '60%',
    height: 50,
    backgroundColor: '#008AD0',
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 200,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorView: {
    color: 'red',
    fontWeight: '600',
    marginLeft: 40,
  },
});
