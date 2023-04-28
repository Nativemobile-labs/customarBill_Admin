import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useState, createRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {registerUser} from '../redux/reducerSlice.js/RegisterUserSlice';

export default function RegisterScreen({navigation}) {
  const dispatch = useDispatch();
  //declare input state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [sirName, setSirName] = useState('');
  const [titleName, setTitleName] = useState('');

  // declare validation state
  const [nameError, setNameError] = useState('');
  const [lastError, setLastError] = useState('');
  const [userError, setUserError] = useState('');
  const [sirError, setSirError] = useState('');
  const [titleError, setTitleError] = useState('');

  // declare references state
  const nameRef = createRef();
  const lNameRef = createRef();
  const uNameRef = createRef();
  const sNameRef = createRef();

  // ====================== Validation =====================
  useEffect(() => {
    formValidation();
  }, [firstName, lastName, userName, sirName, titleName]);

  const formValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (firstName != '') {
      if (firstName.length < 5) {
        setNameError('First Name less Then Five');
      } else {
        setNameError('');
      }
      return;
    }

    if (lastName != '') {
      if (lastName.length < 4) {
        setLastError('Last Name Less Then Four');
      } else {
        setLastError('');
      }
      return;
    }

    if (userName != '') {
      if (!regEx.test(userName)) {
        setUserError('Invalid User Name');
      } else {
        setUserError('');
      }
      return;
    }

    if (sirName != '') {
      if (sirName.length < 3) {
        setSirError('Sir Name Less then Three');
      } else {
        setSirError('');
      }
      return;
    }

    if (titleName != '') {
      if (titleName.length < 4) {
        setTitleError('Title Name Less Then Four');
      } else {
        setTitleError('');
      }
      return;
    }
  };

  // ====================== Register Button =====================
  const handleRegister = () => {
    dispatch(registerUser({firstName, lastName, userName, sirName, titleName}));
    navigation.navigate('Drawer');
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
        {/* First Name */}
        <TextInput
          style={styles.input}
          placeholder="First Name"
          keyboardType="email-address"
          returnKeyType="next"
          value={firstName}
          onChangeText={text => setFirstName(text)}
          onSubmitEditing={() => nameRef.current && nameRef.current.focus()}
        />
        {firstName != '' && <Text style={styles.errorView}>{nameError}</Text>}

        {/* Last Name */}
        <TextInput
          ref={nameRef}
          style={styles.input}
          placeholder="Last Name"
          keyboardType="email-address"
          returnKeyType="next"
          value={lastName}
          onChangeText={text => setLastName(text)}
          onSubmitEditing={() => lNameRef.current && lNameRef.current.focus()}
        />
        {lastName != '' && <Text style={styles.errorView}>{lastError}</Text>}

        {/* User Name */}
        <TextInput
          ref={lNameRef}
          style={styles.input}
          placeholder="User Name"
          keyboardType="email-address"
          returnKeyType="next"
          value={userName}
          onChangeText={text => setUserName(text)}
          onSubmitEditing={() => uNameRef.current && uNameRef.current.focus()}
        />
        {userName != '' && <Text style={styles.errorView}>{userError}</Text>}

        {/* Sir Name */}
        <TextInput
          ref={uNameRef}
          style={styles.input}
          placeholder="Sir Name"
          keyboardType="email-address"
          returnKeyType="next"
          value={sirName}
          onChangeText={text => setSirName(text)}
          onSubmitEditing={() => sNameRef.current && sNameRef.current.focus()}
        />
        {sirName != '' && <Text style={styles.errorView}>{sirError}</Text>}

        {/* Title Name */}
        <TextInput
          ref={sNameRef}
          style={styles.input}
          placeholder="Title Name"
          keyboardType="email-address"
          returnKeyType="done"
          value={titleName}
          onChangeText={text => setTitleName(text)}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        {titleName != '' && <Text style={styles.errorView}>{titleError}</Text>}

        {/* Submit Button */}
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
