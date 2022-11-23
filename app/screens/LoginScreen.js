import {Formik} from 'formik';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import * as Yup from 'yup';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';
// validation schema (validation rules for all inputs)
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('password'),
});
const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <AppTextInput
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              icon="email"
              placeholder="email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always" // ios clear btn
              textContentType="emailAddress" //ios autofill
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password" //ios autofill
            />
            <ErrorMessage error={errors.password} visible={touched.password} />

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
