import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import defaultStyles from '../config/styles';
import Icon from './Icon';
const AppPicker = ({icon, ...otherProps}) => {
  const [category, setCategory] = useState();
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
        selectedValue={category}
        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
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
