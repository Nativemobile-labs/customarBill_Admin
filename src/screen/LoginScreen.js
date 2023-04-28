import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  SafeAreaView,
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
  const [confirm, setConfirm] = useState('');
  const [code, setCode] = useState('');
  const phoneInput = useRef(null);
  const ref = useBlurOnFulfill({code, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setCode,
  });
  const CELL_COUNT = 4;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(1);

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

  const submitButton = async () => {
    if (phoneNumber.length !== 0) {
      Alert.alert('Confirm Number', phoneNumber, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: 'Ok',
          onPress: () => console.log('Ok Pressed'),
        },
      ]);
    }
    const Confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(Confirmation);
  };

  // =========================== Confirm Code ===========================
  const ConfirmCode = async () => {
    // try {
    //   await confirm.confirm(code);
    // } catch (e) {
    //   console.log('Invalid Code');
    // }
    navigation.navigate('Register');
  };

  // =========================== Counter Down ===========================
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
    alert('kkkk');
  };

  if (confirm) {
    // ========================= Phone Number Authentication ====================
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

        {/* Send Otp Button */}
        <TouchableOpacity style={styles.button} onPress={() => submitButton()}>
          <Text style={styles.text}>SEND OTP</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    // ========================= Otp Verification ===========================
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>VERIFICATION</Text>
      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

      {/* Confirm Otp */}
      <TouchableOpacity style={styles.button} onPress={() => ConfirmCode()}>
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
            <Text style={styles.remains}>Remaning Time {'   '}</Text>
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
});
