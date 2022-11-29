import {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import listingApi from '../api/listings';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Routes from '../navigation/Routes';

const ListingScreen = ({navigation: {navigate}}) => {
  const [listings, setListings] = useState([]);

  const loadListing = async () => {
    const response = await listingApi.getLisings();
    setListings(response.data);
  };

  useEffect(() => {
    loadListing();
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listings => listings.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
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
