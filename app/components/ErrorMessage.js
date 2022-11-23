import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from './AppText';

const ErrorMessage = ({error, visible}) => {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {color: 'red', paddingLeft: 10},
});
