import jwtDecode from 'jwt-decode';
import {useContext, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import * as Yup from 'yup';

import authApi from '../api/auth';
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';
import AuthContext from '../auth/context';
import cache from '../utils/cache';

// validation schema (validation rules for all inputs)
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('password'),
});

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const authContext = useContext(AuthContext);

  const handleSubmit = async ({email, password}) => {
    const result = await authApi.login(email, password);
    if (!result.ok) {
      return setLoginFailed(true);
    }

    setLoginFailed(false);
    console.log(result.data);
    const user = jwtDecode(result.data);
    console.log(user);
    // FIXME move setUser &&  cache.store to a new function in the auth context in order to secure the auth token
    authContext.setUser(user);
    cache.store('authToken', result.data);
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ErrorMessage
          error="Invalid email and/or password"
          visible={loginFailed}
        />
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
