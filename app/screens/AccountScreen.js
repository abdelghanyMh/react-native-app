import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import ListItem from '../components/Lists/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/Lists/ListItemSeparator';
import AuthContext from '../auth/context';
import cache from '../utils/cache';

const menuItem = [
  {
    title: 'my Listings',
    icon: {
      name: 'person',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'person',
      backgroundColor: colors.secondary,
    },
    targetScreen: 'Messages',
  },
];
const AccountScreen = ({navigation: {navigate}}) => {
  const authContext = useContext(AuthContext);

  const handleLogOut = () => {
    authContext.setUser(null);
    cache.remove('authToken');
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={authContext.user.name}
          subTitle={authContext.user.email}
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
        onPress={handleLogOut}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.grey_light,
  },
  container: {
    marginVertical: 20,
  },
});
