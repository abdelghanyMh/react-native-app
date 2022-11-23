import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Icon style={styles.closeIcon} name="close" size={50} color="#fff" />
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
