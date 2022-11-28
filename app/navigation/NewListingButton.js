import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import colors from '../config/colors';
import Icon from '../components/Icon';

const NewListingButton = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          size={50}
          name="add-circle"
          iconColor={colors.white}
          backgroundColor={colors.primary}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    width: 60,
    height: 60,
    bottom: 12,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: colors.white,
  },
});
