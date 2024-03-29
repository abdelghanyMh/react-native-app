import jwtDecode from 'jwt-decode';
import {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

import authApi from '../api/auth';
import usersApi from '../api/users';
import AuthContext from '../auth/context';
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from '../components/forms';
import {Screen, AppActivityIndicator} from '../components';
import useApi from '../hooks/useApi';
import cache from '../utils/cache';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
  const loginApi = useApi(authApi.login);
  const registerApi = useApi(usersApi.register);
  const {user, setUser} = useContext(AuthContext);

  const [registerError, setRegisterError] = useState();

  const handleSubmit = async userInfo => {
    const result = await registerApi.request(userInfo);

    // handling errors
    if (!result.ok) {
      if (result.data) setRegisterError(result.data.error);
      else {
        setRegisterError('An unexpected error occurred.');
        console.log('RegisterScreen', result);
      }
      return;
    }

    // try to login new user
    const {data: authToken} = await loginApi.request(
      userInfo.email,
      userInfo.password,
    );
    // console.log('RegisterScreen', authToken);
    const newUser = jwtDecode(authToken);
    setUser(newUser);
    cache.store('authToken', authToken);
  };
  return (
    <>
      <AppActivityIndicator visible={loginApi.loading || registerApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{name: '', email: '', password: ''}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <ErrorMessage error={registerError} visible={registerError} />
          <AppFormField
            autoCorrect={false}
            icon="person"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
