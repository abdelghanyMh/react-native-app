import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import Routes from '../navigation/Routes';
const listing = [
  {
    id: 1,
    title: 'Red jacket for sell',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'couch in great condition',
    price: 100,
    image: require('../assets/couch.jpg'),
  },
];
const ListingScreen = ({navigation: {navigate}}) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
            onPress={() => navigate(Routes.Listing_Details, item)}
          />
        )}></FlatList>
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.grey_light,
  },
});
