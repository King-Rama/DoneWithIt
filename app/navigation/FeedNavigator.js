import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routeConstants from '../navigation/routes'


const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode='modal' screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name={routeConstants.LISTINGS} component={ListingsScreen} />
      <Stack.Screen name={routeConstants.LISTING_DETAILS} component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;