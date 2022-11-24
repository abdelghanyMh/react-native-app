import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import AppText from '../AppText';
import colors from '../../config/colors';
import Icon from '../Icon';

const ListItem = ({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.grey_light}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <Icon
              name="chevron-right"
              size={35}
              iconColor={colors.grey_medium}
              backgroundColor={colors.white}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.grey_medium,
  },
});
