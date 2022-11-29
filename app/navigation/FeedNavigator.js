import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListingScreen, ListingDetailsScreen} from '../screens';
import Routes from './Routes';

const Stack = createNativeStackNavigator();

export default function FeedNavigator() {
  return (
    // FIXME presentation  not working
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Listing}
        component={ListingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.Listing_Details}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
}
