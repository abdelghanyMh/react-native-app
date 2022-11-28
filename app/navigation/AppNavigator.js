import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import {ListingEditScreen, AccountScreen} from '../screens';
import Icon from '../components/Icon';
import colors from '../config/colors';
import NewListingButton from './NewListingButton';
import Routes from './Routes';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Routes.Feed}
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="home"
              size={size}
              iconColor={color}
              backgroundColor={colors.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Listing_Edit}
        component={ListingEditScreen}
        options={({navigation}) => ({
          headerShown: false,
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(Routes.Listing_Edit)}
            />
          ),
        })}
      />
      <Tab.Screen
        name={Routes.Account}
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="person"
              size={size}
              iconColor={color}
              backgroundColor={colors.white}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
