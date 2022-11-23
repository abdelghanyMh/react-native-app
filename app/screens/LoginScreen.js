import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextImput';
import AppButton from '../components/AppButton';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppTextInput
        onChangeText={text => setEmail(text)}
        icon="email"
        placeholder="email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always" // ios clear btn
        textContentType="emailAddress" //ios autofill
      />
      <AppTextInput
        onChangeText={text => setPassword(text)}
        icon="lock"
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password" //ios autofill
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
    // <View>
    //   <Text>LoginScreen</Text>
    // </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
