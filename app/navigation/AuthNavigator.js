import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, WelcomeScreen} from '../screens';
import RegisterScreen from '../screens/RegisterScreen';
import Routes from './Routes';
const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Welcome}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={Routes.Login} component={LoginScreen} />
      <Stack.Screen name={Routes.Register} component={RegisterScreen} />
    </Stack.Navigator>
  );
}
