import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/Lists/ListItem';

const ListingDetailsScreen = ({route: {params}}) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: params.images[0].url}} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{params.title}</AppText>
        <AppText style={styles.price}>${params.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="username"
            subTitle="5 listing"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 7,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  userContainer: {
    marginVertical: 40,
  },
});
