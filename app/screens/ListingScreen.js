import {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import listingApi from '../api/listings';
import {
  AppActivityIndicator,
  AppButton,
  AppText,
  Card,
  Screen,
} from '../components';
import colors from '../config/colors';
import Routes from '../navigation/Routes';

const ListingScreen = ({navigation: {navigate}}) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingApi.getListings();
    setLoading(false);

    // handling errors
    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>couldn't retrieve the listings. </AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}

      <AppActivityIndicator visible={loading} />
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
