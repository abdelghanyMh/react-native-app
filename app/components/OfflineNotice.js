import React from 'react';

import {StatusBar, StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import {useNetInfo} from '@react-native-community/netinfo';

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    elevation: Platform.OS === 'android' ? 1 : 0,
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: StatusBar.currentHeight,
    width: '100%',
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
