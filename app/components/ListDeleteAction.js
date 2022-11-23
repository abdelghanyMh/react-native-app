import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const ListDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback style={{height: '100%'}} onPress={onPress}>
      <View style={styles.container}>
        <Icon name="delete" size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
