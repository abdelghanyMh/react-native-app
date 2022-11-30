import {Picker} from '@react-native-picker/picker';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import defaultStyles from '../config/styles';
import Icon from './Icon';
const AppPicker = ({icon, onChangeItem, items, placeholder}) => {
  // this state is needed to display the selected  newSelectedItem
  const [value, setValue] = React.useState(items[0]);
  // set the initial  category value  to items[0]
  useEffect(() => {
    onChangeItem(value);
  }, []);

  const handlePress = (itemValue, itemIndex) => {
    const newSelectedItem = items[itemIndex];
    onChangeItem(newSelectedItem);
    setValue(itemValue);
  };
  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        backgroundColor={defaultStyles.colors.grey_light}
        iconColor={defaultStyles.colors.grey_medium}
      />
      <Picker
        style={styles.picker}
        placeholder={placeholder}
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) =>
          handlePress(itemValue, itemIndex)
        }>
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
