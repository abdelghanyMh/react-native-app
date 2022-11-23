import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import defaultStyles from '../config/styles';
import Icon from './Icon';
const AppTextInput = ({icon, ...otherProps}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon
          name={icon}
          backgroundColor={defaultStyles.colors.grey_light}
          iconColor={defaultStyles.colors.grey_medium}
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.textInput]}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: defaultStyles.colors.grey_light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
  },
});
