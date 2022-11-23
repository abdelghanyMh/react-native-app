import {Formik} from 'formik';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextImput';
import Screen from '../components/Screen';
const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit}) => (
          <>
            <AppTextInput
              onChangeText={handleChange('email')}
              icon="email"
              placeholder="email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always" // ios clear btn
              textContentType="emailAddress" //ios autofill
            />
            <AppTextInput
              onChangeText={handleChange('password')}
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password" //ios autofill
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
