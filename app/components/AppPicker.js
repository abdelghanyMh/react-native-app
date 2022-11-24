import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import defaultStyles from '../config/styles';
import Icon from './Icon';
const AppPicker = ({
  icon,
  selectedValue,
  onValueChange,
  items,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        backgroundColor={defaultStyles.colors.grey_light}
        iconColor={defaultStyles.colors.grey_medium}
      />
      <Picker
        style={styles.picker}
        {...otherProps}
        selectedValue={selectedValue}
        // TODO check if this is changing the formik context value for the selected value
        onValueChange={onValueChange}>
        {items.map(({label, value}) => (
          <Picker.Item key={label} label={label} value={value} />
        ))}
      </Picker>
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: defaultStyles.colors.grey_light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  picker: {
    width: '90%',
  },
});
