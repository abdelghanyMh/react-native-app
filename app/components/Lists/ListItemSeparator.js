import {StyleSheet, View} from 'react-native';
import colors from '../../config/colors';

const ListItemSeparator = () => {
  return <View style={styles.separator} />;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: colors.grey_light,
  },
});
