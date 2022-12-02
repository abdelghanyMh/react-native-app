import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import Routes from '../navigation/Routes';

export default function WelcomeScreen({navigation: {navigate}}) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigate(Routes.Login)} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigate(Routes.Register)}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    color: colors.black,
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },
});
