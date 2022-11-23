/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextImput';

const App = () => {
  return (
    <View>
      <AppPicker icon="apps" />
      <AppTextInput
        icon="email"
        placeholder="email"
        clearButtonMode="always"
        keyboardType="email-address"
      />
    </View>
  );
};

export default App;
