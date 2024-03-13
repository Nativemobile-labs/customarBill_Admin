import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  SafeAreaView,
  ToastAndroid,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import React, {useState, useRef, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import PhoneInput from 'react-native-phone-number-input';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function LoginScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState(null);
  const [isFull, setIsFull] = React.useState(false);
  const phoneInput = useRef(null);
  const ref = useBlurOnFulfill({code, cellCount: CELL_COUNT, setIsFull});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setCode,
  });
  const CELL_COUNT = 6;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [user, setUser] = useState(null);
  const [errorPhone, setErrorPhone] = useState('');

  // ========================== Submit button =========================
  useEffect(() => {
    if (phoneNumber != '') {
      if (phoneNumber.length < 13) {
        setErrorPhone('Invalid Phone Number');
      } else {
        setErrorPhone('');
      }
      return;
    }
  }, [phoneNumber]);

  const handleFulfill = code => {
    if (code.length === CELL_COUNT) {
      setIsFull(true);
    }
  };

  const submitButton = async () => {
    try {
      const confirmation = await auth()
        .signInWithPhoneNumber(phoneNumber)
        setConfirm(confirmation);
        console.log('confirmation===============>', confirmation)
    } catch (error) {
      console.log('error------------------>', error);
      if (error.code === 'auth/too-many-requests') {
        // console.log('auth/too-many-requests')
        alert('auth/too-many-requests');
      } else if (error.code === 'auth/invalid-phone-number') {
        // console.log('auth/invalid-phone-number')
        alert('auth/invalid-phone-number');
      } else {
        // console.log('something want wrong')
        alert('something want wrong');
      }
    }
  };

  // useEffect(() => {
  //     const subscribe = auth().onAuthStateChanged(onAuthStateChanged)
  //     console.log('onAuth============>',onAuthStateChanged)
  //     setUser(onAuthStateChanged)
  //     return subscribe
  // }, [])

  // function onAuthStateChanged(user) {
  //   console.log(user, 'user');
  // }

 

  // =========================== Confirm Code ===========================
  const ConfirmCode = async () => {
    try {
      await confirm.confirm(code).then(result => {
        // console.log('code result ===========>' ,result)
        ToastAndroid.showWithGravity(
          'Login Success',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        // Alert.alert('Success')
        console.log(result);
        navigation.navigate('Register');
      });
    } catch (e) {
      console.log('Invalid Code', e);

      console.log();
    }
  };

  // COUNTER DOWN
  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const reset = () => {
    navigation.replace('Login')
  };

  if (!confirm) {
    // PHONE NUMBER AUTHENTICATION
    return (
      <View style={styles.container}>
        <Image source={require('../assets/pack.jpeg')} style={styles.image} />
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.textInput}
          onChangeFormattedText={Text => setPhoneNumber(Text)}
          defaultCode="IN"
          layout="first"
          withShadow
          autoFocus
        />
        {errorPhone != '' && (
          <Text style={{color: 'red', fontWeight: 'bold'}}>{errorPhone}</Text>
        )}

        {/* SEND OTP BUTTON */}
        <TouchableOpacity
          style={styles.button}
          disabled={!phoneNumber}
          onPress={() => submitButton()}>
          <Text style={styles.text}>SEND OTP</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    // OTP VERIFICATION
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>VERIFICATION</Text>
      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={code => {
          setCode(code);
          handleFulfill(code);
        }}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[
              styles.cell,
              isFocused && styles.focusCell,
              isFull && styles.full,
            ]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

      {/* Confirm Otp */}
      <TouchableOpacity
        style={styles.button}
        disabled={!code}
        onPress={() => ConfirmCode()}>
        <Text style={styles.text}>CONFIRM OTP</Text>
      </TouchableOpacity>

      {/* Counter Down */}
      <View style={{marginTop: 10}}>
        {minutes === 0 && seconds === 0 ? (
          <TouchableOpacity onPress={() => reset()}>
            <Text style={styles.resendButton}>RESEND OTP</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.timerView}>
            <Text style={styles.remains}>Remaining Time {'   '}</Text>
            <Text style={styles.timers}>
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 200,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  image: {
    height: hp('23%'),
    width: wp('40%'),
  },
  phoneContainer: {
    marginTop: 30,
    width: '85%',
    height: 50,
    borderColor: '#008AD0',
    borderWidth: 2,
    borderRadius: 3,
  },
  textInput: {
    paddingVertical: 0,
  },
  button: {
    marginTop: 30,
    width: wp('60%'),
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008AD0',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 45,
    fontSize: 24,
    fontWeight: '600',
    borderWidth: 2,
    borderColor: 'silver',
    textAlign: 'center',
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 10,
  },
  focusCell: {
    borderColor: '#008AD0',
  },
  resendButton: {
    color: 'red',
    fontWeight: '600',
  },
  remains: {
    color: 'black',
    fontWeight: '600',
  },
  timers: {
    color: 'black',
    fontWeight: '900',
  },
  timerView: {
    flexDirection: 'row',
  },
  full: {
    borderColor: 'green',
  },
});
