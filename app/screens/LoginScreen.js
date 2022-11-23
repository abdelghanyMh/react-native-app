import React from 'react';
import {Image, StyleSheet} from 'react-native';
import * as Yup from 'yup';
import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';

// validation schema (validation rules for all inputs)
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('password'),
});
const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          name="email"
          icon="email"
          placeholder="email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always" // ios clear btn
          textContentType="emailAddress" //ios autofill
        />
        <AppFormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password" //ios autofill
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
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
