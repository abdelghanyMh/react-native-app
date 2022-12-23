import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {AppText, ContactSellerForm} from '../components';
import ListItem from '../components/Lists/ListItem';
import colors from '../config/colors';
const ListingDetailsScreen = ({route: {params: listing}}) => {
  return (
    // FIXME not working
    <KeyboardAvoidingView>
      <ScrollView>
        <View>
          <Image style={styles.image} source={{uri: listing.images[0].url}} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}>$ {listing.price}</AppText>
            <View style={styles.userContainer}>
              <ListItem
                image={require('../assets/avatar.png')}
                title="username"
                subTitle="5 listing"
              />
            </View>
          </View>

          <ContactSellerForm listing={listing} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
