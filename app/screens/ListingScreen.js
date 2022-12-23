import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import listingApi from '../api/listings';
import {
  AppActivityIndicator,
  AppButton,
  AppText,
  Card,
  Screen,
} from '../components';
import colors from '../config/colors';
import useApi from '../hooks/useApi';
import Routes from '../navigation/Routes';

import {useIsFocused} from '@react-navigation/native';

const ListingScreen = ({navigation: {navigate}}) => {
  const getListingsApi = useApi(listingApi.getListings);
  const isFocused = useIsFocused();

  useEffect(() => {
    getListingsApi.request();
  }, [isFocused]);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <View style={styles.offlineContainer}>
          <AppText>couldn't retrieve the listings. </AppText>
          <AppButton title="Retry" onPress={() => getListingsApi.request()} />
        </View>
      )}

      <AppActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
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
  offlineContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
