import {StyleSheet, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../config/colors';

const ListItemDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback style={{height: '100%'}} onPress={onPress}>
      <View style={styles.container}>
        <Icon name="delete" size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
